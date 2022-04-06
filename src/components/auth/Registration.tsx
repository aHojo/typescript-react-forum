import React, {useReducer, useState} from "react";
import ReactModal from "react-modal";
import userReducer from "../../common/UserReducer";
import {isPasswordValid, PasswordTestResult} from "../../common/validators/PasswordValidator";
import "./Registration.css";

export interface RegistrationProps {
    isOpen: boolean;
    onClickToggle: (e: React.MouseEvent<Element, MouseEvent> | React.
        KeyboardEvent<Element>) => void
}
const Registration = ({isOpen, onClickToggle}: RegistrationProps) => {
    const [isRegisterDisabled, setRegisterDisabled] = useState(true);

    const [{
        userName,
        password,
        email,
        passwordConfirm,
        resultMsg
    }, dispatch] = useReducer(userReducer, {
        userName: "davec",
        password: "",
        email: "admin@dzhaven.com",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true
    });

    const allowRegister = (msg: string, setDisabled: boolean) => {
        setRegisterDisabled(setDisabled);
        dispatch({payload: msg, type: "resultMsg"})
    }

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "userName"});
        if (!e.target.value) allowRegister("Username cannot be empty", true);
        else allowRegister("", false);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "email"})
        if (!e.target.value) allowRegister("Email cannot be empty", true);
        else allowRegister("", false);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "password"})

        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
        if (!passwordCheck.isValid) {
            allowRegister(passwordCheck.message, true);
            return;
        }

        passwordSame(passwordConfirm, e.target.value);
    };

    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "passwordConfirm"})

        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
        if (!passwordCheck.isValid) {
            allowRegister(passwordCheck.message, true);
            return;
        }

        passwordSame(password, e.target.value);
    };

    const passwordSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowRegister("Passwords do not match", true);
            return false;
        }
        allowRegister("", false);
        return true;
    }
    const onClickRegister = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        onClickToggle(e);
    };
    const onClickCancel = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickToggle(e);
    };

    return (
        <ReactModal
            className="modal-menu"
            isOpen={isOpen}
            onRequestClose={onClickToggle}
            shouldCloseOnOverlayClick={true}
        >
            <form>
                <div className="reg-inputs">
                    <div>
                        <label>username</label>
                        <input type="text" value={userName}
                               onChange={onChangeUserName} />
                    </div>
                    <div>
                        <label>email</label>
                        <input type="text" value={email}
                               onChange={onChangeEmail} />
                    </div>
                    <div>
                        <label>password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <label>password confirmation</label>
                        <input
                            type="password"
                            placeholder="Password Confirmation"
                            value={passwordConfirm}
                            onChange={onChangePasswordConfirm}
                        />
                    </div>
                </div>
                <div className="reg-buttons">
                    <div className="reg-btn-left">
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="action-btn"
                            disabled={isRegisterDisabled}
                            onClick={onClickRegister}
                        >
                            Register
                        </button>
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="cancel-btn"
                            onClick={onClickCancel}
                        >
                            Close
                        </button>
                    </div>
                    <span className="reg-btn-right">
                        <strong>{resultMsg}</strong>
                         </span>
                </div>
            </form>
        </ReactModal>
    );

}

export default Registration;