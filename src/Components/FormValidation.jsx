
import React, { useState } from "react";
function FormValidation() {

    const [user, setUser] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);


    function loginHandle(e) {


        if (user.length < 3 || password.length < 3) {
            alert("type correct values")
        }
        else {
            alert("all is good")
        }

        e.preventDefault();
    }



    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)

    }


    function passwordHandler(e) {
        let item = e.target.value;

        if (item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)
    }
    return (
        <div className="App">
            <h2>form validation</h2>
            <form onSubmit={loginHandle}>

                <input type="text" placeholder="enter user name" onChange={userHandler} /> {userErr ? <span>user not found</span> : " "}
                <br /> <br />
                <input type="password" placeholder="Enter password" onChange={passwordHandler} /> {passErr ? <span>password not valid</span> : " "}
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;