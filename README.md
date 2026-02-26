# Staking Dapp

This repository contains a simple Web3 staking decentralized application (DApp) built with a React frontend (Vite) and Solidity smart contracts. The DApp allows users to approve a stake token, stake tokens into a staking contract, earn rewards in a reward token, claim those rewards, and withdraw staked tokens.

## Tested Contracts (addresses)

- Stake Token: 0x0CbA48Eff2042bdd69F395294EF840F35883c036
- Reward Token: 0x947c3E51981b9Ad3fB4b7a85aA14Da6141B56984
- Staking Contract: 0x4b3c73e45a826F8E51F730f4D5DBFCC26aF3cB80

Note: these are the contract addresses that were used and tested by the project author. Make sure your wallet is connected to the network where these contracts are deployed (the same network used during testing).

## Features

- Approve stake token for the staking contract
- Stake tokens into the staking contract
- View staked balance and earned rewards
- Claim earned reward tokens
- Withdraw staked tokens

## Project structure (important files)

- `client/` — React frontend application (Vite)
	- `client/src/ABI/` — ABIs for the deployed contracts
	- `client/src/components/` — UI components for staking, wallet, navigation, etc.
	- `client/src/context/` — Web3 and staking context providers

## Prerequisites

- Node.js (v16 or later recommended) and npm installed
- A Web3 wallet such as MetaMask configured to the network where the above contracts are deployed

## Local installation and running the client

1. Clone the repository (if you haven't already):

```bash
git clone <repo url>

2. **Navigate to the Client Directory**
   ```bash
   cd client
   ```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The dev server will start via Vite and typically be available at `http://localhost:5173` (check console output).

## Configuration and where to set the contract addresses

- ABIs are stored in `client/src/ABI/` as JSON files. The frontend uses these ABIs to interact with the deployed contracts.
- If you need to override or confirm the contract addresses used by the frontend, check the Web3 / Staking context file in `client/src/context/` (for example the `StakingContext.jsx` and `Web3Context.jsx` files). Update the addresses there if you want the app to target a different deployment.

## Typical usage (with MetaMask)

1. Open the app in the browser and connect your wallet via the `Connect Wallet` button.
2. Make sure MetaMask is on the network that matches the contract deployment used above.
3. If needed, approve the `Stake Token` to allow the staking contract to transfer tokens on your behalf.
4. Stake an amount using the `Stake` UI.
5. Monitor `Staked Amount` and `Earned Reward` panels.
6. Claim rewards and withdraw staked tokens when desired.

## Troubleshooting

- If you do not see balances or interactions fail, verify that your wallet is connected to the correct network and that the contract addresses above match the network.
- Check the browser console for errors coming from the DApp. Missing or wrong ABIs/addresses are common causes.

## Notes

- This repository includes Solidity contracts under `contracts/` for reference (`StakeToken.sol`, `RewardToken.sol`, `Staking.sol`). The frontend is currently configured to use the deployed contract addresses listed above.
- If you redeploy contracts and want the frontend to point to new addresses, update the addresses in the frontend context files.

---

##
