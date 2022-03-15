import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useNFTContract } from './useNFTContract';

export const useNFTData = () => {

  const { active, library } = useWeb3React();
  const NFTContract = useNFTContract(); 
  const [supply, setSupply] = React.useState('');
  const [maxSupply, setMaxSupply] = React.useState('');
  const [price, setPrice] = React.useState('')

    if (active) {
      NFTContract.methods.totalSupply().call().then(res => setSupply(res));
      NFTContract.methods.MAX_SUPPLY().call().then(res => setMaxSupply(res));
      NFTContract.methods.PRICE_PER_TOKEN().call().then(res => setPrice(library.utils.fromWei(res, "ether")));
      console.log('hey')
    }

  return {supply,setMaxSupply, maxSupply, setSupply, price, setPrice};
}