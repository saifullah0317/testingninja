"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function ExamNavbar() {
  return (
    <nav className='bg-swhite shadow-xl fixed w-full z-20 top-0 left-0 right-0 start-0'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.png"
            height={60}
            width={60}
            // style={{ borderRadius: "100px" }}
            className="rounded-full"
            alt="logo"
          />
          <span className="text-spurple-300 self-center text-2xl font-semibold swhitespace-nowrap ">
            testingninja
          </span>
        </Link>
      </div>
    </nav>
  );
}
