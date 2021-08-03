/**
 * 
 * @param {day} d 
 * @param {month} m 
 * @param {year} y 
 * @returns week number since August 3,2020; returns -1 if the input is before 3rd of August 2020
 */
exports.getDaysDiff = (d, m, y) => {
  let returnValue = -1;
  let currentDay = new Date();
  currentDay.setDate(parseInt(d));
  currentDay.setMonth(parseInt(m) - 1); // months start from 0
  currentDay.setYear(parseInt(y));
  let firstDay = new Date("7/26/2021"); // first day in semester 2
  if (currentDay >= firstDay) {
      var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
      returnValue = (Math.floor(diffDays / 7) + 1);
  }
  return (returnValue);
}