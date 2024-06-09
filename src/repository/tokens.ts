import erc20Abi from "../abi/erc20.abi.json";

export type Token = {
  balance: bigint;
  decimals: number;
  name: string;
  symbol: string;
  allowance: bigint;
};

const tokens = [
  "0x6b175474e89094c44da98b954eedeac495271d0f",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0x111111111117dc0aa78b770fa6a738034120c302",
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  "0x514910771af9ca656af840dff83e8264ecf986ca",
  "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
  "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
];

export const contractConfig = ({
  address,
  spender,
}: {
  address: `0x${string}`;
  spender: `0x${string}`;
}) =>
  tokens.flatMap((token) => [
    {
      address: token,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [address],
    },

    {
      address: token,
      abi: erc20Abi,
      functionName: "symbol",
    },
    {
      address: token,
      abi: erc20Abi,
      functionName: "name",
    },
    {
      address: token,
      abi: erc20Abi,
      functionName: "decimals",
    },
    {
      address: token,
      abi: erc20Abi,
      functionName: "allowance",
      args: [address, spender],
    },
  ]);
