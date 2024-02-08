"use client";
import React from "react";
import { useState } from "react";
import Unauthorizederror from "../components/Unauthorizederror";
export default function Check() {
  const [show,setShow]=useState("");
  return (
    <>
    <button onClick={()=>setShow("modal message")}>show</button>
    <Unauthorizederror message={show} setMessage={setShow}/>
    </>
  );
}
