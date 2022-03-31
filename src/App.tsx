import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="App">
        <Nav />
        <Sidebar />
        <LeftMenu />
        <Main />
        <RightMenu />
    </div>
  );
}

export default App;
