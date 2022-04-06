import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/AppState";
import {useEffect} from "react";
import {UserProfileSetType} from "../../store/user/Reducer";
import {faRegistered, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SideBarMenu.css";
import Registration from "../auth/Registration";


const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user);
    const [showRegister, setShowRegister] = useState(false);
    const dispatch = useDispatch();

    // get the logged in user for the sidebar
    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {id:1, userName: "testUser"}
        })
    }, [dispatch]);
    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
    };
    return (
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">{user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span onClick={onClickToggleRegister} className="menu-name">
            register
          </span>
                    <Registration
                        isOpen={showRegister}
                        onClickToggle={onClickToggleRegister}
                    />
                </li>
            </ul>
        </React.Fragment>
    )
}

export default SideBarMenus;