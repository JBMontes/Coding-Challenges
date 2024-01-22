// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

function timeCorrect(timestring) {
  if (timestring === null || timestring === "") return timestring;

  if (/\d{2}:\d{2}:\d{2}/.test(timestring) === false) return null;

  let [h, m, s] = timestring.split(":");

  if (s >= 60) {
    let diff = s - 60;
    s = diff;
    m++;
  }
  if (m >= 60) {
    let diff = m - 60;
    m = diff;
    h++;
  }

  while (h >= 24) {
    h -= 24;
  }

  h = h.toString().padStart(2, "0");
  m = m.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");

  return [h, m, s].join(":");
}
