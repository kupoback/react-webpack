import React from "react";
import ReactDOM from "react-dom";
import FEApp from "./Blocks/block1.jsx";

var mountNode = document.getElementById("react-block");
ReactDOM.render(<FEApp name="Jane" />, mountNode);
