import React from "react";
import ReactDOM from "react-dom/client";
//import ToDoWrapperClasses from "./classes/ToDoWrapperClasses";
import Wrapper from "./withHooks/Wrapper/Wrapper";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ToDoWrapperClasses></ToDoWrapperClasses> */}
    <Wrapper></Wrapper>
  </React.StrictMode>
);
