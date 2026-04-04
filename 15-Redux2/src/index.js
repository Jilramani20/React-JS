import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./component/counting";
import { Provider } from "react-redux";
import store from "./stores";
import CustomCounter from "./component/CustomCounter";

function App(){

    return (
        <Provider store={store}>
            <Counting />
            <br></br>
             <br></br>
              <br></br>
            <CustomCounter />
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);