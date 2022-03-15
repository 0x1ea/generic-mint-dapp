import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../utils/GlobalStyle";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}