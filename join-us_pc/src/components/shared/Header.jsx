import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from "./Theme";

import LogoSrc from '../../assets/images/signup-logo.png';

const Menus = [
  {
    name: "가이드",
    src: "/guide",
  },
  {
    name: "조인 매칭",
    src: "/join-matching",
  },
  {
    name: "매칭 현황",
    src: "/matching-status",
  },
]

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #999;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
`
const Logo = styled(Link)`
  width: 120px;
  height: 50px;
  background-image: url(${LogoSrc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 100px;
`
const Menu = styled.ul`
  width: 400px;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  font-weight: bold;
  height: 50px;
  padding-bottom: 5px;
`
const MenuList = styled.li`
`
const MenuLink = styled(Link)`
  color: #333;
  font-size: 18px;
  transition: .5s all;
  font-weight: normal;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`

function Header(){
  return(
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Logo to="/"></Logo>
          <Menu>
            {Menus.map((menu) => {
              return(
                <MenuList>
                  <MenuLink to={menu.src}>{menu.name}</MenuLink>
                </MenuList>
              );
            })}
          </Menu>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Header;