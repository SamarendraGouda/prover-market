import dotenv from "dotenv";
import { ethers } from "ethers";

import { abi, address, provider } from "./metadata/escrow";

dotenv.config();

const privateKey: any = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(address, abi, wallet);

const task = {
  deadline: Math.floor((Date.now() + 1e8) / 1000),
  cid: 1, // this is circuit id
  amount: ethers.utils.parseEther("0.0001"),
  data: ethers.utils.formatBytes32String("fuckit"),
};

const options = {
  value: ethers.utils.parseEther("0.0001"),
};

async function initiateTask() {
  try {
    const tx = await contract.initiateTask(task, options);
    console.log("Transaction hash:", tx.hash);

    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
  } catch (error) {
    console.error("Error initiating task:", error);
  }
}

initiateTask();
