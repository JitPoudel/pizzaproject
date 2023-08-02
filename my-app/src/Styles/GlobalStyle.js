import { createGlobalStyle } from "styled-components";

//once defined here can use in app wherever
export const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
  background-color: #e4dcdc;

}

h1, h2, h3 {
  font-family: 'Rubik Microbe', cursive;
}

h1 {
 font-size: 50px;
 margin-bottom: 0px;
 padding: 0px;
 margin-top: 5px;
}

`;
