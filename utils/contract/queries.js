import { ethers } from 'ethers';
import { contract } from './index';

export async function subscribe() {
  try {
    const contractObj = await contract();
    const data = await contractObj.subscribe({
      value: ethers.utils.parseEther('0.0053'),
    });

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function unsubscribe() {
  try {
    const contractObj = await contract();
    const data = await contractObj.unsubscribe();

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function isSubscribed() {
  try {
    const contractObj = await contract();
    const isSubscribed = await contractObj.isSubscribed();

    return isSubscribed;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}
