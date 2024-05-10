import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [value, setValue] = useState(0);
  //const[calculate,setCalculate]= useState(0);

  return (
    <div className="h-screen  flex-col flex justify-center items-center ">
      <div className="font-semibold">Calculator App</div>
      <div className="flex-col flex  w-[250px] h-[370px] border border-black">
        <div className="border border-black  bg-black  text-white pr-2 w-full h-20 flex justify-end items-end">
          {input}
        </div>
        <div className="flex-col flex gap-y-4 p-4 bg-black">
          <div className="flex gap-x-4">
            <div
              onClick={() => {
                setInput("");
              }}
              className=" bg-gray-400 font-semibold rounded-full w-10 h-10 border border-black flex justify-center items-center "
            >
              AC
            </div>
            <div
              onClick={() => setInput(input.slice(0, -1))}
              className=" bg-gray-400 font-semibold rounded-full w-10 h-10 border border-black flex justify-center items-center"
            >
              C
            </div>
            <div
              onClick={() => setInput(input + "%")}
              className=" bg-gray-400 font-semibold rounded-full w-10 h-10 border border-black flex justify-center items-center"
            >
              %
            </div>
            <div className=" bg-orange-400 font-semibold rounded-full w-10 h-10 border border-black flex justify-center items-center">
              ÷
            </div>
          </div>
          <div className="flex gap-x-4">
            <button
              onClick={() => setInput(input + "7")}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              7
            </button>
            <div
              onClick={() => setInput(input + "8")}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              8
            </div>
            <div
              onClick={() => setInput(input + "9")}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              9
            </div>
            <div
              onClick={() => setInput(input + "*")}
              className=" bg-orange-400 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              ×
            </div>
          </div>
          <div className="flex gap-x-4">
            <div
              onClick={() => setInput(input + 4)}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              4
            </div>
            <div
              onClick={() => setInput(input + 5)}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              5
            </div>
            <div
              onClick={() => setInput(input + 6)}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              6
            </div>
            <div
              onClick={() => setInput(input + "-")}
              className=" bg-orange-400 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              −
            </div>
          </div>
          <div className="flex gap-x-4">
            <div
              onClick={() => setInput(input + 1)}
              className="  bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              1
            </div>
            <div
              onClick={() => setInput(input + "2")}
              className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              2
            </div>
            <div className="  bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black">
              3
            </div>
            <div
              onClick={() => setInput(input + "+")}
              className="  bg-orange-400 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              +
            </div>
          </div>
          <div className="flex gap-x-4">
            <div
              onClick={() => setInput(input + "0")}
              className="  bg-slate-600 font-semibold flex justify-center items-center rounded-full w-24 h-10 border border-black"
            >
              0
            </div>
            <div className=" bg-slate-600 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black">
              .
            </div>
            <div
              onClick={(e) => setInput(eval(input).toString())}
              className=" bg-orange-400 font-semibold flex justify-center items-center rounded-full w-10 h-10 border border-black"
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
