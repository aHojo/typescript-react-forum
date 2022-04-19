import React, {useState, useEffect} from "react";
import {useWindowDimensions} from "../../hooks/windowDimensions";
import { getTopCategories } from "../../services/DataService";
import TopCategory from "./TopCategory";
import groupBy from "lodash/groupBy";
import "./RightMenu.css";

const RightMenu = () => {
    const {width} = useWindowDimensions();
    const [topCategories, setTopCategories] = useState<Array<JSX.Element> | undefined>();

    useEffect(() => {
        getTopCategories().then((res) => {
            const topCategoriesThreads = groupBy(res, "category");
            const topElements = [];
            for (let key in topCategoriesThreads) {
                let currentTop = topCategoriesThreads[key]
                topElements.push(<TopCategory key={key} topCategories={currentTop} />)
            }
            setTopCategories(topElements);
        })
    }, []);
    if ( width <= 768) return null;


    return <div className="rightmenu rightmenu-container">{topCategories}</div>
}

export default RightMenu