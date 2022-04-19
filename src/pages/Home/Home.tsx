import React from "react";

import "./Home.css";
import Nav from "../../components/Nav/Nav";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Main from "../../components/Main/Main";
import RightMenu from "../../components/RightMenu/RightMenu";
import Sidebar from "../../components/SideBar/Sidebar";
const Home = () => {
    return (
        <div className="screen-root-container home-container">
            <div className="navigation">
                <Nav />
            </div>
            <Sidebar />
            <LeftMenu />
            <Main />
            <RightMenu />
        </div>
    );
};

export default Home;