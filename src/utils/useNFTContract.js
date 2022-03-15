import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { TestNFT } from '../config/artifacts/TestNFT';

export const useNFTContract = () => {

  const { active, library, chainId} = useWeb3React();
  
  const NFTContract = useMemo(
    () => {
      if (active) 
        return new library.eth.Contract(
          TestNFT.abi,
          TestNFT.address[chainId]
        )
    }
    , [active, chainId, library?.eth?.Contract] 
  );

  return NFTContract;
}