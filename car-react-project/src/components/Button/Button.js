import styled from "styled-components";

export const Button = styled.button`
  background-color: #3470ff;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  padding: 12px;
  width: 100%;
`;

export const ButtonLink = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #3470ff;
  text-decoration: underline;
  margin: 71px auto 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
