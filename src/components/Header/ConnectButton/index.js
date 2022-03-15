import React from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { connector } from "../../../config/web3";
import styled from 'styled-components';
import { UserRejectedRequestError } from '@web3-react/injected-connector';

const StyledConnectButton = styled.button`
  display: flex;
  letter-spacing: 0.125rem;
  font-weight: 600;
  justify-content: center;
  border: none;
  background-color: var(--secondary-color);
  color: var(--font-color);
  padding: 0.75rem;
  width: 10rem;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 1.4rem;
  font-size: var(--md);
  align-self: center;
  margin: 0.8rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
              0 2px 2px hsl(0deg 0% 0% / 0.075),
              0 4px 4px hsl(0deg 0% 0% / 0.075),
              0 8px 8px hsl(0deg 0% 0% / 0.075),
              0 16px 16px hsl(0deg 0% 0% / 0.075);

  &:hover {
    opacity: 83%;
  }

  &[disabled] {
    box-shadow:none;
  }
`;

export function ConnectButton() {

  const {active, activate, deactivate, error} = useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;
  const isUserRejectedRequestError = error instanceof UserRejectedRequestError;

  const connect = useCallback(() => {
    if (isUserRejectedRequestError) {
      localStorage.removeItem("previouslyConnected")
      window.location.reload(false)
    } else {
      try {
        activate(connector);
        localStorage.setItem("previouslyConnected", "true");
      } catch (error) {
        console.log(error);
      }
    }
  }, [activate,isUserRejectedRequestError]);

  const  disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected")
  }

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  return(
    <div>
        <StyledConnectButton
          onClick={!active ? connect : disconnect}
          disabled={isUnsupportedChain}
        >
          {
            active ? "Disconnect" : (
              isUnsupportedChain ? "Invalid Chain" : "Connect"
            )
          }
        </StyledConnectButton>
    </div>
  );
}
