import { ethers } from "ethers";

export const abi = [
  {
    type: "function",
    name: "completeTask",
    inputs: [
      { name: "proverId", type: "uint256", internalType: "uint256" },
      { name: "proveId", type: "uint256", internalType: "uint256" },
      { name: "proof", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ctr",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initiateTask",
    inputs: [
      {
        name: "task_",
        type: "tuple",
        internalType: "struct Escrow.Task",
        components: [
          { name: "ctr", type: "uint256", internalType: "uint256" },
          { name: "user", type: "address", internalType: "address" },
          { name: "deadline", type: "uint32", internalType: "uint32" },
          { name: "cid", type: "uint256", internalType: "uint256" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "proverCnt",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerNewProver",
    inputs: [{ name: "prover", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "TaskInit",
    inputs: [
      {
        name: "task",
        type: "tuple",
        indexed: false,
        internalType: "struct Escrow.Task",
        components: [
          { name: "ctr", type: "uint256", internalType: "uint256" },
          { name: "user", type: "address", internalType: "address" },
          { name: "deadline", type: "uint32", internalType: "uint32" },
          { name: "cid", type: "uint256", internalType: "uint256" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Taskcomplete",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "prover",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      { name: "ctr", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "proof", type: "bytes", indexed: false, internalType: "bytes" },
    ],
    anonymous: false,
  },
];

export const address = "0xE57323E54df87bFf9766EB2b25423bDD7b2e0053";

export const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon_amoy"
);
