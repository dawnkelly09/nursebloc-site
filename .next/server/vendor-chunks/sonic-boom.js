"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sonic-boom";
exports.ids = ["vendor-chunks/sonic-boom"];
exports.modules = {

/***/ "(ssr)/./node_modules/sonic-boom/index.js":
/*!******************************************!*\
  !*** ./node_modules/sonic-boom/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst EventEmitter = __webpack_require__(/*! events */ \"events\")\nconst inherits = (__webpack_require__(/*! util */ \"util\").inherits)\nconst path = __webpack_require__(/*! path */ \"path\")\nconst sleep = __webpack_require__(/*! atomic-sleep */ \"(ssr)/./node_modules/atomic-sleep/index.js\")\n\nconst BUSY_WRITE_TIMEOUT = 100\n\n// 16 KB. Don't write more than docker buffer size.\n// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13\nconst MAX_WRITE = 16 * 1024\n\nfunction openFile (file, sonic) {\n  sonic._opening = true\n  sonic._writing = true\n  sonic._asyncDrainScheduled = false\n\n  // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false\n  // for sync mode, there is no way to add a listener that will receive these\n\n  function fileOpened (err, fd) {\n    if (err) {\n      sonic._reopening = false\n      sonic._writing = false\n      sonic._opening = false\n\n      if (sonic.sync) {\n        process.nextTick(() => {\n          if (sonic.listenerCount('error') > 0) {\n            sonic.emit('error', err)\n          }\n        })\n      } else {\n        sonic.emit('error', err)\n      }\n      return\n    }\n\n    sonic.fd = fd\n    sonic.file = file\n    sonic._reopening = false\n    sonic._opening = false\n    sonic._writing = false\n\n    if (sonic.sync) {\n      process.nextTick(() => sonic.emit('ready'))\n    } else {\n      sonic.emit('ready')\n    }\n\n    if (sonic._reopening) {\n      return\n    }\n\n    // start\n    if (!sonic._writing && sonic._len > sonic.minLength && !sonic.destroyed) {\n      actualWrite(sonic)\n    }\n  }\n\n  const flags = sonic.append ? 'a' : 'w'\n  const mode = sonic.mode\n\n  if (sonic.sync) {\n    try {\n      if (sonic.mkdir) fs.mkdirSync(path.dirname(file), { recursive: true })\n      const fd = fs.openSync(file, flags, mode)\n      fileOpened(null, fd)\n    } catch (err) {\n      fileOpened(err)\n      throw err\n    }\n  } else if (sonic.mkdir) {\n    fs.mkdir(path.dirname(file), { recursive: true }, (err) => {\n      if (err) return fileOpened(err)\n      fs.open(file, flags, mode, fileOpened)\n    })\n  } else {\n    fs.open(file, flags, mode, fileOpened)\n  }\n}\n\nfunction SonicBoom (opts) {\n  if (!(this instanceof SonicBoom)) {\n    return new SonicBoom(opts)\n  }\n\n  let { fd, dest, minLength, maxLength, maxWrite, sync, append = true, mode, mkdir, retryEAGAIN } = opts || {}\n\n  fd = fd || dest\n\n  this._bufs = []\n  this._len = 0\n  this.fd = -1\n  this._writing = false\n  this._writingBuf = ''\n  this._ending = false\n  this._reopening = false\n  this._asyncDrainScheduled = false\n  this._hwm = Math.max(minLength || 0, 16387)\n  this.file = null\n  this.destroyed = false\n  this.minLength = minLength || 0\n  this.maxLength = maxLength || 0\n  this.maxWrite = maxWrite || MAX_WRITE\n  this.sync = sync || false\n  this.append = append || false\n  this.mode = mode\n  this.retryEAGAIN = retryEAGAIN || (() => true)\n  this.mkdir = mkdir || false\n\n  if (typeof fd === 'number') {\n    this.fd = fd\n    process.nextTick(() => this.emit('ready'))\n  } else if (typeof fd === 'string') {\n    openFile(fd, this)\n  } else {\n    throw new Error('SonicBoom supports only file descriptors and files')\n  }\n  if (this.minLength >= this.maxWrite) {\n    throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`)\n  }\n\n  this.release = (err, n) => {\n    if (err) {\n      if (err.code === 'EAGAIN' && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {\n        if (this.sync) {\n          // This error code should not happen in sync mode, because it is\n          // not using the underlining operating system asynchronous functions.\n          // However it happens, and so we handle it.\n          // Ref: https://github.com/pinojs/pino/issues/783\n          try {\n            sleep(BUSY_WRITE_TIMEOUT)\n            this.release(undefined, 0)\n          } catch (err) {\n            this.release(err)\n          }\n        } else {\n          // Let's give the destination some time to process the chunk.\n          setTimeout(() => {\n            fs.write(this.fd, this._writingBuf, 'utf8', this.release)\n          }, BUSY_WRITE_TIMEOUT)\n        }\n      } else {\n        this._writing = false\n\n        this.emit('error', err)\n      }\n      return\n    }\n    this.emit('write', n)\n\n    this._len -= n\n    this._writingBuf = this._writingBuf.slice(n)\n\n    if (this._writingBuf.length) {\n      if (!this.sync) {\n        fs.write(this.fd, this._writingBuf, 'utf8', this.release)\n        return\n      }\n\n      try {\n        do {\n          const n = fs.writeSync(this.fd, this._writingBuf, 'utf8')\n          this._len -= n\n          this._writingBuf = this._writingBuf.slice(n)\n        } while (this._writingBuf)\n      } catch (err) {\n        this.release(err)\n        return\n      }\n    }\n\n    const len = this._len\n    if (this._reopening) {\n      this._writing = false\n      this._reopening = false\n      this.reopen()\n    } else if (len > this.minLength) {\n      actualWrite(this)\n    } else if (this._ending) {\n      if (len > 0) {\n        actualWrite(this)\n      } else {\n        this._writing = false\n        actualClose(this)\n      }\n    } else {\n      this._writing = false\n      if (this.sync) {\n        if (!this._asyncDrainScheduled) {\n          this._asyncDrainScheduled = true\n          process.nextTick(emitDrain, this)\n        }\n      } else {\n        this.emit('drain')\n      }\n    }\n  }\n\n  this.on('newListener', function (name) {\n    if (name === 'drain') {\n      this._asyncDrainScheduled = false\n    }\n  })\n}\n\nfunction emitDrain (sonic) {\n  const hasListeners = sonic.listenerCount('drain') > 0\n  if (!hasListeners) return\n  sonic._asyncDrainScheduled = false\n  sonic.emit('drain')\n}\n\ninherits(SonicBoom, EventEmitter)\n\nSonicBoom.prototype.write = function (data) {\n  if (this.destroyed) {\n    throw new Error('SonicBoom destroyed')\n  }\n\n  const len = this._len + data.length\n  const bufs = this._bufs\n\n  if (this.maxLength && len > this.maxLength) {\n    this.emit('drop', data)\n    return this._len < this._hwm\n  }\n\n  if (\n    bufs.length === 0 ||\n    bufs[bufs.length - 1].length + data.length > this.maxWrite\n  ) {\n    bufs.push('' + data)\n  } else {\n    bufs[bufs.length - 1] += data\n  }\n\n  this._len = len\n\n  if (!this._writing && this._len >= this.minLength) {\n    actualWrite(this)\n  }\n\n  return this._len < this._hwm\n}\n\nSonicBoom.prototype.flush = function () {\n  if (this.destroyed) {\n    throw new Error('SonicBoom destroyed')\n  }\n\n  if (this._writing || this.minLength <= 0) {\n    return\n  }\n\n  if (this._bufs.length === 0) {\n    this._bufs.push('')\n  }\n\n  actualWrite(this)\n}\n\nSonicBoom.prototype.reopen = function (file) {\n  if (this.destroyed) {\n    throw new Error('SonicBoom destroyed')\n  }\n\n  if (this._opening) {\n    this.once('ready', () => {\n      this.reopen(file)\n    })\n    return\n  }\n\n  if (this._ending) {\n    return\n  }\n\n  if (!this.file) {\n    throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom')\n  }\n\n  this._reopening = true\n\n  if (this._writing) {\n    return\n  }\n\n  const fd = this.fd\n  this.once('ready', () => {\n    if (fd !== this.fd) {\n      fs.close(fd, (err) => {\n        if (err) {\n          return this.emit('error', err)\n        }\n      })\n    }\n  })\n\n  openFile(file || this.file, this)\n}\n\nSonicBoom.prototype.end = function () {\n  if (this.destroyed) {\n    throw new Error('SonicBoom destroyed')\n  }\n\n  if (this._opening) {\n    this.once('ready', () => {\n      this.end()\n    })\n    return\n  }\n\n  if (this._ending) {\n    return\n  }\n\n  this._ending = true\n\n  if (this._writing) {\n    return\n  }\n\n  if (this._len > 0 && this.fd >= 0) {\n    actualWrite(this)\n  } else {\n    actualClose(this)\n  }\n}\n\nSonicBoom.prototype.flushSync = function () {\n  if (this.destroyed) {\n    throw new Error('SonicBoom destroyed')\n  }\n\n  if (this.fd < 0) {\n    throw new Error('sonic boom is not ready yet')\n  }\n\n  if (!this._writing && this._writingBuf.length > 0) {\n    this._bufs.unshift(this._writingBuf)\n    this._writingBuf = ''\n  }\n\n  while (this._bufs.length) {\n    const buf = this._bufs[0]\n    try {\n      this._len -= fs.writeSync(this.fd, buf, 'utf8')\n      this._bufs.shift()\n    } catch (err) {\n      if (err.code !== 'EAGAIN' || !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {\n        throw err\n      }\n\n      sleep(BUSY_WRITE_TIMEOUT)\n    }\n  }\n}\n\nSonicBoom.prototype.destroy = function () {\n  if (this.destroyed) {\n    return\n  }\n  actualClose(this)\n}\n\nfunction actualWrite (sonic) {\n  const release = sonic.release\n  sonic._writing = true\n  sonic._writingBuf = sonic._writingBuf || sonic._bufs.shift() || ''\n\n  if (sonic.sync) {\n    try {\n      const written = fs.writeSync(sonic.fd, sonic._writingBuf, 'utf8')\n      release(null, written)\n    } catch (err) {\n      release(err)\n    }\n  } else {\n    fs.write(sonic.fd, sonic._writingBuf, 'utf8', release)\n  }\n}\n\nfunction actualClose (sonic) {\n  if (sonic.fd === -1) {\n    sonic.once('ready', actualClose.bind(null, sonic))\n    return\n  }\n\n  sonic.destroyed = true\n  sonic._bufs = []\n\n  if (sonic.fd !== 1 && sonic.fd !== 2) {\n    fs.close(sonic.fd, done)\n  } else {\n    setImmediate(done)\n  }\n\n  function done (err) {\n    if (err) {\n      sonic.emit('error', err)\n      return\n    }\n\n    if (sonic._ending && !sonic._writing) {\n      sonic.emit('finish')\n    }\n    sonic.emit('close')\n  }\n}\n\n/**\n * These export configurations enable JS and TS developers\n * to consumer SonicBoom in whatever way best suits their needs.\n * Some examples of supported import syntax includes:\n * - `const SonicBoom = require('SonicBoom')`\n * - `const { SonicBoom } = require('SonicBoom')`\n * - `import * as SonicBoom from 'SonicBoom'`\n * - `import { SonicBoom } from 'SonicBoom'`\n * - `import SonicBoom from 'SonicBoom'`\n */\nSonicBoom.SonicBoom = SonicBoom\nSonicBoom.default = SonicBoom\nmodule.exports = SonicBoom\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc29uaWMtYm9vbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsY0FBSTtBQUN2QixxQkFBcUIsbUJBQU8sQ0FBQyxzQkFBUTtBQUNyQyxpQkFBaUIsa0RBQXdCO0FBQ3pDLGFBQWEsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixjQUFjLG1CQUFPLENBQUMsZ0VBQWM7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELGlCQUFpQjtBQUMzRTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDBGQUEwRjs7QUFFbEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3NvbmljLWJvb20vaW5kZXguanM/NzUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKVxuY29uc3QgaW5oZXJpdHMgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IHNsZWVwID0gcmVxdWlyZSgnYXRvbWljLXNsZWVwJylcblxuY29uc3QgQlVTWV9XUklURV9USU1FT1VUID0gMTAwXG5cbi8vIDE2IEtCLiBEb24ndCB3cml0ZSBtb3JlIHRoYW4gZG9ja2VyIGJ1ZmZlciBzaXplLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnkvbW9ieS9ibG9iLzUxM2VjNzM4MzEyNjk5NDdkMzhhNjQ0YzI3OGNlM2NhYzM2NzgzYjIvZGFlbW9uL2xvZ2dlci9jb3BpZXIuZ28jTDEzXG5jb25zdCBNQVhfV1JJVEUgPSAxNiAqIDEwMjRcblxuZnVuY3Rpb24gb3BlbkZpbGUgKGZpbGUsIHNvbmljKSB7XG4gIHNvbmljLl9vcGVuaW5nID0gdHJ1ZVxuICBzb25pYy5fd3JpdGluZyA9IHRydWVcbiAgc29uaWMuX2FzeW5jRHJhaW5TY2hlZHVsZWQgPSBmYWxzZVxuXG4gIC8vIE5PVEU6ICdlcnJvcicgYW5kICdyZWFkeScgZXZlbnRzIGVtaXR0ZWQgYmVsb3cgb25seSByZWxldmFudCB3aGVuIHNvbmljLnN5bmM9PT1mYWxzZVxuICAvLyBmb3Igc3luYyBtb2RlLCB0aGVyZSBpcyBubyB3YXkgdG8gYWRkIGEgbGlzdGVuZXIgdGhhdCB3aWxsIHJlY2VpdmUgdGhlc2VcblxuICBmdW5jdGlvbiBmaWxlT3BlbmVkIChlcnIsIGZkKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgc29uaWMuX3Jlb3BlbmluZyA9IGZhbHNlXG4gICAgICBzb25pYy5fd3JpdGluZyA9IGZhbHNlXG4gICAgICBzb25pYy5fb3BlbmluZyA9IGZhbHNlXG5cbiAgICAgIGlmIChzb25pYy5zeW5jKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGlmIChzb25pYy5saXN0ZW5lckNvdW50KCdlcnJvcicpID4gMCkge1xuICAgICAgICAgICAgc29uaWMuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29uaWMuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzb25pYy5mZCA9IGZkXG4gICAgc29uaWMuZmlsZSA9IGZpbGVcbiAgICBzb25pYy5fcmVvcGVuaW5nID0gZmFsc2VcbiAgICBzb25pYy5fb3BlbmluZyA9IGZhbHNlXG4gICAgc29uaWMuX3dyaXRpbmcgPSBmYWxzZVxuXG4gICAgaWYgKHNvbmljLnN5bmMpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4gc29uaWMuZW1pdCgncmVhZHknKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc29uaWMuZW1pdCgncmVhZHknKVxuICAgIH1cblxuICAgIGlmIChzb25pYy5fcmVvcGVuaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBzdGFydFxuICAgIGlmICghc29uaWMuX3dyaXRpbmcgJiYgc29uaWMuX2xlbiA+IHNvbmljLm1pbkxlbmd0aCAmJiAhc29uaWMuZGVzdHJveWVkKSB7XG4gICAgICBhY3R1YWxXcml0ZShzb25pYylcbiAgICB9XG4gIH1cblxuICBjb25zdCBmbGFncyA9IHNvbmljLmFwcGVuZCA/ICdhJyA6ICd3J1xuICBjb25zdCBtb2RlID0gc29uaWMubW9kZVxuXG4gIGlmIChzb25pYy5zeW5jKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzb25pYy5ta2RpcikgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZShmaWxlKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAgIGNvbnN0IGZkID0gZnMub3BlblN5bmMoZmlsZSwgZmxhZ3MsIG1vZGUpXG4gICAgICBmaWxlT3BlbmVkKG51bGwsIGZkKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZmlsZU9wZW5lZChlcnIpXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0gZWxzZSBpZiAoc29uaWMubWtkaXIpIHtcbiAgICBmcy5ta2RpcihwYXRoLmRpcm5hbWUoZmlsZSksIHsgcmVjdXJzaXZlOiB0cnVlIH0sIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBmaWxlT3BlbmVkKGVycilcbiAgICAgIGZzLm9wZW4oZmlsZSwgZmxhZ3MsIG1vZGUsIGZpbGVPcGVuZWQpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBmcy5vcGVuKGZpbGUsIGZsYWdzLCBtb2RlLCBmaWxlT3BlbmVkKVxuICB9XG59XG5cbmZ1bmN0aW9uIFNvbmljQm9vbSAob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29uaWNCb29tKSkge1xuICAgIHJldHVybiBuZXcgU29uaWNCb29tKG9wdHMpXG4gIH1cblxuICBsZXQgeyBmZCwgZGVzdCwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIG1heFdyaXRlLCBzeW5jLCBhcHBlbmQgPSB0cnVlLCBtb2RlLCBta2RpciwgcmV0cnlFQUdBSU4gfSA9IG9wdHMgfHwge31cblxuICBmZCA9IGZkIHx8IGRlc3RcblxuICB0aGlzLl9idWZzID0gW11cbiAgdGhpcy5fbGVuID0gMFxuICB0aGlzLmZkID0gLTFcbiAgdGhpcy5fd3JpdGluZyA9IGZhbHNlXG4gIHRoaXMuX3dyaXRpbmdCdWYgPSAnJ1xuICB0aGlzLl9lbmRpbmcgPSBmYWxzZVxuICB0aGlzLl9yZW9wZW5pbmcgPSBmYWxzZVxuICB0aGlzLl9hc3luY0RyYWluU2NoZWR1bGVkID0gZmFsc2VcbiAgdGhpcy5faHdtID0gTWF0aC5tYXgobWluTGVuZ3RoIHx8IDAsIDE2Mzg3KVxuICB0aGlzLmZpbGUgPSBudWxsXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcbiAgdGhpcy5taW5MZW5ndGggPSBtaW5MZW5ndGggfHwgMFxuICB0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aCB8fCAwXG4gIHRoaXMubWF4V3JpdGUgPSBtYXhXcml0ZSB8fCBNQVhfV1JJVEVcbiAgdGhpcy5zeW5jID0gc3luYyB8fCBmYWxzZVxuICB0aGlzLmFwcGVuZCA9IGFwcGVuZCB8fCBmYWxzZVxuICB0aGlzLm1vZGUgPSBtb2RlXG4gIHRoaXMucmV0cnlFQUdBSU4gPSByZXRyeUVBR0FJTiB8fCAoKCkgPT4gdHJ1ZSlcbiAgdGhpcy5ta2RpciA9IG1rZGlyIHx8IGZhbHNlXG5cbiAgaWYgKHR5cGVvZiBmZCA9PT0gJ251bWJlcicpIHtcbiAgICB0aGlzLmZkID0gZmRcbiAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHRoaXMuZW1pdCgncmVhZHknKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmQgPT09ICdzdHJpbmcnKSB7XG4gICAgb3BlbkZpbGUoZmQsIHRoaXMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb25pY0Jvb20gc3VwcG9ydHMgb25seSBmaWxlIGRlc2NyaXB0b3JzIGFuZCBmaWxlcycpXG4gIH1cbiAgaWYgKHRoaXMubWluTGVuZ3RoID49IHRoaXMubWF4V3JpdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG1pbkxlbmd0aCBzaG91bGQgYmUgc21hbGxlciB0aGFuIG1heFdyaXRlICgke3RoaXMubWF4V3JpdGV9KWApXG4gIH1cblxuICB0aGlzLnJlbGVhc2UgPSAoZXJyLCBuKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgaWYgKGVyci5jb2RlID09PSAnRUFHQUlOJyAmJiB0aGlzLnJldHJ5RUFHQUlOKGVyciwgdGhpcy5fd3JpdGluZ0J1Zi5sZW5ndGgsIHRoaXMuX2xlbiAtIHRoaXMuX3dyaXRpbmdCdWYubGVuZ3RoKSkge1xuICAgICAgICBpZiAodGhpcy5zeW5jKSB7XG4gICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIHNob3VsZCBub3QgaGFwcGVuIGluIHN5bmMgbW9kZSwgYmVjYXVzZSBpdCBpc1xuICAgICAgICAgIC8vIG5vdCB1c2luZyB0aGUgdW5kZXJsaW5pbmcgb3BlcmF0aW5nIHN5c3RlbSBhc3luY2hyb25vdXMgZnVuY3Rpb25zLlxuICAgICAgICAgIC8vIEhvd2V2ZXIgaXQgaGFwcGVucywgYW5kIHNvIHdlIGhhbmRsZSBpdC5cbiAgICAgICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9waW5vanMvcGluby9pc3N1ZXMvNzgzXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNsZWVwKEJVU1lfV1JJVEVfVElNRU9VVClcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSh1bmRlZmluZWQsIDApXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBMZXQncyBnaXZlIHRoZSBkZXN0aW5hdGlvbiBzb21lIHRpbWUgdG8gcHJvY2VzcyB0aGUgY2h1bmsuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmcy53cml0ZSh0aGlzLmZkLCB0aGlzLl93cml0aW5nQnVmLCAndXRmOCcsIHRoaXMucmVsZWFzZSlcbiAgICAgICAgICB9LCBCVVNZX1dSSVRFX1RJTUVPVVQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dyaXRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbWl0KCd3cml0ZScsIG4pXG5cbiAgICB0aGlzLl9sZW4gLT0gblxuICAgIHRoaXMuX3dyaXRpbmdCdWYgPSB0aGlzLl93cml0aW5nQnVmLnNsaWNlKG4pXG5cbiAgICBpZiAodGhpcy5fd3JpdGluZ0J1Zi5sZW5ndGgpIHtcbiAgICAgIGlmICghdGhpcy5zeW5jKSB7XG4gICAgICAgIGZzLndyaXRlKHRoaXMuZmQsIHRoaXMuX3dyaXRpbmdCdWYsICd1dGY4JywgdGhpcy5yZWxlYXNlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGNvbnN0IG4gPSBmcy53cml0ZVN5bmModGhpcy5mZCwgdGhpcy5fd3JpdGluZ0J1ZiwgJ3V0ZjgnKVxuICAgICAgICAgIHRoaXMuX2xlbiAtPSBuXG4gICAgICAgICAgdGhpcy5fd3JpdGluZ0J1ZiA9IHRoaXMuX3dyaXRpbmdCdWYuc2xpY2UobilcbiAgICAgICAgfSB3aGlsZSAodGhpcy5fd3JpdGluZ0J1ZilcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLnJlbGVhc2UoZXJyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsZW4gPSB0aGlzLl9sZW5cbiAgICBpZiAodGhpcy5fcmVvcGVuaW5nKSB7XG4gICAgICB0aGlzLl93cml0aW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX3Jlb3BlbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLnJlb3BlbigpXG4gICAgfSBlbHNlIGlmIChsZW4gPiB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgYWN0dWFsV3JpdGUodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VuZGluZykge1xuICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgYWN0dWFsV3JpdGUodGhpcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dyaXRpbmcgPSBmYWxzZVxuICAgICAgICBhY3R1YWxDbG9zZSh0aGlzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93cml0aW5nID0gZmFsc2VcbiAgICAgIGlmICh0aGlzLnN5bmMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hc3luY0RyYWluU2NoZWR1bGVkKSB7XG4gICAgICAgICAgdGhpcy5fYXN5bmNEcmFpblNjaGVkdWxlZCA9IHRydWVcbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXREcmFpbiwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KCdkcmFpbicpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5vbignbmV3TGlzdGVuZXInLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnZHJhaW4nKSB7XG4gICAgICB0aGlzLl9hc3luY0RyYWluU2NoZWR1bGVkID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGVtaXREcmFpbiAoc29uaWMpIHtcbiAgY29uc3QgaGFzTGlzdGVuZXJzID0gc29uaWMubGlzdGVuZXJDb3VudCgnZHJhaW4nKSA+IDBcbiAgaWYgKCFoYXNMaXN0ZW5lcnMpIHJldHVyblxuICBzb25pYy5fYXN5bmNEcmFpblNjaGVkdWxlZCA9IGZhbHNlXG4gIHNvbmljLmVtaXQoJ2RyYWluJylcbn1cblxuaW5oZXJpdHMoU29uaWNCb29tLCBFdmVudEVtaXR0ZXIpXG5cblNvbmljQm9vbS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbmljQm9vbSBkZXN0cm95ZWQnKVxuICB9XG5cbiAgY29uc3QgbGVuID0gdGhpcy5fbGVuICsgZGF0YS5sZW5ndGhcbiAgY29uc3QgYnVmcyA9IHRoaXMuX2J1ZnNcblxuICBpZiAodGhpcy5tYXhMZW5ndGggJiYgbGVuID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICB0aGlzLmVtaXQoJ2Ryb3AnLCBkYXRhKVxuICAgIHJldHVybiB0aGlzLl9sZW4gPCB0aGlzLl9od21cbiAgfVxuXG4gIGlmIChcbiAgICBidWZzLmxlbmd0aCA9PT0gMCB8fFxuICAgIGJ1ZnNbYnVmcy5sZW5ndGggLSAxXS5sZW5ndGggKyBkYXRhLmxlbmd0aCA+IHRoaXMubWF4V3JpdGVcbiAgKSB7XG4gICAgYnVmcy5wdXNoKCcnICsgZGF0YSlcbiAgfSBlbHNlIHtcbiAgICBidWZzW2J1ZnMubGVuZ3RoIC0gMV0gKz0gZGF0YVxuICB9XG5cbiAgdGhpcy5fbGVuID0gbGVuXG5cbiAgaWYgKCF0aGlzLl93cml0aW5nICYmIHRoaXMuX2xlbiA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgIGFjdHVhbFdyaXRlKHRoaXMpXG4gIH1cblxuICByZXR1cm4gdGhpcy5fbGVuIDwgdGhpcy5faHdtXG59XG5cblNvbmljQm9vbS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU29uaWNCb29tIGRlc3Ryb3llZCcpXG4gIH1cblxuICBpZiAodGhpcy5fd3JpdGluZyB8fCB0aGlzLm1pbkxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGhpcy5fYnVmcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLl9idWZzLnB1c2goJycpXG4gIH1cblxuICBhY3R1YWxXcml0ZSh0aGlzKVxufVxuXG5Tb25pY0Jvb20ucHJvdG90eXBlLnJlb3BlbiA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU29uaWNCb29tIGRlc3Ryb3llZCcpXG4gIH1cblxuICBpZiAodGhpcy5fb3BlbmluZykge1xuICAgIHRoaXMub25jZSgncmVhZHknLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlb3BlbihmaWxlKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGhpcy5fZW5kaW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIXRoaXMuZmlsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlb3BlbiBhIGZpbGUgZGVzY3JpcHRvciwgeW91IG11c3QgcGFzcyBhIGZpbGUgdG8gU29uaWNCb29tJylcbiAgfVxuXG4gIHRoaXMuX3Jlb3BlbmluZyA9IHRydWVcblxuICBpZiAodGhpcy5fd3JpdGluZykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZmQgPSB0aGlzLmZkXG4gIHRoaXMub25jZSgncmVhZHknLCAoKSA9PiB7XG4gICAgaWYgKGZkICE9PSB0aGlzLmZkKSB7XG4gICAgICBmcy5jbG9zZShmZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIG9wZW5GaWxlKGZpbGUgfHwgdGhpcy5maWxlLCB0aGlzKVxufVxuXG5Tb25pY0Jvb20ucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb25pY0Jvb20gZGVzdHJveWVkJylcbiAgfVxuXG4gIGlmICh0aGlzLl9vcGVuaW5nKSB7XG4gICAgdGhpcy5vbmNlKCdyZWFkeScsICgpID0+IHtcbiAgICAgIHRoaXMuZW5kKClcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRoaXMuX2VuZGluZykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fZW5kaW5nID0gdHJ1ZVxuXG4gIGlmICh0aGlzLl93cml0aW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGhpcy5fbGVuID4gMCAmJiB0aGlzLmZkID49IDApIHtcbiAgICBhY3R1YWxXcml0ZSh0aGlzKVxuICB9IGVsc2Uge1xuICAgIGFjdHVhbENsb3NlKHRoaXMpXG4gIH1cbn1cblxuU29uaWNCb29tLnByb3RvdHlwZS5mbHVzaFN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU29uaWNCb29tIGRlc3Ryb3llZCcpXG4gIH1cblxuICBpZiAodGhpcy5mZCA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbmljIGJvb20gaXMgbm90IHJlYWR5IHlldCcpXG4gIH1cblxuICBpZiAoIXRoaXMuX3dyaXRpbmcgJiYgdGhpcy5fd3JpdGluZ0J1Zi5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5fYnVmcy51bnNoaWZ0KHRoaXMuX3dyaXRpbmdCdWYpXG4gICAgdGhpcy5fd3JpdGluZ0J1ZiA9ICcnXG4gIH1cblxuICB3aGlsZSAodGhpcy5fYnVmcy5sZW5ndGgpIHtcbiAgICBjb25zdCBidWYgPSB0aGlzLl9idWZzWzBdXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2xlbiAtPSBmcy53cml0ZVN5bmModGhpcy5mZCwgYnVmLCAndXRmOCcpXG4gICAgICB0aGlzLl9idWZzLnNoaWZ0KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY29kZSAhPT0gJ0VBR0FJTicgfHwgIXRoaXMucmV0cnlFQUdBSU4oZXJyLCBidWYubGVuZ3RoLCB0aGlzLl9sZW4gLSBidWYubGVuZ3RoKSkge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgc2xlZXAoQlVTWV9XUklURV9USU1FT1VUKVxuICAgIH1cbiAgfVxufVxuXG5Tb25pY0Jvb20ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgIHJldHVyblxuICB9XG4gIGFjdHVhbENsb3NlKHRoaXMpXG59XG5cbmZ1bmN0aW9uIGFjdHVhbFdyaXRlIChzb25pYykge1xuICBjb25zdCByZWxlYXNlID0gc29uaWMucmVsZWFzZVxuICBzb25pYy5fd3JpdGluZyA9IHRydWVcbiAgc29uaWMuX3dyaXRpbmdCdWYgPSBzb25pYy5fd3JpdGluZ0J1ZiB8fCBzb25pYy5fYnVmcy5zaGlmdCgpIHx8ICcnXG5cbiAgaWYgKHNvbmljLnN5bmMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd3JpdHRlbiA9IGZzLndyaXRlU3luYyhzb25pYy5mZCwgc29uaWMuX3dyaXRpbmdCdWYsICd1dGY4JylcbiAgICAgIHJlbGVhc2UobnVsbCwgd3JpdHRlbilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlbGVhc2UoZXJyKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmcy53cml0ZShzb25pYy5mZCwgc29uaWMuX3dyaXRpbmdCdWYsICd1dGY4JywgcmVsZWFzZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3R1YWxDbG9zZSAoc29uaWMpIHtcbiAgaWYgKHNvbmljLmZkID09PSAtMSkge1xuICAgIHNvbmljLm9uY2UoJ3JlYWR5JywgYWN0dWFsQ2xvc2UuYmluZChudWxsLCBzb25pYykpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzb25pYy5kZXN0cm95ZWQgPSB0cnVlXG4gIHNvbmljLl9idWZzID0gW11cblxuICBpZiAoc29uaWMuZmQgIT09IDEgJiYgc29uaWMuZmQgIT09IDIpIHtcbiAgICBmcy5jbG9zZShzb25pYy5mZCwgZG9uZSlcbiAgfSBlbHNlIHtcbiAgICBzZXRJbW1lZGlhdGUoZG9uZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHNvbmljLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNvbmljLl9lbmRpbmcgJiYgIXNvbmljLl93cml0aW5nKSB7XG4gICAgICBzb25pYy5lbWl0KCdmaW5pc2gnKVxuICAgIH1cbiAgICBzb25pYy5lbWl0KCdjbG9zZScpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGVzZSBleHBvcnQgY29uZmlndXJhdGlvbnMgZW5hYmxlIEpTIGFuZCBUUyBkZXZlbG9wZXJzXG4gKiB0byBjb25zdW1lciBTb25pY0Jvb20gaW4gd2hhdGV2ZXIgd2F5IGJlc3Qgc3VpdHMgdGhlaXIgbmVlZHMuXG4gKiBTb21lIGV4YW1wbGVzIG9mIHN1cHBvcnRlZCBpbXBvcnQgc3ludGF4IGluY2x1ZGVzOlxuICogLSBgY29uc3QgU29uaWNCb29tID0gcmVxdWlyZSgnU29uaWNCb29tJylgXG4gKiAtIGBjb25zdCB7IFNvbmljQm9vbSB9ID0gcmVxdWlyZSgnU29uaWNCb29tJylgXG4gKiAtIGBpbXBvcnQgKiBhcyBTb25pY0Jvb20gZnJvbSAnU29uaWNCb29tJ2BcbiAqIC0gYGltcG9ydCB7IFNvbmljQm9vbSB9IGZyb20gJ1NvbmljQm9vbSdgXG4gKiAtIGBpbXBvcnQgU29uaWNCb29tIGZyb20gJ1NvbmljQm9vbSdgXG4gKi9cblNvbmljQm9vbS5Tb25pY0Jvb20gPSBTb25pY0Jvb21cblNvbmljQm9vbS5kZWZhdWx0ID0gU29uaWNCb29tXG5tb2R1bGUuZXhwb3J0cyA9IFNvbmljQm9vbVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sonic-boom/index.js\n");

/***/ })

};
;