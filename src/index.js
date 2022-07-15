import React from "react";
import ReactDOM from "react-dom/client";
import ToDoWrapper from "./classes/ToDoWrapper"
//import { Hello } from "./hello";
//import Wrapper from "./Wrapper";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoWrapper>
    </ToDoWrapper>
  </React.StrictMode>
);
