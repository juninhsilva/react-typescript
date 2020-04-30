import React from "react";
import { createGlobalStyle } from "styled-components";
import Contacts from "./containers/Contacts";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App"></div>
      <Contacts />
      <Styles />
    </>
  );
};

const Styles = createGlobalStyle`
  html{
    font-family: 'sans-serif';
    font-size: 16px;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    margin: 0;
  }
`;

export default App;
