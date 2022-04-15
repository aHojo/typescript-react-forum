import React from "react";
import Category from "../../models/Category";
import "./MainHeader.css";


interface MainHeaderProps {
    category?: Category;
}

const MainHeader = ({category}: MainHeaderProps) => {
    return (<div className="main-header">
        <div className="title-bar">
            <strong>{category?.name || "Placeholder"}</strong>
        </div>
    </div>)
}

export default MainHeader