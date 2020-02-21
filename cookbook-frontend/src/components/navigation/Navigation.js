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
    color: blue;
}
`

const Navigation = () => (
    <Wrapper>
    <NavigationItem to="/">Home</NavigationItem>
    <NavigationItem to="/recipeAdd">Add recipe</NavigationItem>
    </Wrapper>
);

export default Navigation;
