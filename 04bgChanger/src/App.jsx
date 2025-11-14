import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center gap-4 shadow-lg bg-white text-black px-6 py-3 rounded-2xl w-fit">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Red" }} onClick={() => setColor("red")}>
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Blue" }} onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Orange" }} onClick={() => setColor("orange")}>
            Orange
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Green" }} onClick={() => setColor("green")}>
            Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Gray" }} onClick={() => setColor("gray")}>
            Gray
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Purple" }} onClick={() => setColor("purple")}>
            Purple
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Teal" }} onClick={() => setColor("teal")}>
            Teal
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{ backgroundColor: "Yellow" }} onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{ backgroundColor: "Black" }} onClick={() => setColor("black")}>
            Black
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{ backgroundColor: "White" }} onClick={() => setColor("white")}>
            White
          </button>   
        </div>
      </div>
    </div>
  );
}

export default App;
