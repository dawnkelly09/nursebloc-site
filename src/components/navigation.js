import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NurseBlocLogo from '../../public/nursebloc-logo-vert.svg'
import { useWallet } from '@/wallets/wallet-selector';
import styles from '../app/globals.css'

export const Navigation = () => {

  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav-logo">
        <Link href="/" passHref legacyBehavior>
          <Image priority src={NurseBlocLogo} alt="Nursebloc" width="258" height="101" className="d-inline-block align-text-top" />
        </Link>
        <div>
          <Link href="" className='icons-row'>TG icon</Link>
          <Link href="" className='icons-row'>insta icon</Link>
          <Link href="" className='icons-row'>X icon</Link>
        </div>
        <div>
        <Link href="" className='links-row'>About</Link>
        <Link href="" className='links-row'>Plans</Link>
        <Link href="" className='links-row'>Membership</Link>
        <Link href="" className='links-row'>Nurses</Link>
        </div>
        <div className='navbar-nav'>
          <button className="btn btn-secondary" onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};