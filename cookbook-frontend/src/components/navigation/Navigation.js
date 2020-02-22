import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
width: 90%;
margin: 0 auto;
padding: 20px;
margin-bottom: 10px;
display: flex;
justify-content: flex-start;
background-color: rgb(255, 255, 255);
   box-shadow: 0px 0px 11px 9px rgba(0,0,0,0.19);
   border-radius: 10px;
`

const NavigationItem = styled(NavLink).attrs({
    activeClassName: "active"
})`
color: black;
margin-right: 20px;
text-decoration: none;
font-size: 22px;
font-weight: 700;
font-family: sans-serif;
&.active {
    color:#7676e3;
}
`

const Navigation = () => (
    <Wrapper>
    <NavigationItem to="/" exact>Home</NavigationItem>
    <NavigationItem to="/recipeAdd" exact>Add recipe</NavigationItem>
    </Wrapper>
);

export default Navigation;
