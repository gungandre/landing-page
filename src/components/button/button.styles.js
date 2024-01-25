import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 14px 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => `1px solid ${props.borderColor}`};
  color: ${(props) => props.color};
  cursor: pointer;
`;
