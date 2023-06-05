import { ethers } from 'ethers';
import Splorite from './SubscriptionModel.json';

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract('0x430A245f5d7BaFeC31d440bF39a00bf7C1D9FF19', Splorite.abi, signer);

    return contractReader;
  }
};
