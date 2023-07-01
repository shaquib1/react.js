// In this component we learn how to get input box value means when we give input value how to get it 

import React, { useState } from "react";

function GetInputDataBox() {

    const [data, setData] = useState(null);

    function getData(val) {
        setData(val.target.value)
    }

    return (
        <div>
            <h1>hello get input box data </h1>
            <h1>{data}</h1>
            <input type="text" onChange={getData} />
        </div>
    )
}


export default GetInputDataBox;