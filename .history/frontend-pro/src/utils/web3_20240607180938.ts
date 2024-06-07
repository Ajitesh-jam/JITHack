import React from "react";
import Web3 from "web3";
import skinMarketABI from "../components/abis/skinMarketABI.json";
import skinOwnerABI from "../components/abis/skinOwnershipABI.json";

// Define the Ethereum interface with the request method
interface Ethereum {
  request: (args: {
    method: string;
    params?: Array<unknown>;
  }) => Promise<unknown>;
}

// Extend the Window interface to include ethereum
interface Window {
  ethereum?: Ethereum;
}

declare let window: Window;

export const Utils: React.FC = () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    return <Web3Context.Provider value={web3}>{/* your provider */}</Web3Context.Provider>;
  }
  return null; // or handle the case where MetaMask is not installed
};

export const getAccounts = async () => {
  if (window.ethereum) {
    try {
      // Request account access if needed
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Type assertion to tell TypeScript that accounts is an array of strings
      if (Array.isArray(accounts) && typeof accounts[0] === "string") {
        return accounts;
      } else {
        throw new Error("Failed to retrieve account");
      }
    } catch (error) {
      throw new Error(`User denied account access: ${error}`);
    }
  } else {
    throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
  }
};

export const SkinMarket: React.FC = () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const skinMarketAdd = "0x69Bce34c7Ac7A22A383b32f33e725921b60Dd6dB";
    return <web3.eth.Contract contractAbi={skinMarketABI} contractAddress={skinMarketAdd} />;
  } else {
    throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
  }
};

export const SkinOwner: React.FC = () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const skinOwnershipAdd = "0x7161636060D3f7692a3CF2ED395A29d05763b2e4";
    return <web3.eth.Contract contractAbi={skinOwnerABI} contractAddress={skinOwnershipAdd} />;
  } else {
    throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
  }
};
