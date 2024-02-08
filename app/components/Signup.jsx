"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Signup({setErrorMessage}) {
  const router=useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function createAccount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: name,
      email,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials:'include'
    };

    fetch("http://localhost:8080/auth/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if(JSON.parse(result).token){
          router.push('/dashboard/mytests')
        }
        else if(JSON.parse(result).code==11000){
          setErrorMessage("User with this mail already exist.")
        }
        else if(JSON.parse(result).statusCode>=400){
          setErrorMessage("Invalid email")
        }
        else{
          setErrorMessage(JSON.stringify(result));
        }
      })
      .catch((error) => {
        console.log("error from signup catch: ",error);
        setErrorMessage(JSON.stringify(error));
      });
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Work email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="rounded-lg bg-sgray text-spurple-300 font-medium"
        placeholder="Create new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="h-12" />
      <div className="flex flex-row justify-between items-center">
        <Link href="/login">
          <span className="text-lg font-semibold text-spurple-300">
            Login instead
          </span>
        </Link>
        <button className="bg-spurple-300 rounded-lg text-swhite text-lg font-semibold py-2 px-5" onClick={createAccount}>
          Sign up
        </button>
      </div>
    </div>
  );
}
