
import React , {useState,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){

    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<GithubProfile/>);