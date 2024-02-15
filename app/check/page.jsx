"use client";
import React from "react";
// import PdfParse from "pdf-parse";
export default function Check() {
  function handleFileInput(e){
    const file = e.target.files[0];
    // PdfParse(file).then((data) => {
    //   console.log("file data: ", data);
    // }).catch((error)=>{
    //   console.log("error reading file: ", error);
    // });
    console.log(file);
  }
  return (
    <>
    <input type="file" onChange={handleFileInput} />
    </>
  );
}
