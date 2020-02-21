import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
width: 90%;
margin: 0 auto;
padding: 20px;  
`
const Title = styled.h2`
margin: 0;
padding: 0;
font-family: sans-serif;
font-size: 28px;
`
class RecipeForm extends Component {
    state = {  }
    render() {
        return (
            <Container>
            <Title>All recipes</Title>
            </Container>
        );
    }
}

export default RecipeForm;