export function convertDateFormat(mongodbDateFormat) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = mongodbDateFormat.slice(0, 4);
  let month = months[Number(mongodbDateFormat.slice(5, 7)) - 1];
  let date = mongodbDateFormat.slice(8, 10);
  return month + " " + date + ", " + year;
}
