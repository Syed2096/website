import { React, useState } from "react";
import styled from 'styled-components';

function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        Ahmed<span>Syed</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/skills">Skills</MenuLink>
        <MenuLink href="/experience">Experience</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
}

export default NavbarNew;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  // overflow: auto;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  font-family: Arial;
  z-index: 1;
  &:hover {
    color: black;
    background-color: white;
    border-radius: 10rem;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  font-family: Arial;
  z-index: 1;
  transition: all 0.3s ease-in;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  &:hover {
    color: black;
    background-color: white;
    border-radius: 10rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 968px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 968px) {
    display: flex;
  }
`;