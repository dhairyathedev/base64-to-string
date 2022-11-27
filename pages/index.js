import { IconSlash } from "@tabler/icons";
import Link from "next/link";
import React from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto m-2 p-4">
        <Nav />
        <div className="grid sm:grid-flow-col grid-flow-row sm:grid-cols-3 grid-row-1 sm:gap-3 gap-1">
          <Link href={"/base64-to-string"}>
            <button className="bg-primaryBg px-4 p-1 mt-2 text-secondaryText rounded-md border border-[#282729] flex flex-row items-center hover:opacity-80 transition-all">
              Covert To String <IconSlash height={18} />
            </button>
          </Link>
          <Link href={"/string-to-base64"}>
            <button className="bg-primaryBg px-4 p-1 mt-2 text-secondaryText rounded-md border border-[#282729] flex flex-row items-center hover:opacity-80 transition-all">
              Covert to Base64 <IconSlash height={18} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
