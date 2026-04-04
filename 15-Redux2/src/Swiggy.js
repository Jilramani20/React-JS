import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Card from "./component/Card";
import {Provider} from "react-redux";
import stores from "./component/stored";

function App(){

    return (
        
        <>
         <Provider store={stores}>
            <Header></Header>
            <Card></Card>
          </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);