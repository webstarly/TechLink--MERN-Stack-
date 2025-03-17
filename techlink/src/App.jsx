import React from "react";
import { Outlet } from "react-router-dom";
//import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import "./App.css";

function App() {
  return (
    <>
      
      <Header/>
      <main className="min-h-screen flex flex-col">
         <Outlet/>
      </main>

      <Footer className="mt-auto"/>

    </>
  );
}

export default App;
