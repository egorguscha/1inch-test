## Setup

```
pnpm install
pnpm dev
```

## App

https://1inch-test-kprzpe890-egor-guschas-projects.vercel.app

## Test Task for Lead Frontend Engineer with DeFi Experience

### Objective

Create a simple web application that displays user balances for 10 popular tokens on the Ethereum blockchain, including DAI, USDC, USDT, and a native token. The interface should also display the user allowance of each token for the 1inch router contract.

### Requirements

1. **Tech Stack:**

   - Frontend framework of your choice
   - Web3 integration for interacting with the Ethereum blockchain
   - Modern CSS framework of your choice (e.g., Tailwind CSS, Material-UI)

2. **Functionality:**

   - An input field to enter the user's Ethereum address or a button to connect a wallet and retrieve the address.
   - Display balances of 10 popular tokens on the Ethereum blockchain for the given address.
   - Display the user allowance of each token for the 1inch router contract.

3. **Tokens to Include:**

   - DAI (Dai Stablecoin)
   - USDC (USD Coin)
   - USDT (Tether)
   - Native token (ETH)
   - Any 6 other popular ERC-20 tokens (you can choose based on popularity).

4. **1inch Router Contract:**

   - Address: `0x111111125421ca6dc452d289314280a0f8842a65`
   - [1inch Router Contract on Etherscan](https://etherscan.io/address/0x111111125421ca6dc452d289314280a0f8842a65#code)

5. **Details to Display:**

   - Token name and symbol.
   - Token balance (consider token decimals).
   - User allowance for the 1inch router contract (consider token decimals).

6. **Multicall:**
   - Use a Multicall smart contract of your choice to optimize the fetching of token balances and allowances.
   - Note: Multicall usage is required.

### Submission

- Create a new repository on GitHub.
- Provide the link to the GitHub repository with your code.
- Ensure the repository includes a README with instructions on how to set up and run the application locally.
- If you deploy the application, include the deployment link in the README.

### Evaluation Criteria

- Code quality and organization.
- Correctness and efficiency of blockchain interactions.
- UI/UX design and responsiveness.
- Handling of edge cases and errors.

### Resources

- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Ethers.js Documentation](https://docs.ethers.io/v5/)
- [1inch Multicall Documentation](https://github.com/1inch/multicall) feel free to use any other of your choice

This task is designed to evaluate your skills in frontend development, DeFi interactions, and overall coding proficiency. Good luck!
