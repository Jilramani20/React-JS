import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./component/counting";
import { Provider } from "react-redux";
import store from "./stores";


function App(){

    return(
        
        <Provider store={store}>
            <Counting />
        </Provider>
         
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);