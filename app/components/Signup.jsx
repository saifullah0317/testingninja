"use client"
import { useState } from "react";
export default function Signup() {
    const [passwordClassname,setPasswordClassname]=useState("rounded-lg bg-sgray text-spurple-300 font-medium hidden");
    const [buttontext, setButtontext]=useState("Next");
    function next(){
        setPasswordClassname("rounded-lg bg-sgray text-spurple-300 font-medium");
        setButtontext("Sign up")
    }
  return (
    <div className="w-96 border-swhite shadow-2xl rounded-lg py-10 px-10 flex flex-col space-y-6">
      <div className="flex flex-col mb-6">
        <span className="text-3xl text-spurple-300 font-bold text-center">
          testingninja
        </span>
        <span className="text-lg text mt-3 text-center text-spurple-300">
          Register a New Account
        </span>
      </div>
      <input
        type="text"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Your Fullname"
      />
      <input
        type="text"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Organization name"
      />
      <input
        type="text"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Work email address"
      />
      <input
        type="password"
        className={passwordClassname}
        placeholder="Password"
      />
      <input
        type="password"
        className={passwordClassname}
        placeholder="Confirm password"
      />
      <span className="text-spurple-300 text-center">Forgot your password?</span>
      <div className="h-12" />
      <div className="flex flex-row justify-between items-center">
        <a href="#">
          <span className="text-lg font-semibold text-spurple-300">
            Login instead
          </span>
        </a>
        <button className="bg-spurple-300 rounded-lg text-swhite text-lg font-semibold py-2 px-5">
          {buttontext}
        </button>
      </div>
    </div>
  );
}
