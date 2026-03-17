import React from "react";
import ReactDOM from "react-dom/client"

//* Header

//* Body

//* Footer

function Card(props){
    return(
        <div className="card"  style={{border:"2px solid black", padding:"2px"}}>
            <img src={props.image} height="200px" width="200px" />

            <div  style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <p>Shop Now</p>
            </div>
        </div>
    );
}
function Header(){
    return (
        <div className="header">
            <img className="images" src="https://imgs.search.brave.com/qVj2xl42Z-kIBoM5db3aB0qQfUau5PjSGnV-4jGgR5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzEx/ODQzMS5qcGc" height="50px" width="80px" />

            <div className="options" >
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Home and Living</button>
                <button>Beauty</button>
                <button>Studio</button>
            </div>
            
            <input className="searchBar" type="text" placeholder="Search for products, brands and more"/>

            <div className="profile">
                <button>Profile</button>
                <button>Wishlist</button>
                <button>Bag</button>
            </div>

        </div>
    );
}

function Footer(){
    return (
        <img className="footerImg" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/8/dndfsB1V_65ecb385cb2e4af2b0313364aeae6da8.jpg" />   
    );
}

const arr = [{cloth:"Tshirt" , offer:"20-30% OFF", image:"https://i.pinimg.com/236x/8a/3f/8f/8a3f8fe7e4e6812a40bc05ffca62234d.jpg"    },
            {cloth:"Jeans", offer:"40-50% OFF", image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/AUGUST/11/j6MQAEFU_8ab4bde586204d3889f947d41efac4da.jpg"},
            {cloth:"Pants", offer:"50-70% OFF", image:"https://nobero.com/cdn/shop/files/JoggersWebImages-0004.webp?v=1717763160"},
            {cloth:"Kurta",  offer:"10-15% OFF", image:"https://www.nihalfashions.com/media/catalog/product/cache/caa15edf98145413286703527de7b8dd/c/o/cotton-digital-print-peach-kurta-for-men-nmk-6676.jpg"},
            {cloth:"pajama" , offer:"60-90% OFF", image:"https://img.freepik.com/free-photo/man-gray-pajamas-comfy-sleepwear-apparel-full-body_53876-126947.jpg?semt=ais_user_personalization&w=740&q=80"},
            {cloth:"Shirts" ,offer:"20-40% OFF", image:"https://www.montecarlo.in/cdn/shop/files/2240401384FS-1-38_1.jpg?v=1739282531"},
            {cloth:"Sweaters", offer:"30-50% OFF", image:"https://imagescdn.vanheusenindia.com/img/app/product/3/39703300-17371155.jpg?auto=format&w=390"},
            {cloth:"Hoodies", offer:"60-80% OFF", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJjx2v30ex37dNewqsJGN7f5PRuRojkyyMw&s"},
            {cloth:"Shorts", offer:"50-60% OFF", image:"https://imagescdn.peterengland.com/img/app/product/3/39933901-18939118.jpg?auto=format&w=390"},
            {cloth:"Trousers", offer:"10-30% OFF", image:"https://imagescdn.allensolly.com/img/app/product/4/40246119-25345876.jpg?auto=format&w=390"},
            {cloth:"Blazers", offer:"20-30% OFF", image:"https://www.montecarlo.in/cdn/shop/files/224066984-2-38_1.jpg?v=1739287164"},
            {cloth:"Skirts" ,offer:"40-50% OFF", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoMMudIDt0KKa29-B0k52ltXf9re-Wq-xdw&s"}]

function App(){
    return(
       
        <>
   
         <Header/>

        <div className="hero" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-shirt" offer="20-30% OFF" />
            <Card cloth="Jeans" offer="20-30% OFF"/>
            <Card cloth="Pants" offer="20-30% OFF"/>
            <Card cloth="Kurta" offer="20-30% OFF"/>
            <Card cloth="pajama" offer="20-30% OFF"/>
            <Card cloth="Shirts" offer="20-30% OFF"/>
            <Card cloth="Sweaters" offer="20-30% OFF"/>
            <Card cloth="Hoodies" offer="20-30% OFF"/>
            <Card cloth="Shorts" offer="20-30% OFF"/>
            <Card cloth="Trousers" offer="20-30% OFF"/>
            <Card cloth="Blazers" offer="20-30% OFF"/>
            <Card cloth="Skirts" offer="20-30% OFF"/> */}

            {
                arr.map((value,index)=>
                <Card 
                    key={index}
                    cloth={value.cloth}
                    offer={value.offer}
                    image={value.image}
                />)
                //* return an array
            }

            
        </div>
        <Footer/>
        </>
       
    );
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);