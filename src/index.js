
//you can run react app with your name such as npm run shauqib for this app you run this app with the command is npm run shaquib

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import FunComponent from "./FunComponent";
import ClickEvent from "./Components/ClickEvent";
import StateInFnCom from "./Components/StateInFnCom";
import StateInClassCom from "./Components/StateInClassCom";
import PropsInFnCom from "./Components/PropsInFnCom";
import PropsInClassCom from "./Components/PropsInClassCom";
import GetInputBoxValue from "./Components/GetInputBoxValue";
import HideShowTogge from "./Components/Hide_Show_&_Toggle";
import HandleForm from "./Components/Handle_Form_&_Checkbox";
import Condition from "./Components/CondiitonRendering";
import FormValidation from "./Components/FormValidation";
import App2 from "./App2";


import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FunComponent />
    <ClickEvent />
    <StateInFnCom />
    <StateInClassCom />

    <PropsInFnCom
      name={"shaquib"}
      email="shaquib2615@gmail.com"
      obj={{ address: "bihar", code: "344" }}
    />

    <PropsInClassCom name={"shaquib"} email="shaquib2615@gmail.com" />

    <GetInputBoxValue />

    <HideShowTogge />

    <HandleForm />

    <Condition />

    <FormValidation />

    {/*after this some ramdom topics are implemented so rearrage after this  */}


   <App2 />
  
<App2 />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
