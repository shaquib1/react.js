import "./App.css";

import Classcomponent from "./Classcomponent";

function App() {
  //we can make a componet inside a componet for example

  function Tap() {
    return (
      <div>
        <h1>component inside component</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>hello react</h1>
      <Classcomponent />
      <Tap />
      {Tap()}
    </div>
  );
}

export default App;
