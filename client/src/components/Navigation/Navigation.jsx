import { useContext } from "react";
import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../ClaimReward/ClaimReward";
import WalletHandlerContext from "../../context/WalletHandlerContext";
import "./Navigation.css"

const Navigation = ()=>{
  const { handleWallet, isLoading } = useContext(WalletHandlerContext);
  
  return(
    <header className="navbar">
    <div className="navbar-btns">
      <ClaimReward />
    </div>
    <div className="navbar-acc">
      <ConnectedAccount />
      <ConnectedNetwork />
      <button 
        className="connect-wallet-btn" 
        onClick={handleWallet}
        disabled={isLoading}
        title="Connect Wallet"
      >
        <svg className="wallet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path>
          <path d="M4 7h16"></path>
          <circle cx="18" cy="17" r="2"></circle>
        </svg>
        <span className="wallet-text">{isLoading ? "Connecting..." : "Connect Wallet"}</span>
      </button>
    </div>
  </header>
  )
}
export default Navigation;