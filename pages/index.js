import { IconCommand } from "@tabler/icons";
import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from 'axios'

export default function Home() {
  const [text, setText] = useState("");
  const [decodedStr, setDecodedStr] = useState("")
  async function base64ToString(){
    const res = await axios.post("/api/basetostring", {
      str: text
    })
    if(res.status !== 200){
      alert("Something is not right!")
    }else{
      setDecodedStr(res.data)
    }
  }
  return (
    <>
      <div className="max-w-screen-lg mx-auto m-2 p-4">
        <Nav />
        <div className="flex items-center justify-center mt-36">
          <input
            type="text"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-[#222222]
                    text-[#ededed]
                    border-transparent
                    border-2
                    focus:border-[#333333] focus:ring-0 focus:ring-[#ededed]
                    mainInput
                    font-JetMono
                    text-center
                    tracking-wider
                  "
            value={text}
            placeholder="Enter Base64"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="bg-[#222123] px-4 p-1 mt-2 text-[#9f9e9f] rounded-md border border-[#282729] flex flex-row items-center hover:opacity-80 transition-all" onClick={base64ToString}>
          Covert To String <IconCommand height={18} />
        </button>
      </div>
    </>
  );
}
