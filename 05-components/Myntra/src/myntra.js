import React ,{useState} from "react";
import ReactDOM from "react-dom/client"

//* importing all compnent
import Card from "./component/card";
import Footer from "./component/footer";
import Header from "./component/header";

//* import arr from util->dummy
import arr from "./utils/dummy";

//*import functions that we have created in dummy.js 
//* have to use {} when only with export. No need for {} when export default
import {greet as goa, meet as roa} from "./utils/dummy" 

//& change the function name (greet as goa && meet as roa) => when your file already have an function as same name function that you are importing . so we have to change the name of the function

function App1(){

    //* useState for this code : when we click on sort by price button then the price will be sorted in ascending order.
    let [A, setA] = useState(arr);


    function sortArray(){
        A.sort((a,b)=> a.price - b.price)  //* for ascending order
        //* array stores by reference, so when we sort the array it will change the original array and then we have to set the state again to update the UI.

        //* we have to create clone array of A and then sort it and then set the state. because when we sort the array it will change the original array and then we have to set the state again to update the UI.

        let sortedArray = [...A].sort((a,b)=> a.price - b.price)  //* for ascending order
        setA(sortedArray);

        // setA(A);
        // console.log(arr); 
    }

    function priceAbove799(){
        let filteredArray = arr.filter((value)=>value.price>799);
        setA(filteredArray);
    }
    return( 
        <>
         <Header/>
         <button  className="Bottons" onClick={sortArray}>Sort by Price</button>

         <button className="Bottons" onClick={priceAbove799}>Price above 799/-</button>

        <div className="hero" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {
                A.map((value,index)=>
                <Card 
                    key={index}
                    cloth={value.cloth}
                    offer={value.offer}
                    image={value.image}
                    price={value.price}
                />)
               
            }
        </div>
        <Footer/>
        </>   
    );
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App1/>);