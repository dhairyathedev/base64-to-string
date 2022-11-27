import { IconCommand } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ConvertedOutput from "../components/convertedOutput";
export default function Base64ToStr() {
  const [text, setText] = useState("");
  const [decodedStr, setDecodedStr] = useState("");
  async function base64ToString() {
    const res = await axios.post("/api/conversions/basetostring", {
      str: text,
    });
    console.log(res);
    setDecodedStr(res.data);
    toast.success("String Decoded!");
  }
  return (
    <>
      <div className="max-w-screen-lg mx-auto m-2 p-4">
        <Toaster />
        <Nav />
        <div className="mt-36">
          <div className={`${decodedStr.length > 0 ? "hidden" : "block"}`}>
          <p className="text-center mb-2 text-secondaryText font-JetMono uppercase text-sm">
            Decode Base64 String
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="
                      mt-1
                      block
                      w-full
                      rounded-md
                      bg-[#222222]
                      text-primaryText
                      border-transparent
                      border-2
                      focus:border-secondaryBg focus:ring-0 focus:ring-primaryText
                      mainInput
                      font-JetMono
                      text-center
                      tracking-wider
                    "
              value={text}
              placeholder="Enter Base64"
              onChange={(e) => setText(e.target.value)}
              autoFocus={true}
            />
          </div>
          <button
            className="bg-primaryBg px-4 p-1 mt-2 text-secondaryText rounded-md border border-[#282729] flex flex-row items-center hover:opacity-80 transition-all"
            onClick={base64ToString}
          >
            Convert To String <IconCommand height={18} />
          </button>
          </div>
          <ConvertedOutput
            title={"Decoded Base64 String"}
            convertedStr={decodedStr}
            visible={decodedStr.length > 0}
          />
        </div>
      </div>
    </>
  );
}
