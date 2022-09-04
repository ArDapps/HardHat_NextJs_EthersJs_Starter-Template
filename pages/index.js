import Head from 'next/head'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'
import abiInterface  from './../public/artifacts/contracts/Token.sol/Token.json'

import styles from '../styles/Home.module.css'

export default function Home() {
  const[message,setMessage]= useState("")
  const contractAddress = "0xF050F4acB88a375F41D49b8Bd4cEb692D01dab83"
  const getTokenName = async ()=>{
    if(typeof window.ethereum !=="undefined"){
      let contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(window.ethereum)
      const chainId =  await provider.getNetwork()
      console.log(chainId.chainId)
    
         contract = new ethers.Contract(contractAddress,abiInterface.abi,provider)
      
      console.log(  contract.functions)

        try {
            const name = await contract.tokenName();
           
            const fullAlert =  name+"We Are Work At Chain Id " +chainId.chainId
            setMessage(fullAlert)
                } catch (error) {
            console.log("error at get name",error)
        }



    }else{
        console.log("Please install metamask wallet")

    }

}
  return (
    <div className={styles.container}>
      <Head>
        <title>HardHat and Ethers Starter Theme </title>
        <meta name="description" content="Generated by Bahaa Ehab Taha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-5'>
        <button className='btn btn-danger' onClick={getTokenName}>Get Message</button>
      </div>
      <h3>{message}</h3>

    </div>
  )
}
