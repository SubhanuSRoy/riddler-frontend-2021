import styled from "styled-components";

export const ButtonWrap = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
`;

export const Button = styled.a`
  border-radius: 30px;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 6px solid rgba(254, 49, 118, 1);
  background: #dbf429;
  display: inline-block;
  position: relative;

  &:hover {
    top: 4px;
    border-bottom: 4px solid rgba(254, 49, 118, 1);
  }

  &:active {
    top: 6px;
    border: none;
  }
`;