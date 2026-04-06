import React from "react";
import ReactDOM from "react-dom/client";
import store from "./component/store";
import { Provider } from "react-redux";
import CoinCreate from "./component/CoinCreate";

function App(){

    return(
        <Provider store={store}>
            <CoinCreate/>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);