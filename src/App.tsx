import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main";
import Sidebar from "./components/SideBar/Sidebar";
import LeftMenu from "./components/LeftMenu/LeftMenu";
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
