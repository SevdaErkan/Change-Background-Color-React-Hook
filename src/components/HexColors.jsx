import { useState, useEffect } from "react";
import axios from "axios";

const Hex = () => {
   const [data, setData] = useState([]);
   const [colorId, setColorId] = useState(188);

   useEffect(() => {
      axios.get("https://jonasjacek.github.io/colors/data.json").then((res) => {
         const colorsHexString = res.data;
         setData(colorsHexString);
      });
   }, []);

   let hex = data.map((color) => {
      return color.hexString;
   });

   function randomId(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
   }

   const handleClick = () => {
      let num = randomId(0, hex.length);
      setColorId(num);
   };

   document.body.style.backgroundColor = `${hex[colorId]}`;

   return (
      <section>
         <div className="center">
            <h1>
               Background Color : <span id={colorId}>{hex[colorId]}</span>
            </h1>
         </div>
         <button onClick={handleClick}>Click me</button>
      </section>
   );
};
export default Hex;
