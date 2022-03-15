// import { Link } from "react-router-dom";
import React from "react";
import {AboutContainer, ImageContainer, StyledButton} from "./StyledAirdrop";
import  IMAGE from "../../assets/images/dragon.png"

import { useWeb3React } from "@web3-react/core";
import { useNFTContract } from "../../utils/useNFTContract";

import { mint } from '../../utils/Mint';
import { NFTImageLoader } from './NFTImageLoader';
import { useNFTData } from "../../utils/useNFTData";

const testFunction= (setLoading) => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}

export function Airdrop() {

  const NFTContract = useNFTContract();
  const {account, active} = useWeb3React(); 
  const [loading, setLoading] = React.useState(true);
  const {supply, maxSupply, price} = useNFTData();
  const numberOfTokens = 1;

  React.useEffect(() => {
    testFunction(setLoading);
  }, [loading]);

  return (
    <AboutContainer>
      <h1>Tibia Dragons on Rinkeby</h1>
      {loading && <NFTImageLoader />}
      {!loading && <ImageContainer src={IMAGE} alt="NFT example" />}

      <p>NFTs: {active ? `${supply} / ${maxSupply}` : ""} </p>
      <p>Price: {active ? `${price} ETH` : ""}</p>
      <StyledButton
        id="mint-button"
        disabled={!active}
        onClick={() => {
          mint(NFTContract, account, numberOfTokens)
        }}
      >
        MINT
      </StyledButton>
    </AboutContainer>
  );
}