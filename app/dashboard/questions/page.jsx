"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import Questionpoolcard from "@/app/components/Questionpoolcard";
import Deleteicon from "@/app/components/Deleteicon";
import CustomMcqModal from "@/app/components/CustomMcqModal";
import CustomQuestionModal from "@/app/components/CustomQuestionModal";
import QuestionPoolModal from "@/app/components/QuestionPoolModal";
import { QuestionsContext } from "@/app/context/QuestionsState";
import { McqsContext } from "@/app/context/McqsState";
export default function Questions() {
  const {mcqs, setMcqs} = useContext(McqsContext);
  const {desQuestions, setDesQuestions} = useContext(QuestionsContext);
  const tests = [
    {
      id: 1,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions: 0,
      numOfTests: 0,
    },
    {
      id: 2,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions: 0,
      numOfTests: 0,
    },
    {
      id: 3,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions: 0,
      numOfTests: 0,
    },
    {
      id: 4,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions: 0,
      numOfTests: 0,
    },
    {
      id: 5,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions: 0,
      numOfTests: 0,
    },
  ];
  return (
    <>
      <CustomMcqModal mcqs={mcqs} setMcqs={setMcqs} />
      <CustomQuestionModal
        desQuestions={desQuestions}
        setDesQuestions={setDesQuestions}
      />
      <QuestionPoolModal
        desQuestions={desQuestions}
        setDesQuestions={setDesQuestions}
      />
      <div className="flex lg:flex-row md:flex-row lg:space-y-0 md:space-y-0 space-y-3 flex-col justify-between">
        <div className="text-lg font-semibold text-spurple-300">
          Questions{" "}
          <span className="text-sgray-300">
            ({mcqs.length + desQuestions.length})
          </span>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-end lg:space-x-5 md:space-x-5 lg:space-y-0 md:space-y-0 space-y-3">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            // data-dropdown-trigger="hover"
            class="text-spurple-300 border border-spurple-300 bg-transparent font-medium rounded-lg text-md px-5 py-2 text-center inline-flex items-center"
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
            class="z-10 hidden bg-swhite divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700"
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
            className="bg-spurple-300 font-medium text-swhite px-5 py-2 rounded-lg"
          >
            Generate with AI
          </button>
          <Link href="/dashboard/generatetest" className="bg-spurple-300 font-medium text-swhite px-5 py-2 rounded-lg">
            Finalize
          </Link>
        </div>
      </div>
      <div
        className={
          mcqs.length + desQuestions.length > 0
            ? "hidden"
            : "h-screen -mt-20 flex items-center justify-center"
        }
      >
        <span className="text-lg font-medium text-sgray-300">
          No question created yet
        </span>
      </div>
      <div className="flex flex-col space-y-5 mt-5">
        {desQuestions.map((desQuestion, index) => (
          <div
            key={index}
            className="bg-swhite rounded-lg p-5 text-spurple-300 text-lg flex justify-between items-start"
          >
            <span>Question {index + 1 + ": " + desQuestion.question}</span>
            <button
              onClick={() => {
                setDesQuestions((currentQuestions) =>
                  currentQuestions.filter((tempQuestion, i) => i != index)
                );
              }}
            >
              <Deleteicon hover={true} size={35} />
            </button>
          </div>
        ))}
        {mcqs.map((mcq, index) => (
          <div
            key={index}
            className="bg-swhite rounded-lg p-5 flex justify-between items-start"
          >
            <div className="flex flex-col space-y-2">
              <span className="text-spurple-300 text-lg">
                Question {index + 1 + desQuestions.length + ": " + mcq.question}
              </span>
              {mcq.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex flex-row items-center justify-start space-x-5 text-lg"
                >
                  <input
                    type="radio"
                    name="answer"
                    id={"answer" + index}
                    value={option}
                    className="w-4 h-4"
                  />
                  <label for={"answer" + index} className="text-spurple-300">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <button onClick={()=>{
              setMcqs((currentQuestions) =>
                currentQuestions.filter((tempQuestion, i) => i != index)
              );
            }}>
              <Deleteicon hover={true} size={35} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
