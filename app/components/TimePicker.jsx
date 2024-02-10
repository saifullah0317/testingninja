import React from "react";
import { useState } from "react";
export default function TimePicker({setTime}) {
  const [selectedHour, setSelectedHour] = useState();
  const [selectedMinute, setSelectedMinute] = useState();
  function calculateUnixEpochTime() {
    return selectedHour * 3600 + selectedMinute * 60;
  }
  return (
    <div className="flex flex-row items-center justify-start space-x-2">
      <input
        type="number"
        min={0}
        max={23}
        value={selectedHour}
        onChange={(e) => {
          setSelectedHour(e.target.value);
          setTime(calculateUnixEpochTime());
        }}
        placeholder="hours"
        className="w-28 rounded-lg border border-swhite text-spurple-300"
      />
      <span>:</span>
      <input
        type="number"
        min={0}
        max={59}
        value={selectedMinute}
        onChange={(e) => {
          setSelectedMinute(e.target.value);
          setTime(calculateUnixEpochTime());
        }}
        placeholder="minutes"
        className="w-28 rounded-lg border border-swhite text-spurple-300"
      />
    </div>
  );
}
