"use client";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DefaultModal from "@/app/components/DefaultModal";
import CustomQuestionModal from "@/app/components/CustomQuestionModal";
import CustomMcqModal from "@/app/components/CustomMcqModal";
import Message from "@/app/components/Message";
import Unauthorizederror from "@/app/components/Unauthorizederror";
import Deleteicon from "@/app/components/Deleteicon";
import Datepicker from "@/app/components/Datepicker";
import { TestContext } from "@/app/context/TestState";
import Loadingicon from "@/app/components/Loadingicon";
import { convertEmails } from "@/app/Helper";
import TimePicker from "@/app/components/TimePicker";
import { QuestionsContext } from "@/app/context/QuestionsState";
import { McqsContext } from "@/app/context/McqsState";
import { set } from "date-fns";
export default function Generatetest() {
  const router = useRouter();
  const {desQuestions, setDesQuestions} = useContext(QuestionsContext);
  const {mcqs, setMcqs} = useContext(McqsContext);
  const [postTest, setPostTest] = useState(true);
  const [allowAttemption, setAllowAttemption] = useState(false);
  const [activateTest, setActivateTest] = useState(true);
  const [deactivateTest, setDeactivateTest] = useState(true);
  const [activationDate, setActivationDate] = useState();
  const [deactivationDate, setDeactivationDate] = useState();
  const [activationTime, setActivationTime] = useState();
  const [deactivationTime, setDeactivationTime] = useState();
  const [modalMessage, setModalMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [test, setTest] = useState(TestContext);
  const [changed, setChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("Uncategorized");
  const [testTitle, setTestTitle] = useState("");
  const [description, setDescription] = useState("");
  const [testDuration, setTestDuration] = useState();
  const [respondentlists, setRespondentlists] = useState([]);
  const [selectedRespondentlists, setSelectedRespondentlists] = useState([]);
  const [testInstructions, setTestInstructions] = useState([
    "Once you start the exam, you cannot close it without submitting it.",
    "When you start exam, you wll enter full-screen mode. If you escape this mode your exam will be automatically submitted.",
    "You cannot select, copy or cut any text in the exam.",
    "You cannot paste anything in any textfield.",
  ]);
  const [singleInstruction, setSingleInstruction] = useState("");
  function removeSpaces(text) {
    return text.split(" ").join("");
  }
  function checkRequiredInputs() {
    if (testTitle && categorySelected && (desQuestions || mcqs)) {
      if (postTest) {
        if (testDuration) {
          if ((!allowAttemption && respondentlists) || allowAttemption) {
            return true;
          } else {
            setErrorMessage("Please select atleast one respondent list.");
          }
        } else {
          setErrorMessage("Test duration is required.");
        }
      } else {
        return true;
      }
    } else {
      setErrorMessage(
        "Either test title, category or question to add is missing. Kindly fill all of them."
      );
    }
    return false;
  }
  function createTest() {
    if (checkRequiredInputs()) {
      postQuestions();
    }
  }
  function postQuestions() {

  }
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, requestOptions)
      .then(async (response) => await response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setCategories(result);
        } else if (result.status == 401 || result.statusCode == 401) {
          setErrorMessage("Authorization error ! Login again.");
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

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/attempterlist`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (Array.isArray(data)) {
          setRespondentlists(data);
        } else if (data.message && !errorMessage) {
          setErrorMessage(data.message);
        } else if (data.code && !errorMessage) {
          setErrorMessage(JSON.stringify(data));
        } else if (!errorMessage) {
          setErrorMessage(data.toString());
        }
      })
      .catch((error) => {
        if (!errorMessage) {
          setErrorMessage(error.toString());
        }
      });
  }, [
    setCategories,
    setModalMessage,
    setErrorMessage,
    router,
    setRespondentlists,
    errorMessage,
  ]);
  return (
    <>
      {/* <ErrorModal className={modalMessage?"":'hidden'}/> */}
      <DefaultModal />
      {/* <CustomQuestionModal
        desQuestions={desQuestions}
        setDesQuestions={setDesQuestions}
      />
      <CustomMcqModal mcqs={mcqs} setMcqs={setMcqs} />
      <QuestionPoolModal desQuestions={desQuestions} setDesQuestions={setDesQuestions}/> */}
      <Unauthorizederror message={modalMessage} setMessage={setModalMessage} />
      <div className="flex flex-col space-y-5 -mt-12">
        <div className="mt-4">
          <Message type={errorMessage ? "Error" : ""} message={errorMessage} />
        </div>
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
                if (!test.id) {
                  if (listname && emails) {
                    createTest();
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
              {/* <div className="flex justify-end space-x-2">
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
                <button
                  data-modal-target="questionpoolmodal"
                  data-modal-toggle="questionpoolmodal"
                  className="bg-swhite border border-spurple-300 font-medium text-spurple-300 px-5 py-2 rounded-lg"
                >
                  Generate with AI
                </button>
              </div> */}
              <div className="flex justify-end space-x-5">
                {/* <Link className="px-5 py-2 border-spurple-300 text-spurple-300 bg-transparent">Add existing questions</Link> */}
                <Link href="/dashboard/questions" className="px-5 py-2 border border-spurple-300 rounded-lg text-spurple-300 text-md font-medium bg-transparent">Create questions</Link>
              </div>
            </div>
            {/* <div
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
                  <span>Question {index+1}: {question.question}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Toggle */}
        <div>
          <div className="bg-swhite rounded-lg p-5 w-full flex flex-col space-y-8">
            <span className="text-md font-medium text-spurple-300">
              EXAM BROWSER CONFIGURATION
            </span>
            {/* <div className="flex justify-start space-x-5">
              <span className="text-spurple-300">
                Post this test on Safe Exam Browser ?
              </span>
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
            </div> */}
            <div className="flex">
              <div className="flex items-center h-6">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-spurple-300 border-spurple-300 rounded"
                  checked={postTest}
                  onChange={() => setPostTest(!postTest)}
                />
              </div>
              <div className="ms-2">
                <label className="text-md text-spurple-300 dark:text-gray-300">
                  Post this test on Safe Exam Browser ?
                </label>
                {/* <p id="helper-checkbox-text" className="text-sm text-sgray-300">
                  {
                    "An active state of test indicates that it's availabe to attempt for the respondents. You can manually activate test afterwards."
                  }
                </p> */}
              </div>
            </div>

            <div className={postTest?"flex justify-start space-x-5 items-center":"hidden"}>
              <span className="text-sgray-300">Test duration</span>
              <TimePicker setTime={setTestDuration} />
            </div>
            <div className={postTest ? "flex" : "hidden"}>
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
            <div
              className={
                postTest && !allowAttemption
                  ? "flex justify-start space-x-5"
                  : "hidden"
              }
            >
              <div className="w-full">
                <button
                  id="dropdownHelperButton"
                  data-dropdown-toggle="dropdownHelper"
                  className="text-spurple-300 border border-spurple-300 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex w-full items-center justify-between"
                  type="button"
                >
                  Select respondents lists{" "}
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

                <div
                  id="dropdownHelper"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-1/2"
                >
                  {respondentlists ? (
                    <ul
                      class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHelperButton"
                    >
                      {respondentlists.map((respondentlist, index) => (
                        <li key={index}>
                          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div class="flex items-center h-5">
                              <input
                                id="helper-checkbox-1"
                                aria-describedby="helper-checkbox-text-1"
                                type="checkbox"
                                checked={selectedRespondentlists.includes(
                                  respondentlist
                                )}
                                onChange={() => {
                                  if (
                                    selectedRespondentlists.includes(
                                      respondentlist
                                    )
                                  ) {
                                    setSelectedRespondentlists(
                                      selectedRespondentlists.filter(
                                        (item) =>
                                          item._id !== respondentlist._id
                                      )
                                    );
                                  } else {
                                    setSelectedRespondentlists([
                                      ...selectedRespondentlists,
                                      respondentlist,
                                    ]);
                                  }
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              />
                            </div>
                            <div class="ms-2 text-sm">
                              <label
                                for="helper-checkbox-1"
                                class="font-medium text-gray-900 dark:text-gray-300"
                              >
                                <div>{respondentlist.title}</div>
                                <p
                                  id="helper-checkbox-text-1"
                                  class="text-xs font-normal text-gray-500 dark:text-gray-300"
                                >
                                  {convertEmails(respondentlist.attempters)}
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span aria-labelledby="dropdownHelperButton" className="text-sgray-300 p-5 text-md font-medium">
                      No list added yet, create list on respondents page.
                    </span>
                  )}
                </div>
              </div>
              <Link
                href="/dashboard/respondents"
                className="border border-spurple-300 px-5 py-2 text-spurple-300 text-md rounded-lg w-64 font-medium"
              >
                Manage respondents
              </Link>
            </div>
            <div className={postTest ? "flex" : "hidden"}>
              <div className="flex items-center h-6">
                <input
                  id="activateTest"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-spurple-300 border-spurple-300 rounded"
                  checked={activateTest}
                  onChange={() => setActivateTest(!activateTest)}
                />
              </div>
              <div className="ms-2">
                <label
                  htmlFor="activateTest"
                  className="text-md text-spurple-300 dark:text-gray-300"
                >
                  Activate test on the time of creating.
                </label>
                <p id="helper-checkbox-text" className="text-sm text-sgray-300">
                  {
                    "An active state of test indicates that it's availabe to attempt for the respondents. You can manually activate test afterwards."
                  }
                </p>
              </div>
            </div>
            <div
              className={
                activateTest
                  ? "hidden"
                  : "flex justify-between items-center space-x-5"
              }
            >
              <div className="flex justify-start space-x-5 items-center">
                <span className="text-sgray-300">Test activation date</span>
                <Datepicker date={activationDate} setDate={setActivationDate} />
              </div>
              <div className="flex justify-end space-x-5 items-center">
                <span className="text-sgray-300">Test activation time</span>
                <TimePicker setTime={setActivationTime} />
              </div>
            </div>
            <div
              className={
                postTest && ((activationDate && activationTime) || activateTest)
                  ? "flex"
                  : "hidden"
              }
            >
              <div className="flex items-center h-6">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-spurple-300 border-spurple-300 rounded"
                  checked={deactivateTest}
                  onChange={() => setDeactivateTest(!deactivateTest)}
                />
              </div>
              <div className="ms-2">
                <label className="text-md text-spurple-300 dark:text-gray-300">
                  Specify deactivation date and time.
                </label>
                <p id="helper-checkbox-text" className="text-sm text-sgray-300">
                  {
                    "Otherwise you can also deactivate test manually on the test page anytime."
                  }
                </p>
              </div>
            </div>
            <div
              className={
                postTest &&
                deactivateTest &&
                ((activationDate && activationTime) || activateTest)
                  ? "flex justify-between items-center space-x-5"
                  : "hidden"
              }
            >
              <div className="flex justify-start space-x-5 items-center">
                <span className="text-sgray-300">Test deactivation date</span>
                <Datepicker
                  date={deactivationDate}
                  setDate={setDeactivationDate}
                />
              </div>
              <div className="flex justify-end space-x-5 items-center">
                <span className="text-sgray-300">Test deactivation time</span>
                <TimePicker setTime={setDeactivationTime} />
              </div>
            </div>

            <div className={postTest?"flex flex-col space-y-5":'hidden'}>
              <span className="text-md text-sgray-300">
                Add instruction that will appear to respondent before attempting
                exam (optional)
              </span>
              <div className="flex justify-start">
                <input
                  type="text"
                  value={singleInstruction}
                  onChange={(e) => setSingleInstruction(e.target.value)}
                  placeholder="Enter one instruction for attempter here"
                  className="w-full rounded-l-lg border border-sgray-300 text-spurple-300"
                />
                <button
                  onClick={() => {
                    setTestInstructions([
                      ...testInstructions,
                      singleInstruction,
                    ]);
                  }}
                  className="px-5 py-2 border border-spurple-300 rounded-r-lg text-md font-medium text-spurple-300 hover:bg-spurple-300 hover:text-swhite"
                >
                  Add
                </button>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-spurple-300">
                  Exam instructions:
                </h2>
                <ul className="w-full space-y-1 text-spurple-300 list-disc list-inside">
                  {testInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
