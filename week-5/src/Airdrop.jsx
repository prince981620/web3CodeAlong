import { useWallet,useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function Airdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();

    const [value,setValue] = useState();

    return (
        <div>
            hi mrs {wallet.publicKey?.toString()}
            value {value}
            <input onChange={(e)=>{
              setValue(e.target.value)
            }} type="text" placeholder='Enter the Amount' />
            <button onClick={async ()=>{
                console.log("hi there")
                const signature = await connection.requestAirdrop(wallet.publicKey,Number(value)*LAMPORTS_PER_SOL);
                await connection.confirmTransaction(signature);
            }}>Airdrop</button>
        </div>
    )
}