import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #474f7a;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: #ffd0ec;
  color: #474f7a;
  border: none;
  outline: none;
  width: 50%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #474f7a;
  font-weight: 700;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 25%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #474f7a;
  background-color: #ffd0ec;
  font-weight: 700;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    color: #ffd0ec;
    background-color: #474f7a;
  }
`;
