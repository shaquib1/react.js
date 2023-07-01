import "./App.css";

import Classcomponent from "./Classcomponent";
import PropsFunction from "./Components/Function_as_props";

function App() {
  //we can make a componet inside a componet for example

  function Tap() {
    return (
      <div>
        <h1>component inside component</h1>
      </div>
    );
  }

  //make a function for props as a function for file funtion as a props
  function test(){
    alert("all correct function as a props")
  }
  return (
    <div className="App">
      <h1>hello react</h1>
      <Classcomponent />
      <Tap />
      {Tap()}
      <PropsFunction data={test} />
    </div>
  );
}

export default App;
