import React, { useEffect, useState } from "react";
import { convertDateFormat } from "../Helper";
import Deleteicon from "./Deleteicon";
import LinkIcon from "./LinkIcon";
export default function Respondentcard({
  date,
  title,
  description,
  attempters,
}) {
  function convertEmails(respondentsList) {
    let emails = [];
    respondentsList.map((respondent) => {
      emails.push(respondent.email);
    });
    let emailsString = "",
      maxLength = 45,
      index = 0;
    while (index < emails.length) {
      emailsString += '"' + emails[index] + '", ';
      if (emailsString.length > maxLength) {
        emailsString = emailsString.slice(0, maxLength);
        break;
      }
      index++;
    }
    emailsString += "...";
    return emailsString;
  }
  return (
    <>
      <div className="bg-swhite hover:shadow-lg px-5 py-5 rounded-lg">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-md text-sgray-300 font-medium">
              Created: {date ? convertDateFormat(date) : <></>}
            </span>
            <button>
              {/* <Deleteicon size={25} hover={true} /> */}
              <LinkIcon/>
            </button>
          </div>
          <span className="text-xl font-bold text-spurple-300">{title}</span>
          <span className="text-lg text-sgray-300 font-normal">
            {description ? description : `(no description)`}
          </span>
          <div>
            <span className="text-sgray-300">Respondents: </span>
            <span className="text-spurple-300">
              {convertEmails(attempters)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
