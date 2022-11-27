import Image from "next/image";
import React from "react";
import BlurImage from './utils/BlurImage'
export default function Nav() {
  return (
    <>
      <div className="flex flex-row items-center space-x-3 select-none">
        <BlurImage
          src="/assets/logo.svg"
          alt="Logo"
          className="cursor-pointer hover:scale-105 transition-all select-none"
          width={48}
          height={48}
        />
        <h1 className="text-white text-3xl font-JetMono font-bold">
          Base64ToString
        </h1>
      </div>
      ;
    </>
  );
}
