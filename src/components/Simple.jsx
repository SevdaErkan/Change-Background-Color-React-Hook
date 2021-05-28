import { useState } from "react";
const Simple = () => {
   const newData = ["#d7d7d7", "Green", "Red", "Rgba(133,122,200", "#49a6e9"];
   const [colorId, setColorId] = useState(0);
   document.body.style.backgroundColor = `${newData[colorId]}`;

   const handleClick = () => {
      if (colorId < 4) {
         setColorId(colorId + 1);
      } else {
         setColorId(0);
      }
   };

   return (
      <section>
         <div className="center">
            <h1>
               Background Color : <span>{newData[colorId]}</span>
            </h1>
         </div>
         <button onClick={handleClick}>Click me</button>
      </section>
   );
};

export default Simple;
