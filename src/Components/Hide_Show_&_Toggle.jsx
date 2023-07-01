
//in thid we hide and show a element 
//toggle means when we both operation hide & shwo operate on a single button called toggle

import React from "react";

function HideShowTogge(){

 const [status ,setstatus]= React.useState(true);

    return(

        <div style={{background:"skyblue"}}>

        <h1>check this</h1>

            {
              status?  <h1>hide show and toggle</h1>:null
                
            }

           {/* <button onClick={()=>setstatus(false)}>Hide</button> <br />
             <button onClick={()=>setstatus(true)}>Show</button>*/}
             <h4>by toggle button both function occur on same button</h4>
             <button onClick={()=>setstatus(!status)}>toggle</button>
        </div>
    )
}


export default HideShowTogge;