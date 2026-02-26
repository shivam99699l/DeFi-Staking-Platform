import { useState,useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import WalletHandlerContext from "../../context/WalletHandlerContext";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";
import { toast } from "react-hot-toast";
import "./Wallet.css";

const Wallet =({children})=>{
 const [state,setState]=useState({
    provider:null,
    account:null,
    stakingContract:null,
    stakeTokenContract:null,
    chianId:null
 })
 const [isLoading,setIsLoading]=useState(false);
 
 useEffect(()=>{
   window.ethereum.on('accountsChanged',()=>handleAccountChange(setState))
   window.ethereum.on('chainChanged',()=>handleChainChange(setState)) 
   
   return()=>{
    window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setState))
    window.ethereum.removeListener('chainChanged',()=>handleChainChange(setState)) 
   }
},[])
 const handleWallet = async()=>{
  try{
    setIsLoading(true);
    const { provider,selectedAccount,stakingContract,stakeTokenContract,chainId} = await connectWallet();
    const prevAccount = state.selectedAccount || state.account;
    if(!selectedAccount){
      toast.error("Failed to connect wallet");
      return;
    }
    if(prevAccount && prevAccount.toLowerCase() === selectedAccount.toLowerCase()){
      setState(prev=>({...prev,provider,selectedAccount,stakingContract,stakeTokenContract,chainId}));
      toast("Already connected");
    } else {
      setState({provider,selectedAccount,stakingContract,stakeTokenContract,chainId});
      toast.success("Wallet connected");
    }

  }catch(error){
     toast.error("Failed to connect wallet")
     console.error(error.message)
  }finally{
    setIsLoading(false)
  }
 }
 return (
   <div className="Connect-Wallet">
     <Web3Context.Provider value={state}>
       <WalletHandlerContext.Provider value={{handleWallet, isLoading}}>
         {children}
       </WalletHandlerContext.Provider>
     </Web3Context.Provider>
   </div>
 )
}
export default Wallet;