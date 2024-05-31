"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import ExamNavbar from "@/app/components/ExamNavbar";
import ExamQuestion from "@/app/components/ExamQuestion";
import Message from "@/app/components/Message";
import { ResponseContext } from "@/app/context/ResponseState";
export default function Page() {
  const [messageType, setMessageType] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    "Your response has been submitted successfully !"
  );
  const [evaluationText, setEvaluationText] = useState("Now evaluating your text ...");
  return (
    <div>
      
    </div>
  );
}
