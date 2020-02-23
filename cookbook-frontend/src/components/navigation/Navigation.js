import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
  border-bottom: solid 3px #7676e3;
`;

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
    color: #7676e3;
  }
`;

const Navigation = () => (
  <Wrapper>
    <NavigationItem to="/" exact>
      Home
    </NavigationItem>
    <NavigationItem to="/recipeAdd" exact>
      Add recipe
    </NavigationItem>
  </Wrapper>
);

export default Navigation;
