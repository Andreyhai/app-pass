//theme.js

import {createGlobalStyle} from "styled-components"
export const darkTheme = {
    body: "#000",
    // background: "rgba(43,43,47,0.22)",
    backgroundSize: "cover",
    backgroundImage: 'url("../../sourse/images/sun3.png")',
    textColor: "#fff",
    headingColor: "lightblue"
}

export const lightTheme = {
    // body: "",
    // backgroundImage: 'url("../../sourse/images/sun3.png")',
    textColor: "#000",
    headingColor: "#d23669"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};
 }
`