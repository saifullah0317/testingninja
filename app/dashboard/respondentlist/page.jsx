"use client";
import React from "react";
import Link from "next/link";
import { read, utils, writeFile } from "xlsx";
import { useState, useContext } from "react";
import Deleteicon from "@/app/components/Deleteicon";
import { useRouter } from "next/navigation";
import Message from "@/app/components/Message";
import RespondentlistState from "@/app/context/RespondentlistState";
import { RespondentlistContext } from "@/app/context/RespondentlistState";
import ContextualSavebar from "@/app/components/ContextualSavebar";

export default function Respondentlist() {
  const { list, setList } = useContext(RespondentlistContext);
  const router = useRouter();
  const [emails, setEmails] = useState(list.attempters);
  const [newEmail, setNewEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
  const [listname, setListname] = useState(list.title);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(list.description);
  const [changed, setChanged] = useState(false);

  function submitList() {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: listname,
      description: description,
      attempters: emails,
    });
    console.log("listname: ", listname);
    console.log("emails: ", emails);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://localhost:8080/attempterlist", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        setLoading(false);
        setShowMessage(true);
        if (data.status < 400) {
          setMessageType("Success");
          setMessageText(`List "${listname}" saved successfully!`);
          setListname("");
          setDescription("");
          setEmails([]);
          setNewEmail("");
        } else {
          setMessageType("Error");
          if (data.message) {
            setMessageText(data.message);
          } else {
            setMessageText(JSON.stringify(data));
          }
        }
      })
      .catch((error) => {
        console.log("catch error: ", error);
        setLoading(false);
        setShowMessage(true);
        setMessageType("Error");
        setMessageText(JSON.stringify(error));
      });
  }

  const handleImport = (event) => {
    const files = event.target.files;

    let updatedemails = []; // Create a temporary array to collect all rows

    let fileIndex = 0;
    const loadFile = (fileIndex) => {
      if (fileIndex < files.length) {
        const file = files[fileIndex];
        const reader = new FileReader();

        reader.onload = (event) => {
          const wb = read(event.target.result);
          const sheets = wb.SheetNames;

          let sheetIndex = 0;
          while (sheetIndex < sheets.length) {
            const rows = utils.sheet_to_json(wb.Sheets[sheets[sheetIndex]]);
            updatedemails = [...updatedemails, ...rows];
            console.log("rows: ", emails);
            sheetIndex += 1;
          }

          // Load the next file
          loadFile(fileIndex + 1);
        };

        reader.readAsArrayBuffer(file);
      } else {
        updatedemails = updatedemails.map((email) => {
          console.log("singleEmail: ", email);
          return email.emails;
        });
        console.log("updatedEmails: ", updatedemails);
        // All files processed, update the state
        if (!list.create) {
          setChanged(true);
        }
        setEmails((prevemails) =>
          Array.from(new Set([...prevemails, ...updatedemails]))
        );
      }
    };

    // Start loading the first file
    loadFile(fileIndex);
  };

  return (
    <>
      <div className="flex flex-col space-y-5">
        {/* <ContextualSavebar/> */}
        <Message type={messageType} message={" " + messageText} />
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium text-spurple-300 flex justify-start space-x-3 items-center">
            <Link href="/dashboard/respondents">
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/510173/ios-filled/50/back.png"
                alt="back"
              />
            </Link>
            <span>{list.create ? "New" : "Edit"} respondents list</span>
          </div>
          <div className="flex items-center justify-end space-x-5">
          <button className={(list.create?"hidden":"")+" px-5 py-2 rounded-lg text-md font-medium "+(!list.create&(!changed)?"bg-sgray-200 text-sgray-300":"bg-spurple-300 text-swhite")}>Undo changes</button>
          <button disabled={!list.create&(!changed)}
            // className="px-5 py-2 rounded-lg bg-spurple-300 text-swhite text-md font-medium"
            className={"px-5 py-2 rounded-lg text-md font-medium "+(!list.create&(!changed)?"bg-sgray-200 text-sgray-300":"bg-spurple-300 text-swhite")}
            onClick={() => {
              if (!listname || !emails) {
                setShowMessage(true);
                setMessageType("Error");
                setMessageText(
                  "Please fill the required inputs (List name and Emails list)"
                );
              } else {
                submitList();
              }
            }}
          >
            <div className={(list.create&loading) ? "" : "hidden"}>
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Saving...
            </div>
            <span className={(list.create&(!loading)) ? "" : "hidden"}>Save list</span>
            <span className={list.create?"hidden":""}>Save changes</span>
          </button>
          <button className={list.create?"hidden":""}>
            <Deleteicon size={40} hover={true}/>
          </button>
          </div>
        </div>
        <div className="bg-swhite p-5 rounded-lg shadow-lg flex flex-col space-y-3">
          <span className="text-md font-medium text-spurple-300 mb-5">
            BASIC INFORMATION
          </span>
          <input
            type="text"
            placeholder="List name"
            value={listname}
            onChange={(e) => {
              if (!list.create) {
                setChanged(true);
              }
              setListname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description (optional notes visible only to you)"
            value={description}
            onChange={(e) => {
              if (!list.create) {
                setChanged(true);
              }
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="bg-swhite p-5 rounded-lg shadow-lg">
          <span className="text-md font-medium text-spurple-300">
            EMAIL LIST
          </span>
          <div className="flex lg:flex-row md:flex-row flex-col space-y-5 items-start justify-between mt-5">
          <div className="flex flex-col space-y-10">
          <div>
            <p>Import email list from file</p>
            <p>
              If you have a list of addresses in the CSV (*.xlsx,
              *csv) format, upload it here:
            </p>

            <div className="mt-3">
              <input
                type="file"
                id="emailsfile"
                accept=".xlsx,.csv"
                className="appearance-none file:bg-spurple-300"
                onChange={handleImport}
                multiple
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <p>Add new email</p>
              <p>{"Add respondents' email addresses manually"}</p>
            </div>
            <div className="flex justify-start space-x-5">
              <input
                type="text"
                placeholder="Email address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button
                className="px-3 py-1 border border-spurple-300 text-spurple-300 rounded-lg hover:bg-spurple-300 hover:text-swhite"
                onClick={() => {
                  if (!list.create) {
                    setChanged(true);
                  }
                  setEmails(Array.from(new Set([newEmail, ...emails])));
                  setNewEmail("");
                  console.log("emails: ", emails);
                }}
              >
                Add
              </button>
            </div>
          </div>
          </div>
          <div
            className={
              (emails.length > 0 ? "" : "hidden") + " flex flex-col space-y-3"
            }
          >
            {/* <div className="flex justify-start space-x-3 items-center">
            <Deleteicon size={25} hover={false} />
            <span className="text-sgray-300">Delete selected</span>
          </div> */}
            <div className="relative overflow-x-auto">
              <table className="w-fit text-sm text-left rtl:text-right text-spurple-300 font-medium">
                <thead className="text-sm text-spurple-300 uppercase bg-spurple-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email Addresses
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((email, index) => (
                    <tr key={index} className="bg-white border">
                      <th
                        scope="row"
                        className="px-6 py-3 font-medium text-spurple-300 whitespace-nowrap"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-3">{email}</td>
                      <td className="px-6 py-3">
                        <button
                          onClick={() => {
                            if (!list.create) {
                              setChanged(true);
                            }
                            setEmails((currentEmails) =>
                              currentEmails.filter((tempEmail, i) => i != index)
                            );
                          }}
                        >
                          <Deleteicon size={25} hover={true} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
