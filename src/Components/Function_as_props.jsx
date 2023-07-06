
// in this file we recived props which is a function in parent component

// see its result upper of the page 
//because this component imported in app.js and app.js is firstly imported in index.js

function PropsFunction(props) {

    return (<div style={{ backgroundColor: "skyblue" }}>
        <h1> funtion as a props </h1>
        <button onClick={props.data}>click here </button>     this is output of function as a props component
    </div>
    )

}


export default PropsFunction;