import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes, Route , Link} from "react-router";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Dashboard from "./component/DashBoard";
import Details from "./component/Details";
import Hi from "./component/hi";
import Hello from "./component/hello";
import Zero from "./component/Zero";

function App(){

    return(

        <>
        <BrowserRouter>
          <nav>
                <Link to="/">Home</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Contact">Contact</Link>
                  <Link to="/Details">Details</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Contact" element={<Contact />} />
                <Route path="/DashBoard" element={<Dashboard />} />

                <Route path="/Details" element={<Details />}>
                    <Route index element={<Zero />}></Route>
                    <Route path="Hello" element={<Hello />}></Route>
                    <Route path="Hi" element={<Hi />}></Route>
                </Route>

            </Routes>

        </BrowserRouter>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);