"use client";
import React from "react";
import Link from "next/link";
export default function Check() {
  return (
    <>
    <div className="p-10 bg-swhite shadow-2xl rounded-lg flex flex-col space-y-5 w-fit">
      <span className="text-lg font-medium text-spurple-300">Hi Saif Ullah</span>
      <div className="flex flex-col">
      <span className="text-md text-sgray-300">Welcome to Testingninja - AI based skill testing not</span>
      <span className="text-md text-sgray-300">Click the button below to verify your account</span>
      </div>
      <Link href="/#" className="px-5 py-2 text-md font-medium text-swhite bg-spurple-300 rounded-lg w-fit">Verify account</Link>
    </div>
    </>
  );
}
