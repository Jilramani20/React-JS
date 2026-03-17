const arr = [{cloth:"Tshirt" , offer:"20-30% OFF", image:"https://i.pinimg.com/236x/8a/3f/8f/8a3f8fe7e4e6812a40bc05ffca62234d.jpg"   , price:700 },
            {cloth:"Jeans", offer:"40-50% OFF", image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/AUGUST/11/j6MQAEFU_8ab4bde586204d3889f947d41efac4da.jpg", price:600 },
            {cloth:"Pants", offer:"50-70% OFF", image:"https://nobero.com/cdn/shop/files/JoggersWebImages-0004.webp?v=1717763160", price:400 },
            {cloth:"Kurta",  offer:"10-15% OFF", image:"https://www.nihalfashions.com/media/catalog/product/cache/caa15edf98145413286703527de7b8dd/c/o/cotton-digital-print-peach-kurta-for-men-nmk-6676.jpg", price:800},
            {cloth:"pajama" , offer:"60-90% OFF", image:"https://img.freepik.com/free-photo/man-gray-pajamas-comfy-sleepwear-apparel-full-body_53876-126947.jpg?semt=ais_user_personalization&w=740&q=80", price:1100 },
            {cloth:"Shirts" ,offer:"20-40% OFF", image:"https://www.montecarlo.in/cdn/shop/files/2240401384FS-1-38_1.jpg?v=1739282531", price:1000 },
            {cloth:"Sweaters", offer:"30-50% OFF", image:"https://imagescdn.vanheusenindia.com/img/app/product/3/39703300-17371155.jpg?auto=format&w=390", price:850 },
            {cloth:"Hoodies", offer:"60-80% OFF", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJjx2v30ex37dNewqsJGN7f5PRuRojkyyMw&s", price:730 },
            {cloth:"Shorts", offer:"50-60% OFF", image:"https://imagescdn.peterengland.com/img/app/product/3/39933901-18939118.jpg?auto=format&w=390", price:1900 },
            {cloth:"Trousers", offer:"10-30% OFF", image:"https://imagescdn.allensolly.com/img/app/product/4/40246119-25345876.jpg?auto=format&w=390", price:1500 },
            {cloth:"Blazers", offer:"20-30% OFF", image:"https://www.montecarlo.in/cdn/shop/files/224066984-2-38_1.jpg?v=1739287164", price:2600 },
            {cloth:"Skirts" ,offer:"40-50% OFF", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoMMudIDt0KKa29-B0k52ltXf9re-Wq-xdw&s", price:900 }]


export default arr;

//! you can't use export default when declaring a const, let, var you have to write at end like this arr
//! in one file there can be only one export default


//* how to export then other function in our file?

 export function gree(){
    return <h1>Hello everyone!</h1>
 }

 export function meet(){
    return <h1>How are you all</h1>
 }



