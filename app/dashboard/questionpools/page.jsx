import Link from "next/link";
import Questionpoolcard from "@/app/components/Questionpoolcard";
import Filtertests from "@/app/components/Filtertests";
export default function questionpools() {
  const tests = [
    {
      id: 1,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions:0,
      numOfTests:0
    },
    {
      id: 2,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions:0,
      numOfTests:0
    },
    {
      id: 3,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions:0,
      numOfTests:0
    },
    {
      id: 4,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions:0,
      numOfTests:0
    },
    {
      id: 5,
      title: "Dummy pool",
      prompt: "this is the description of the dummy test",
      numOfQuestions:0,
      numOfTests:0
    },
  ];
  return (
    <>
      <div className="flex lg:flex-row md:flex-row lg:space-y-0 md:space-y-0 space-y-3 flex-col justify-between">
        <div className="text-lg font-semibold text-spurple-300">
          Questions pools <span className="text-sgray-300">(6)</span>
        </div>
        <Link href="/dashboard/generatequestionpool">
          <button className="px-3 py-2 bg-spurple-300 text-swhite text-md font-medium rounded-lg">
            <span className="text-xl font-bold">+</span> New pool
          </button>
        </Link>
      </div>
      <Filtertests />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {tests.map((test) => (
          <Link href="/" key={test.id}>
          <Questionpoolcard
            title={test.title}
            prompt={test.prompt}
            numOfQuestions={test.numOfQuestions}
            numOfTests={test.numOfTests}
          />
          </Link>
        ))}
      </div>
    </>
  );
}
