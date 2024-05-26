'use client'
import { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import ExamNavbar from "@/app/components/ExamNavbar";
import ExamQuestion from "@/app/components/ExamQuestion";
import Message from "@/app/components/Message";
import { ResponseContext } from "@/app/context/ResponseState";
export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {currentResponse, setCurrentResponse} = useContext(ResponseContext);
  const [divClass, setDivClass] = useState(
    "unselectable bg-white h-screen hidden"
  );
  const [questions, setQuestions] = useState([]);
  const [fetchError, setError] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [windowOpened, setWindowOpened] = useState(false);
  const [fetchedTest, setFetchedTest] = useState({});
  const enterFullscreen = () => {
    const elem = document.getElementById("testscreen");
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", function (e) {
      if (document.fullscreenElement) {
        // fullscreen mode activated
        setDivClass("unselectable bg-white h-screen");
      } else {
        // fullscreen mode deactivated
        setDivClass("unselectable bg-white h-screen hidden");
        if (!windowOpened) {
          window.close();
          router.push("/");
          setWindowOpened(true);
        }
      }
    });
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/test/${currentResponse.key}`, requestOptions)
        .then(async (response) => await response.json())
        .then((result) => {
          if(result._id){
            setFetchedTest(result);
          }else{
            setErrorMessage(JSON.stringify(result));
          }
        })
        .catch((error) => {
          setErrorMessage(JSON.stringify(result));
        });
  }, [questions, searchParams, router, windowOpened, setFetchedTest, currentResponse]);
  const attempterid = searchParams.get("attempter");
  return (
    <div>
      <ExamNavbar/>
      <div className={errorMessage?"mt-24 mb-5":"hidden"}><Message type="Error" message={errorMessage}/></div>
      <div className={errorMessage?"hidden":"mt-28"}/>
      <div className="mx-10">
        <h2 className="mb-2 text-lg font-semibold text-spurple-300">
          Exam instructions:
        </h2>
        <ul className="w-full space-y-1 text-sgray-300 list-disc list-inside">
          <li>
            Once you start the exam, you cannot close it without submitting it.
          </li>
          <li>
            When you start exam, you wll enter full-screen mode. If you escape
            this mode your exam will be automatically submitted.
          </li>
          <li>You can select, copy or cut any text in the exam.</li>
          <li>You cannot paste anything in any textfield.</li>
          {fetchedTest.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <h2 className="mt-5 text-lg font-semibold text-spurple-300">
          Best of luck !
        </h2>
        <button
          onClick={enterFullscreen}
          className="mt-5 bg-spurple-300 focus:bg-spurple-300 hover:bg-spurple-300 py-2 text-white rounded-lg px-8 text-lg font-semibold"
        >
          Start
        </button>
      </div>
      <div id="testscreen">
        <div
          className={divClass}
          //  style={{overflow:"scroll"}}
        >
          <ExamNavbar />
          <div className="overflow-auto">
            {fetchedTest.questions?.length > 0 ? (
              <div className="mt-28"><ExamQuestion attempter={currentResponse.email} questions={fetchedTest.questions} /></div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
