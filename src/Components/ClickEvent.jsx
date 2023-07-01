

function ClickEvent(){

//variable 
let name="shaquib";

    //event function
    function event(){
        alert("event click");
    }

    return(

        <div>
            <h1>this is click event and functon component </h1>
            <h1>here we use a variable inside html tag using curly bracket {name}</h1>
            <button onClick={event}>click here</button>
        </div>
    )

}


export default ClickEvent