// file-name means props in functional component

// we can also change a props with the help of useState in functional component
// *note this code wite in parent component in which from we send props to another component 
// so we write this code in index.js   [alwaya remember this point this is also apply in class component]

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

   // console.log(props);

    return (
        <div style={{ backgroundColor: "skyblue", }}>
            <h1>Props in functional component</h1>
            <h2>Name is : {props.name}</h2>
            <h2>Email is: {props.email}</h2>
            <h3>obj is {props.obj.address}</h3>
        </div>
    )
}

export default PropsInFnCom;