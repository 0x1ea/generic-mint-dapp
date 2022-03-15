import styled from "styled-components"


export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  & h1 {
    font-size: var(--xl);
    margin-bottom: 4rem;
  }
  & p, & span {
    font-size: var(--lg);
  }



`;