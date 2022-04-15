import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {useWindowDimensions} from "../../hooks/windowDimensions";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
import ReactModal from "react-modal";
import SideBarMenus from "../SideBar/SideBarMenus";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {width} = useWindowDimensions();

    const getMobileMenu = () => {
        if ( width <= 768 ) {
            return (
                    <FontAwesomeIcon icon={faBars} size={"lg"} className="nav-mobile-menu" onClick={onClickToggle}/>
            );
        }
    }


    const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
        setShowMenu(!showMenu);
    }

    const onRequestClose = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
        setShowMenu(false);
    }

    return (
        <nav>
            <ReactModal isOpen={showMenu} className="modal-menu" onRequestClose={onRequestClose} shouldCloseOnOverlayClick={true}>
                <SideBarMenus />
            </ReactModal>
            {getMobileMenu()}
            <strong>SuperForum</strong>
        </nav>
    );
}

export default Nav