// import { Link } from "react-router-dom";
import React from "react";
import {StyledHome} from "./StyledHome"

export function Home() {

  const [image, setImage] = React.useState();

  const getData = () => {
    fetch("https://ipfs.io/ipfs/QmboUuStzRhthiw1HGr5uS7DWQ8zVgRUfCdAJyDHmqDGUs/0")
    .then(response => {
       return response.json();
    })
    .then(jsondata => setImage(jsondata.image));
  }

  return (
    <StyledHome>
      <h1
        onClick={getData}
      >
        Home Page
      </h1>
      
      <p>
        UNDER CONSTRUCTION
        <span>🚧👷‍♂️</span>
      </p>

      {
        image && <img src={image} alt="NFT"/>
      }

    </StyledHome>
  );
}