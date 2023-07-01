import { useState } from "react";



function StateInFnCom(){


    const [data,setData]=useState("shaquib");  //this is state declaration 

    function updatedata(){

        setData("Areesha");
    }
return(

    <div>
        <h1>state in functional component</h1>
        <h1>{data}</h1>
        <h3>after clicking button shaquib change into Areesha like this {data}</h3>
        <button onClick={updatedata}>click here</button>
    </div>
)
}


export default StateInFnCom;