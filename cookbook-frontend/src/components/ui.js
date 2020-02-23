import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  text-transform: uppercase;
  background: #fff;
  padding: 10px;
  border: solid 3px #7676e3;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  color: #7676e3;
  :hover {
    background: #7676e3;
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
`;

export const TextArea = styled.textarea`
  height: 200px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
