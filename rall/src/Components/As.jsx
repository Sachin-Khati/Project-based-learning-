import React, {useState}from 'react'
import blue from "../assets/blue.jpeg";
import black from "../assets/desizn1.jpeg";

function As() {
    const [color, setColor] = useState("blue");

  const images = { blue, black };
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
      <h1>Background Image Change</h1>

      <div
        className="w-40 h-40 bg-cover bg-center rounded-lg border"
        style={{ backgroundImage: `url(${images[color]})` }}
      ></div>

      <select onChange={(e) => setColor(e.target.value)} value={color} className="mt-4">
        <option value="blue">Blue</option>
        <option value="black">Black</option>
      </select>
    </div>
    </div>
  )
}

export default As;
