import { IconCopy } from "@tabler/icons";
import copy from "copy-to-clipboard";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ConvertedOutput({ title, convertedStr, visible }) {
  return (
    <>
        <Toaster />
      <div className={`${visible ? "block" : "hidden"}`}>
      <p className="text-center mb-2 text-secondaryText font-JetMono uppercase text-sm">
        {title}
      </p>
      <p
        className="mt-1
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
                    py-2
                    "
      >
        {convertedStr}
      </p>
      <button
        className="bg-primaryBg px-4 p-1 mt-2 text-secondaryText rounded-md border border-[#282729] flex flex-row items-center hover:opacity-80 transition-all"
        onClick={() => {
          copy(convertedStr);
          toast.success("Copied to clipboard!")
        }}
      >
        Copy to Clipboard <IconCopy height={18} />
      </button>
      </div>
    </>
  );
}
