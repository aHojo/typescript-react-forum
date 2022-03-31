import React from "react";
import {useWindowDimensions} from "../hooks/windowDimensions";

const RightMenu = () => {
    const {width} = useWindowDimensions();

    if ( width <= 768) return null;

    return <div className="rightmenu">Right Menu</div>
}

export default RightMenu