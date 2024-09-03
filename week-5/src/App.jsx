import { useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';


function App() {
  const [value, setValue] = useState(0);
  // const {connection} = useConnection();

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/dlEZI8wq-EDAp8dHKXtmFym0QHQ5rZRI"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <WalletMultiButton />
            {/* <Airdrop/> */}
            {/* <WalletDisconnectButton /> */}
            <div>
            hi there
            <Airdrop/>
        </div>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
