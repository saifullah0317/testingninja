"use client";
import React from "react";
import { useState } from "react";
import Unauthorizederror from "../components/Unauthorizederror";
export default function Check() {
  const [show,setShow]=useState(false);
  return (
    <>
    <button onClick={()=>setShow(true)}>show</button>
    <Unauthorizederror showModal={show} setShowModal={setShow}/>
    </>
  );
}
