import React from "react";
import ReactDOM  from "react-dom";
import MainApp from './MainApp';
import { HashRouter  } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <HashRouter>
        <MainApp />
    </HashRouter>
);