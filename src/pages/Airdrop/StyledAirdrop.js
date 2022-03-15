import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    font-size: var(--lg)
  }

  & h1 {
    font-size: var(--xl)
  }

`;

export const ImageContainer = styled.img`
  object-fit: cover;
  width: 20rem;
  margin: 5rem 1rem 1rem;
`;

export const StyledButton = styled.button`
  display: flex;
  letter-spacing: 0.125rem;
  font-weight: 600;
  justify-content: center;
  border: none;
  background-color: var(--secondary-color);
  color: var(--font-color);
  padding: 0.75rem;
  width: 20rem;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 1.4rem;
  font-size: var(--lg);
  align-self: center;
  margin: 0.8rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
              0 2px 2px hsl(0deg 0% 0% / 0.075),
              0 4px 4px hsl(0deg 0% 0% / 0.075),
              0 8px 8px hsl(0deg 0% 0% / 0.075),
              0 16px 16px hsl(0deg 0% 0% / 0.075);

  margin-bottom: 11rem;

  &:hover {
    opacity: 83%;
  }

  &:active {
    box-shadow: none;
  }

  &[disabled]{
    opacity: 38%;
    box-shadow: none;
    cursor: auto;
  }
`;