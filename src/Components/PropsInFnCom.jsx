// file means props in functional component

// we can also change a props with the help of useState in functional component

/*function App() {
    const [name,setName]=useState("Anil")
    function apple()
    {
      alert("hello")
    }
    return (
      <div className="App">
       <h1>Props in React :)</h1>
       <Student name={name}/>
       <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
      </div>
    );
  }
*/

function PropsInFnCom(props) {

    console.log(props);

    return (
        <div style={{ backgroundColor: "skyblue", margin: 20 }}>
            <h1>hello props</h1>
            <h2>Name is : {props.name}</h2>
            <h2>Email is: {props.email}</h2>
            <h3>obj is {props.obj.address}</h3>
        </div>
    )
}

export default PropsInFnCom;