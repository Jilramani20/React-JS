import { useState } from "react";
import FoodCart from "./FoodCart";
const foodItems = [
    {id:1, name:"Pizza", price:500},
    {id:2, name:"Burger", price:150},
    {id:3, name:"Pasta", price:180},
    {id:4, name:"Fries", price:230},
    {id:5, name:"Coke", price:30},
    {id:6, name:"Ice Cream", price:50},
    {id:7, name:"Sandwich", price:60},
    {id:8, name:"Noodles", price:70},
    {id:9, name:"Dosa", price:90},
    {id:10, name:"Idli", price:20}
];

export default function Card(){
   
    return(
        <div style={{display:"flex", justifyContent:"center", gap:"30px", flexWrap:"wrap"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id} style={{border:"1px solid black", width:"200px", padding:"10px"}}>
                        <FoodCart value={value} />
                    </div>
                )
            })}
        </div>
    )
}