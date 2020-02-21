import React, { Component } from 'react';
import styled from "styled-components";

const Form = styled.form`
width: 40%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`
const Input = styled.input`
margin-bottom: 10px;
width: 100%;
border: solid 3px #7676e3;
padding: 5px;
border-radius: 15px;
outline: none;
`
const Textarea = styled.textarea`
margin-bottom: 10px;
height: 200px;
width: 100%;
border: solid 3px #7676e3;
padding: 5px;
border-radius: 20px;
outline: none;
`
const BtnAdd = styled.button`
width: 20%;
  height: 40px;
  text-transform: uppercase;
  text-decoration: none;
  background: #7676e3;
  padding: 10px;
  border-radius: 50px;
  border: solid 3px #7676e3;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  color: white;
  :hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    transition: all 0.4s ease 0s;
    box-shadow: 0px 0px 5px 2px rgba(184, 153, 235, 1);
  }
    `
class RecipeAddPage extends Component {
    state = {  }
    render() {
        return (
            <Form>
                <Input placeholder="Recipe name"/>
                <Textarea placeholder="Write recipe description"></Textarea>
                <BtnAdd>add</BtnAdd>
            </Form>
        );
    }
}

export default RecipeAddPage;