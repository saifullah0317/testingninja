"use client"
import Link from "next/link";
import Dropdown from "@/app/components/Dropdown";
import Searchbar from "@/app/components/Searchbar";
import Testcard from "@/app/components/Testcard";
import Filtertests from "@/app/components/Filtertests";
import Respondentcard from "@/app/components/Respondentcard";
import { RespondentlistContext } from "@/app/context/RespondentlistState";
import { useEffect, useState, useContext } from "react";
export default function Respondents() {
  const [lists,setLists]=useState([]);
  const [errorMessage,setErrorMessage]=useState(false);
  const {list,setList}=useContext(RespondentlistContext);
  useEffect(() => {
    var myHeaders = new Headers();
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      credentials:'include',
      redirect: "follow",
    };

    fetch("http://localhost:8080/attempterlist", requestOptions)
      .then(async (response) => {
        const data=await response.json();
        console.log("attempterList data: ",data)
        setLists(data);
      })
      .catch((error) => {
        setErrorMessage(error)
      });
  },[setLists,setErrorMessage]);
  return (
    <>
      <div className="flex lg:flex-row md:flex-row lg:space-y-0 md:space-y-0 space-y-3 flex-col justify-between">
        <div className="text-lg font-semibold text-spurple-300">
          Lists of respondents <span className="text-sgray-300">({lists.length})</span>
        </div>
        <Link href="/dashboard/respondentlist">
          <button onClick={()=>{
            setList({
              create:true,
              title:'',
              description:'',
              attempters:[]
            })
          }} className="px-3 py-2 bg-spurple-300 text-swhite text-md font-medium rounded-lg">
            New list
          </button>
        </Link>
      </div>
      {/* <Filtertests /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {lists.map((singleList, index) => (
          <div key={index}>
            <Respondentcard
              date={singleList.createdAt}
              title={singleList.title}
              description={singleList.description}
              attempters={singleList.attempters}
            />
          </div>
        ))}
      </div>
    </>
  );
}
