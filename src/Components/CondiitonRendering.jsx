// in this we learn if else condition and else if in react

import React, { useState } from "react";


function Condition() {

    const [loggedIn, setLoggedIn] = useState(true);


    // check for 1, 2 , and 3

    return (

        <div>
            <h1>redering element</h1>
            {loggedIn == 1 ? <h4>logged in1</h4>
                : loggedIn == 2 ? <h4>login2</h4>
                    : <h3>logged in 3</h3>}
        </div>
    )
}

export default Condition;