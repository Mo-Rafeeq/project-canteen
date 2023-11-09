import React, { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
        
    const onButtonClick = () => {
        // You'll update this function later...
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login page</div>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your user name"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Login"} />
        </div>
    </div>
}

export default Login