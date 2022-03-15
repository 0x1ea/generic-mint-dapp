import React from "react";
import { ConnectButton } from './ConnectButton'
import styled from 'styled-components';
import YOURLOGO from '../../assets/images/yourlogo.png'
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 9rem;
  border-bottom: 1px solid var(--secondary-color);
  justify-items: center;
  justify-content: space-between;
  opacity: 1;
  padding: 1rem 1.6rem;
  margin-bottom: 2.4rem;
`;

const HeaderTitle = styled.a`
  display: flex;
  text-decoration: none;
  font-size: var(--lg);
  color: var(--font-color);
  padding: 0.8rem;
  align-items: center;
  width: 10rem;
  height: 5rem;

  & img {
    object-fit: cover;
    width: 5rem;
  }
`;

const HeaderSubtitle = styled.div`
  font-weight: 600;
  color: var(--action-color);
  justify-self: start;
  
  & a {
    text-decoration: none;
  }
  
  & a:active {
    color: white;
  }

  & nav a {
    font-size: var(--lg);
    color: var(--action-color);
  }
  
  & nav  {
    font-size: var(--lg);
  }
`;


export function Header() {
  const link = "/";

  return(
    <HeaderContainer>
        <HeaderTitle href={link}>
            <img src={YOURLOGO} alt="Your Logo"/>
        </HeaderTitle>
        <HeaderSubtitle>
          <nav>
            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="airdrop">Airdrop</NavLink> |{" "}
            <NavLink to="about">About</NavLink> 
          </nav>

        </HeaderSubtitle>
        <ConnectButton/>
    </HeaderContainer>
  );

}