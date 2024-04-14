'use client';
import './globals.css';
import Footer from '../components/Footer'
import { Navigation } from '@/components/navigation';
//NEAR imports
import '@near-wallet-selector/modal-ui/styles.css';
import { NetworkId } from '@/config';
import { useInitWallet } from '@/wallets/wallet-selector';

export default function RootLayout({ children }) {

  useInitWallet({ createAccessKeyFor: '', networkId: NetworkId });

  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
