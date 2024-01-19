"use client";
import React from "react";
import Datepicker from "../components/Datepicker";
import { useState } from "react";
export default function Check() {
  const [date,setDate]=useState();
  function postTest(newDate) {
    console.log("newDate: ",newDate)
    console.log("typeof date: ",typeof newDate)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGUwODJmZGFmODVjZDNiMDBmOTQ3MTEiLCJpYXQiOjE3MDQxMTE3OTIsImV4cCI6MTcwNDExNTM5Mn0.rbmPTojOzbJu3kg9JKhoaGX9q9pX-VBUjMfrVl0yguk"
    );
    // let date=date.toString()
    let raw = JSON.stringify({
      categoryid: "658d7b9d1359fe417517fd23",
      questionPoolid: [],
      key: "checka",
      title: "check new test1",
      isPost: true,
      allowAll: false,
      attempts: 1,
      attempterListid: [],
      time: 50,
      expireAt:date,
      // activeOn:newDate,
      instructions: [],
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: 'include',
    };

    fetch("http://localhost:8080/test", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("result: ",result))
      .catch((error) => console.log("error: ", error));
  }
  return (
    <>
    <div className="flex justify-start space-x-5">
      <Datepicker date={date} setDate={setDate}/>
      {/* <Datepicker /> */}

    </div>

      {/* <div inline-datepicker data-date="02/25/2022"></div> */}

      <button
        className="bg-spurple-300 text-swhite p-2 rounded-lg"
        onClick={()=>{
          postTest();
        }}
      >
        Post test
      </button>
    </>
  );
}
