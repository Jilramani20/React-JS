import React from "react";
import RecatDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router";
import Github from "./component/github";
import Home from "./component/home";

function App(){

    return(
        <>
            <BrowserRouter>
                 <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Github/:name" element={<Github />} />
                 </Routes>
            </BrowserRouter>
        </>
    )
}

const Root = RecatDOM.createRoot(document.getElementById("root"));
Root.render(<App></App>);