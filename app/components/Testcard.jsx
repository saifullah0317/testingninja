import React from "react";
import { convertDateFormat } from "../Helper";
export default function Testcard({
  status,
  date,
  title,
  description,
  avgScore,
  results,
  category,
}) {
  return (
    <>
      <div className="bg-swhite hover:shadow-lg px-5 py-5 rounded-lg">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-start space-x-5">
            <div
              className={
                "flex flex-row items-center rounded-lg px-2 py-1 w-fit border " +
                (status ? "border-spurple-300" : "border-sgray-300")
              }
            >
              <div
                className={
                  "h-2 w-2 rounded-full " +
                  (status ? "bg-sgreen" : "bg-sgray-300")
                }
              />
              <span
                className={
                  "ml-2 text-md " +
                  (status ? "text-spurple-300" : "text-sgray-300") +
                  " font-medium"
                }
              >
                {status ? "Active" : "Inactive"}
              </span>
            </div>
            <span className="text-md text-sgray-300 font-medium">
              Created: {convertDateFormat(date)}
            </span>
          </div>
          <span className="text-xl font-bold text-spurple-300">{title}</span>
          <span className="text-lg text-sgray-300 font-normal">
            {description ? description : `(no description)`}
          </span>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center lg:space-y-0 md:space-y-0 space-y-2">
            <div className="flex items-center text-md">
              <svg
                stroke="#808E9D"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4515 14.1617C18.1475 14.1617 18.7317 14.7361 18.6253 15.4235C18.0009 19.4675 14.539 22.47 10.3637 22.47C5.74423 22.47 2 18.7258 2 14.1074C2 10.3024 4.8907 6.75795 8.14518 5.95654C8.84451 5.78388 9.56121 6.2758 9.56121 6.99576C9.56121 11.8737 9.72518 13.1355 10.6515 13.8218C11.5777 14.5081 12.6669 14.1617 17.4515 14.1617Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.0064 10.0998C22.0617 6.9659 18.2122 1.91423 13.521 2.00111C13.1562 2.00762 12.8641 2.31168 12.8478 2.67546C12.7294 5.25233 12.889 8.59151 12.9781 10.1053C13.0052 10.5766 13.3755 10.9469 13.8457 10.974C15.4018 11.063 18.8626 11.1847 21.4026 10.8003C21.7479 10.7481 22.0009 10.4484 22.0064 10.0998Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="ml-2 mr-2 text-spurple-300 font-bold">
                {avgScore + `%`}
              </span>
              <span className="text-sgray-300 mr-2">avg. score |</span>
              <span className="text-sgray-300">
                Results{` (` + results + `)`}
              </span>
            </div>
            <div className="text-sgray-300 border border-sgray-300 p-2 rounded-lg w-fit">
              {category}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
