import React from "react";
import {useWindowDimensions} from "../../hooks/windowDimensions";
import SideBarMenus from "./SideBarMenus";

const Sidebar = () => {
    const {width} = useWindowDimensions();

    if ( width <= 768) return null;

    return (
        <div className="sidebar">
            <SideBarMenus />
        </div>
    )
}

export default Sidebar