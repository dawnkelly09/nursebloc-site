import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NurseBlocLogo from '../../public/nursebloc-hor.png'
import TG from '../../public/tg-purple.svg'
import Insta from '../../public/insta-purple.svg'
import Twitter from '../../public/twitter-purple.svg'
//***NEAR wallet */
import { useWallet } from '@/wallets/wallet-selector';
import styles from '../app/globals.css'
//Dynamic xyz imports
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export const Navigation = () => {
//***NEAR wallet***
  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');
  //how label should appear on NEAR login/out button
  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout NEAR ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login NEAR');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav-logo">
        <Link href="/" passHref legacyBehavior>
          <Image priority src={NurseBlocLogo} alt="Nursebloc" height="80"/>
        </Link>
        <div>
          <Link href="" className='icons-row'>
            <Image priority src={TG} height={20} alt="telegram"/>
          </Link>
          <Link href="" className='icons-row'>
            <Image priority src={Insta} height={20} alt="instagram"/> 
          </Link>
          <Link href="" className='icons-row'>
            <Image priority src={Twitter} height={20} alt="Twitter aka X"/>
          </Link>
        </div>
        <div>
        <Link href="" className='links-row'>About</Link>
        <Link href="" className='links-row'>Plans</Link>
        <Link href="" className='links-row'>Membership</Link>
        <Link href="" className='links-row'>Nurses</Link>
        </div>
        {/**NEAR button */}
        <div className='navbar-nav'>
          <button className="btn btn-secondary" onClick={action} > {label} </button>
        </div>
        <div className='navbar-nav'>
        <DynamicContextProvider 
          settings={{ 
          environmentId: '083f7686-ea77-41da-9929-5a0fc0abbc47',
          walletConnectors: [ EthereumWalletConnectors ],
          }}> 
            <DynamicWidget /> 
          </DynamicContextProvider> 
        </div>
      </div>
    </nav>
  );
};