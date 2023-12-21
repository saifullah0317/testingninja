"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const router=useRouter();
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  function handleLogin(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: psw
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      credentials: 'include',
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result on frontend: ",result);
        console.log("status code: ",typeof result)
        if(JSON.parse(result).token){
          router.push("/dashboard/mytests");
        }
        else{
          // invalid credentials messagebox
        }
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="w-96 border-swhite shadow-2xl rounded-lg py-10 px-10 flex flex-col space-y-6">
      <div className="flex flex-col mb-6">
        <span className="text-3xl text-spurple-300 font-bold text-center">
          testingninja
        </span>
        <span className="text-lg text mt-3 text-center text-spurple-300">
          Login to Your Account
        </span>
      </div>
      <input
        type="email"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Email address"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <input
        type="password"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Password"
        value={psw}
        onChange={(e)=>{setPsw(e.target.value)}}
      />
      <span className="text-spurple-300 text-center">Forgot your password?</span>
      <div className="h-12" />
      <div className="flex flex-row justify-between items-center">
        <Link href="/signup">
          <span className="text-lg font-semibold text-spurple-300">
            Create Account
          </span>
        </Link>
        <button className="bg-spurple-300 rounded-lg text-swhite text-lg font-semibold py-2 px-5" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
