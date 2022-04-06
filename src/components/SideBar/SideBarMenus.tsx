import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/AppState";
import {useEffect} from "react";
import {UserProfileSetType} from "../../store/user/Reducer";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    // get the logged in user for the sidebar
    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {id:1, userName: "testUser"}
        })
    }, [dispatch]);

    return (
        <React.Fragment>
            <ul>
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">{user?.userName}</span>
            </ul>
        </React.Fragment>
    )
}

export default SideBarMenus;