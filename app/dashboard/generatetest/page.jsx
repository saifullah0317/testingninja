"use client";
import React from "react";
import { useState } from "react";
import DefaultModal from "@/app/components/DefaultModal";
import CustomQuestionModal from "@/app/components/CustomQuestionModal";
import CustomMcqModal from "@/app/components/CustomMcqModal";
export default function Generatetest() {
  const [desQuestions, setDesQuestions] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [postTest, setPostTest] = useState(true);
  const [allowAttemption, setAllowAttemption] = useState(false);
  return (
    <>
      <DefaultModal />
      <CustomQuestionModal
        desQuestions1={desQuestions}
        setDesQuestions1={setDesQuestions}
      />
      <CustomMcqModal mcqs1={mcqs} setMcqs1={setMcqs} />
      <div className="flex flex-col space-y-5">
        {/* basic settings */}
        <div>
          <span>Basic settings</span>
          <div className="bg-swhite rounded-lg p-5 w-full">
            <div className="rounded-lg w-full bg-sblue-100 p-3">
              <span className="text-sblue-200">
                <span className="font-medium">Info!</span>
                {` When you have a larger number of tests, assign them to specific categories, e.g. "Recruitment tests", etc. Using the category you'll be able to use filtering options in the My tests tab.`}
              </span>
            </div>
            <div>
              <label htmlFor="testtitle">Title your test</label>
              <input type="text" id="testtitle" />
            </div>
            <div>
              <label htmlFor="testdescription">Description (optional)</label>
              <input type="text" id="testdescription" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <label for="countries" className="mb-2 text-md">
                  Category
                </label>
                <select
                  id="countries"
                  className="text-spurple-300 border-spurple-300 text-sm rounded-lg w-full p-2.5 "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="text-spurple-300 border border-spurple-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
                Create category
              </button>

              {/* Modal start*/}
              {/* <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">
                  <h3 className="text-xl font-semibold text-spurple-300 dark:text-white">
                    Create new category
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <input type="text" placeholder="Category name" />
                </div>

                <div className="flex items-center p-4 md:p-5 rounded-b">
                  <button
                    data-modal-hide="default-modal"
                    className="text-swhite bg-spurple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    className="ms-3 text-sgray-300 bg-white rounded-lg border border-sgray-300 text-sm font-medium px-5 py-2.5"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div> */}
              {/* Modal end */}
            </div>
          </div>
        </div>

        {/* Questions management */}
        <div>
          <span>Questions management</span>
          <div className="bg-swhite rounded-lg p-5 w-full flex flex-col space-y-5">
            <div className="flex justify-between items-center">
              <span>Add questions to the test</span>
              <div className="flex justify-end space-x-2">
                {/* Add custom question dropdown */}

                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
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

                <button className="bg-swhite border border-spurple-300 font-medium text-spurple-300 px-5 py-3 rounded-lg">
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
          <span>Exam browser configuration</span>
          <div className="bg-swhite rounded-lg p-5 w-full flex flex-col space-y-5">
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
                <p
                  id="helper-checkbox-text"
                  class="text-sm text-sgray-300"
                >
                  {"Recommended: Don't allow everyone, rather enter list of emails of those who you want to attempt the test"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
