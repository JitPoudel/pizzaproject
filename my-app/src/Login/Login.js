import React from "react";
import styled from "styled-components";

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 2;
`;

const LoginContainer = styled.div`
  width: 550px;
  background-color: #590a00;
  margin-top: 10px;
  top: 52px;
  z-index: 10;
  height: 550px;
  display: flex;
  border-radius: 20px;
  margin-left: -275px;
  left: 50%;
  right: 50%;
  position: absolute;
`;

const IntroTextContainer = styled.div`
  margin-top: 25px;
  font-size: 30;
  color: white;
  width: 550px;
  margin-left: -275px;
  left: 50%;
  right: 50%;
  position: absolute;
  text-align: center;
`;

const LoginSignUpContainer = styled.div`
  margin-left: 5%;
  margin-top: 100px;
  height: fit-content;
  padding-bottom: 25px;
  width: 90%;
  background-color: white;
  border-radius: 20px;
`;

const EmailTextContainer = styled.input`
  display: block;
  margin-top: 35px;
  border: 1px solid white;
  width: 90%;
  background-color: lightgray;
  color: black;
  margin-left: 4%;
  border-radius: 5px;
  opacity: 0.9;
`;

const PasswordTextContainer = styled.input`
  display: block;
  margin-top: 40px;
  border: 1px solid white;
  width: 90%;
  background-color: lightgray;
  color: black;
  margin-left: 4%;
  border-radius: 5px;
  opacity: 0.9;
`;

const LoginButtonContainer = styled.button`
  display: block;
  width: 40%;
  margin-top: 25px;
  font-weight: bold;
  color: #590a00;
  margin-left: 30%;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

const SignUpButtonConntainer = styled.button`
  display: block;
  width: 40%;
  margin-top: 25px;
  font-weight: bold;
  color: #590a00;
  margin-left: 30%;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

const LogOutSignInWithProviderContainer = styled.div`
  height: 150px;
  border-radius: 20px;
  width: 90%;
  background-color: white;
  display: flex;
  margin-top: 150px;
  margin-left: 5%;
  align-items: center;
`;

const LogoutButtonContainer = styled.button`
  display: block;
  width: 40%;
  font-weight: bold;
  color: #590a00;
  margin-left: 30%;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

const SignInWithProviderContainer = styled.button`
  display: block;
  width: 40%;
  margin-top: 25px;
  font-weight: bold;
  color: #590a00;
  margin-left: 30%;
  height: fit-content;
  font-size: 20px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

const ShowLoginError = styled.div`
  width: 90%;
  margin-left: 5%;
  display: block;
  color: red;
  text-decoration: underline;
  align-items: center;
  margin-top: 15px;
  text-align: center;
`;

export function Login({
  setOpenLogin,
  loginWithGoogle,
  setEmail,
  setPassword,
  loginEmailPassword,
  createAccount,
  logout,
  loggedIn,
  error,
  setError,
}) {
  function close() {
    setOpenLogin(false);
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <LoginContainer>
        {!loggedIn ? (
          <>
            <IntroTextContainer>
              Welcome to Mars Pizza Co. You can sign in or sign up here!
            </IntroTextContainer>
            <LoginSignUpContainer>
              <EmailTextContainer
                placeholder="enteryouremail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordTextContainer
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowLoginError> {error}</ShowLoginError>
              <LoginButtonContainer
                onClick={() => {
                  loginEmailPassword();
                  if (error === "") {
                    close();
                  }
                }}>
                Sign In
              </LoginButtonContainer>
              <SignUpButtonConntainer
                onClick={() => {
                  createAccount();
                  if (error === "") {
                    close();
                  }
                }}>
                Sign Up
              </SignUpButtonConntainer>
              <SignInWithProviderContainer
                onClick={() => {
                  loginWithGoogle();
                  if (error === "") {
                    close();
                  }
                }}>
                Sign In With Google
              </SignInWithProviderContainer>
            </LoginSignUpContainer>
          </>
        ) : (
          <>
            <IntroTextContainer>
              Your are logged in. Hi {loggedIn.email}!
            </IntroTextContainer>
            <LogOutSignInWithProviderContainer>
              <LogoutButtonContainer
                onClick={() => {
                  logout();
                  if (error === "") {
                    close();
                  }
                }}>
                Sign Out
              </LogoutButtonContainer>
            </LogOutSignInWithProviderContainer>
          </>
        )}
      </LoginContainer>
    </>
  );
}
