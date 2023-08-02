import React from "react";
import styled from "styled-components";
import { websiteSecondary } from "../Styles/colors";
import { Title } from "../Styles/title";
import { FiShoppingCart } from "react-icons/fi";

const NavBarStyled = styled.div`
  background-color: ${websiteSecondary};
  padding: 8px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 999;
  height: 35px;
`;
//z-index placed navbar at top of page

const LogoContaner = styled.div`
  height: 30px;
  display: flex;
`;

const Logo = styled(Title)`
  font-size: 30px;
  margin-left: 5px;
  color: #e4dcdc;
  text-shadow: 4px 4px 4px #231869;
`;

const CheckoutButton = styled(FiShoppingCart)`
  color: #e4dcdc;
  font-size: 30px;
  margin-right: 30px;
  margin-top: 3px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  &:hover {
    cursor: pointer;
    color: grey;
    margin-top: 4px;
  }
`;

const Signinbutton = styled.span`
  color: #e4dcdc;
  font-size: 15px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  &:hover {
    cursor: pointer;
    color: grey;
    margin-top: 1px
  }
`;

const SignInButtonContainer = styled.div`
  height: 24px;
  display: flex;
  padding: 1px;
  margin-left: 15px;
  margin-top: 15px;
`;

const LeftSideNavContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const toggle = (setToggleOrderModal, toggleOrderModal) => {
  setToggleOrderModal(!toggleOrderModal);
};

const toggleLogin = (setOpenLogin, openLogin) => {
  setOpenLogin(!openLogin);
};

export function NavBar({ setToggleOrderModal, toggleOrderModal, setOpenLogin, openLogin, loggedIn }) {
  return (
    <NavBarStyled>
      <LeftSideNavContainer>
        <LogoContaner>
          <Logo>Mars Pizza Co.</Logo>
        </LogoContaner>
        <SignInButtonContainer>
          <Signinbutton onClick={() => toggleLogin(setOpenLogin, openLogin)}>
            {!loggedIn ? (
              'Sign in/ Sign up'
            ) : (
              `Hi ${loggedIn.email}`
            )}
          </Signinbutton>
        </SignInButtonContainer>
      </LeftSideNavContainer>
      <CheckoutButton 
        onClick={() => toggle(setToggleOrderModal, toggleOrderModal)}
      />
    </NavBarStyled>
  );
}
