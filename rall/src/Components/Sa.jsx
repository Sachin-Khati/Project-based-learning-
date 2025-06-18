import React, { useState } from "react";
import black from "../assets/blue.jpeg";
import gray from "../assets/gray.png";
import green from "../assets/green.png"
import orange from "../assets/orange.png"

function Sa() {
  const [color, setColor] = useState("black");
  const [size ,setSize]=useState("s")
  const [addedToCart, setAddedToCart] = useState(false);
  const [desc,setdesc]=useState("H&M Group is a global fashion and design company, with over 4,000 stores in more than 75 markets and online sales in 60 markets. All our brands and business ventures share the same passion for making great and more sustainable fashion and design available to everyone.")
  const images = {black, gray,green,orange };
  
  const des = {
    blue: "H&M's black jacket combines style and comfort, featuring a sleek fit and premium fabric. Its versatile design makes it perfect for both casual and semi-formal wear. With functional pockets and a soft inner lining, it ensures all-day comfort.",
    black:"H&M's black jacket offers a sleek, modern design with a tailored fit for a polished look. Made with high-quality materials, it provides both warmth and style for any occasion. The timeless black color makes it a versatile piece that pairs well with almost anything.",
    gray: "H&M's gray zip hoodie offers a perfect balance of comfort and casual style. Crafted from soft, breathable fabric, it features a full zipper and adjustable hood for a customizable fit. Ideal for layering, this versatile hoodie is a wardrobe essential for relaxed days.",
    orange: "H&M's orange zip hoodie adds a pop of color to your casual look. Made with soft, comfortable fabric, it features a full zipper and an adjustable hood for a perfect fit. A great choice for adding a vibrant touch to your everyday style.",
    green: "H&M's green zip hoodie brings a fresh, vibrant touch to your casual wardrobe. Made from soft, cozy fabric, it features a full zipper and an adjustable hood for a personalized fit. Perfect for layering, this hoodie adds comfort and style to any outfit.",
  };
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000); // Hide after 3 sec
  };
  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    // Simulate loading delay (1 second)
    setTimeout(() => {
      setSize(selectedSize);
    }, 1000);
  };

  return (
    <div className="flex bg-white h-screen text-center w-full ">   
    {/* image */}
   <div className="flex items-start justify-start flex-col py-7  ">
   <div
          className=" bg-cover bg-center rounded-lg ">
          <img src={images[color]} alt="image" className="h-20 w-20 rounded-lg mb-2 hover:border-4"/>
        </div>
        <div
          className=" bg-cover bg-center rounded-lg ">
          <img src={images[color]} alt="image" className="h-20 w-20 rounded-lg mb-2 hover:border-4"/>
        </div>
        <div
          className=" bg-cover bg-center rounded-lg ">
          <img src={images[color]} alt="image" className="h-20 w-20 rounded-lg mb-2 hover:border-4"/>
        </div>
        <div
          className="h-40 bg-cover bg-center rounded-lg ">
          <img src={images[color]} alt="image" className="h-20 w-20 rounded-lg mb-2 hover:border-4"/>
        </div>
   </div>
   {/* main iamge */}
    <div className="bg-white p-6 rounded-lg shadow-lg h-full w-96 ">
        <div
          className="h-80 bg-cover bg-center rounded-lg mb-4 hover:border-4"
          style={{ backgroundImage: `url(${images[color]})` }}
        ></div>
         <div
          className="h-80 bg-cover bg-center rounded-lg mb-4 hover:border-4"
          style={{ backgroundImage: `url(${images[color] })` }}
        ></div>
    </div>

      <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg">
        <div className="text-left">
          <h1 className="font-bold text-xl mb-2">H&M Jacket</h1>
        <p className="font-medium text-xl mb-2 text-gray-400">{des[color]}</p>
        <span className="font-medium text-blue-900 text-left hover:text-blue-500">visit the H&M store</span>
        <hr className="bg-zinc-400"/>
        <div className="flex flex-row mt-4">
          <h3 className="font-bold text-zinc-400 ">MRP</h3>
          <p className="font-medium text-black mx-4 text-xl"> $50</p>
        </div>
        <span className="font-bold text-green-400">Inclusive of All Taxes</span>
        </div>
        <div className="text-left mb-4 mt-4">
          <label htmlFor="color" className="font-bold text-xl text-gray-600 ">
            Color:
          </label>
          <select
            className="ml-2 bg-red-200 rounded-lg h-8 px-2 hover:bg-slate-200 "
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onClick={(e) => setdesc(e.target.value)}
          >
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
          </select>
        </div>

        <div className="text-left mb-4">
          <label htmlFor="size" className="font-bold text-xl text-gray-600">
            Size:
          </label>
          <select
            className="ml-2 bg-red-200 rounded-lg h-8 px-2  hover:bg-slate-200"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="x">X</option>
            <option value="xl">Xl</option>
           
          </select>
        </div>

        <button
          className="h-10 w-full bg-orange-400 font-semibold text-white rounded-lg hover:bg-orange-600"
          onClick={handleAddToCart}
        >
          🛒 Add To Cart
        </button>

        {addedToCart && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
            ✅ Item added to cart!
          </div>
        )}
      </div>
    </div>
  );
}
export default Sa;
   