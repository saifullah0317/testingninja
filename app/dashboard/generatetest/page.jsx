"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DefaultModal from "@/app/components/DefaultModal";
import CustomQuestionModal from "@/app/components/CustomQuestionModal";
import CustomMcqModal from "@/app/components/CustomMcqModal";
import Message from "@/app/components/Message";
import Unauthorizederror from "@/app/components/Unauthorizederror";
import Deleteicon from "@/app/components/Deleteicon";
import { TestContext } from "@/app/context/TestState";
import Loadingicon from "@/app/components/Loadingicon";
export default function Generatetest() {
  const router=useRouter(); 
  const [desQuestions, setDesQuestions] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [postTest, setPostTest] = useState(true);
  const [allowAttemption, setAllowAttemption] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [test, setTest] = useState(TestContext);
  const [changed, setChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("Uncategorized");
  const [basicSettingMessageType, setBasicSettingMessageType] =
    useState("Info");
  const [basicSettingMessage, setBasicSettingMessage] = useState();
  const [testTitle, setTestTitle] = useState("");
  const [description, setDescription] = useState("");
  function removeSpaces(text) {
    return text.split(" ").join("");
  }
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://localhost:8080/category", requestOptions)
      .then(async (response) => await response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setCategories(result);
        } else if (result.status == 401 || result.statusCode == 401) {
          setErrorMessage("Authorization error ! Login again.");
          setTimeout(() => {
            router.push("/login?first=false");
          }, 2000);
        } else if (result.code) {
          setErrorMessage(JSON.stringify(result));
        } else if (result.message) {
          setErrorMessage(result.message);
        } else {
          setErrorMessage(result.toString());
        }
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }, [
    setCategories,
    setModalMessage,
    setBasicSettingMessageType,
    setBasicSettingMessage,
  ]);
  return (
    <>
      <DefaultModal />
      <CustomQuestionModal
        desQuestions1={desQuestions}
        setDesQuestions1={setDesQuestions}
      />
      <CustomMcqModal mcqs1={mcqs} setMcqs1={setMcqs} />
      <Unauthorizederror message={modalMessage} setMessage={setModalMessage} />
      <div className="flex flex-col space-y-5 -mt-12">
        <Message type={errorMessage ? "Error" : ""} message={errorMessage} />
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium text-spurple-300 flex justify-start space-x-3 items-center">
            <Link href="/dashboard/mytests">
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/510173/ios-filled/50/back.png"
                alt="back"
              />
            </Link>
            <span>{!test.id ? "New" : "Edit"} Test</span>
          </div>
          <div className="flex items-center justify-end space-x-5">
            <button
              disabled={test.id & !changed}
              className={
                (!test.id ? "hidden" : "") +
                " px-5 py-2 rounded-lg text-md font-medium " +
                (test.id & !changed
                  ? "bg-sgray-200 text-sgray-300"
                  : "bg-spurple-300 text-swhite")
              }
              onClick={() => {
                undoChanges();
              }}
            >
              Undo changes
            </button>
            <button
              disabled={test.id & !changed}
              // className="px-5 py-2 rounded-lg bg-spurple-300 text-swhite text-md font-medium"
              className={
                "px-5 py-2 rounded-lg text-md font-medium " +
                (test.id & !changed
                  ? "bg-sgray-200 text-sgray-300"
                  : "bg-spurple-300 text-swhite")
              }
              onClick={() => {
                console.log("entering click event");
                if (!test.id) {
                  console.log("list.create: true");
                  if (listname && emails) {
                    submitList();
                  } else {
                    setErrorMessage(
                      "Please fill all the required input fields."
                    );
                  }
                } else {
                  saveChanges();
                }
              }}
            >
              <div className={!test.id & loading ? "flex" : "hidden"}>
                <Loadingicon />
                <span>Saving...</span>
              </div>
              <span className={!test.id & !loading ? "" : "hidden"}>
                Save test
              </span>
              <span className={!test.id ? "hidden" : ""}>Save changes</span>
            </button>
            <button
              className={!test.id ? "hidden" : ""}
              onClick={() => {
                deleteList();
              }}
            >
              <Deleteicon size={40} hover={true} />
            </button>
          </div>
        </div>
        {/* basic settings */}
        <div>
          <div className="bg-swhite rounded-lg p-5 w-full space-y-5">
            <span className="text-md font-medium text-spurple-300">
              BASIC SETTINGS
            </span>
            {/* <div className="rounded-lg w-full bg-sblue-100 p-3">
              <span className="text-sblue-200">
                <span className="font-medium">Info!</span>
                {` When you have a larger number of tests, assign them to specific categories, e.g. "Recruitment tests", etc. Using the category you'll be able to use filtering options in the My tests tab.`}
              </span>
            </div> */}
            {/* <Message type="Info" message={basicSettingMessage}/> */}
            <div>
              <input
                type="text"
                id="testtitle"
                placeholder="Test title"
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                className="w-full rounded-lg text-spurple-300"
              />
            </div>
            <div>
              <input
                type="text"
                id="testdescription"
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg text-spurple-300"
              />
            </div>
            <div className="space-y-3">
              <span className="text-md text-sgray-300">Choose category</span>
              <div className="flex justify-between items-start space-x-5">
                <div className="w-full flex flex-col">
                  <select
                    id="countries"
                    value={categorySelected}
                    onChange={(e) => setCategorySelected(e.target.value)}
                    className="text-spurple-300 border-spurple-300 text-md rounded-lg px-5 py-2"
                  >
                    {categories.map((category, index) => (
                      <option value={category.category} key={index}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  <span className="text-sm text-sgray-300">{`When you have a larger number of tests, assign them to specific categories, e.g. "Recruitment tests", etc. Using the category you'll be able to use filtering options in the My tests tab.`}</span>
                </div>
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="text-spurple-300 border border-spurple-300 font-medium rounded-lg text-md px-5 py-2 text-center w-52"
                >
                  Create category
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Questions management */}
        <div>
          <div className="bg-swhite rounded-lg p-5 w-full flex flex-col space-y-5">
            <span className="text-md font-medium text-spurple-300">
              QUESTIONS MANAGEMENT
            </span>
            <div className="flex justify-between items-center">
              <span className="text-sgray-300 text-md">
                Add questions to the test
              </span>
              <div className="flex justify-end space-x-2">
                {/* Add custom question dropdown */}

                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  // data-dropdown-trigger="hover"
                  class="text-spurple-300 bg-swhite font-medium rounded-lg text-md px-5 py-3 text-center inline-flex items-center"
                  type="button"
                >
                  Add custom question{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownHover"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-spurple-300"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <button
                        data-modal-target="modal2"
                        data-modal-toggle="modal2"
                        className="text-spurple-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                      >
                        Multiple Choice
                      </button>
                    </li>

                    <li>
                      <button
                        data-modal-target="modal1"
                        data-modal-toggle="modal1"
                        className="text-spurple-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                      >
                        Descriptive
                      </button>
                    </li>
                  </ul>
                </div>

                <button className="bg-swhite border border-spurple-300 font-medium text-spurple-300 px-5 py-2 rounded-lg">
                  Generate with AI
                </button>
              </div>
            </div>
            <div
              className={
                (mcqs.length > 0 ? "" : "hidden") +
                " grid grid-cols-1 divide-y border border-spurple-300 rounded-lg px-5 py-3"
              }
            >
              <span className="text-lg text-spurple-300 mb-8">
                Multiple Choice Questions
              </span>
              {mcqs.map((mcq, index) => (
                <div
                  key={index}
                  className="px-5 py-3 border-spurple-300 text-md font-medium text-spurple-300"
                >
                  <span>Question: {mcq.question}</span>
                  <ul className="list-disc">
                    {mcq.options.map((option, optionIndex) => (
                      <li key={optionIndex.toString()}>{option}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className={
                (desQuestions.length > 0 ? "" : "hidden") +
                " grid grid-cols-1 divide-y border border-spurple-300 rounded-lg px-5 py-3"
              }
            >
              <span className="text-lg text-spurple-300 mb-8">
                Descriptive Questions
              </span>

              {desQuestions.map((question, index) => (
                <div
                  key={index}
                  className="px-5 py-3 border-spurple-300 text-md font-medium text-spurple-300"
                >
                  <span>Question: {question.question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle */}
        <div>
          <div className="bg-swhite rounded-lg p-5 w-full flex flex-col space-y-5">
            <span className="text-md font-medium text-spurple-300">
              EXAM BROWSER CONFIGURATION
            </span>
            <div className="flex justify-start space-x-5">
              <span>Post this test on Safe Exam Browser ?</span>
              <label class="relative inline-flex items-center me-5 cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  checked={postTest}
                  onChange={() => setPostTest(!postTest)}
                />
                <div class="w-11 h-6 bg-sgray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-spurple-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-swhite after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-swhite after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-spurple-300"></div>
                <span className="ms-3 text-md text-spurple-300 font-medium">
                  {postTest ? "Yes" : "No"}
                </span>
              </label>
            </div>
            <div class="flex">
              <div className="flex items-center h-6">
                <input
                  id="allowAttemption"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-spurple-300 border-spurple-300 rounded"
                  checked={allowAttemption}
                  onChange={() => setAllowAttemption(!allowAttemption)}
                />
              </div>
              <div className="ms-2">
                <label
                  for="allowAttemption"
                  class="text-md text-spurple-300 dark:text-gray-300"
                >
                  Allow everyone with the test-key to attemp the test
                </label>
                <p id="helper-checkbox-text" class="text-sm text-sgray-300">
                  {
                    "Recommended: Don't allow everyone, rather enter list of emails of those who you want to attempt the test"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
