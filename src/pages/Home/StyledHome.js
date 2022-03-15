import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  & h1 {
    font-size: var(--xl);
  }

  & p {
    font-size: var(--lg);
    color: var(--action-color);
    margin-bottom: 25.5rem;
  }
`;