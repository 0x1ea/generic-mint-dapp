
import React from "react";
import styled from 'styled-components';
import TWITTER from '../../assets/images/twitter.png';
import DISCORD from '../../assets/images/discord.png';
import INSTAGRAM from '../../assets/images/instagram.png';


const FooterText = styled.div`
  display: flex;
  color: var(--font-color);
  border-top: 1px solid var(--secondary-color);
  background-color: var(--primary-color);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: 300;
  align-items: center;
  margin: 0;
  height: 3rem;
  
  flex-direction: row;
  justify-content: space-between;

  & p {
    font-size: var(--md);
    padding-left: 1rem;
  }
`;

const FooterAnchor = styled.a`
  margin-left: 0.3rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--action-color);
  font-size: var(--md);
`;

const SNContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: end;
  align-items: center;

  & img {
    object-fit: cover;
    width: 20px;
    margin: 0 0.8rem;
  }
`;

function Footer() {
  return(
      <FooterText>
        <p>
          Build by
          <FooterAnchor href="https://twitter.com/leajesusg" target="_blank" rel="noreferrer">@leajesusg</FooterAnchor>
        </p>

        <SNContainer>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer">
            <img src={DISCORD} alt="Discord Logo"/>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={TWITTER} alt="Twitter Logo"/>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <img src={INSTAGRAM} alt="INSTAGRAM Logo"/>
          </a>
        </SNContainer>
      </FooterText>
  );
}

export { Footer }