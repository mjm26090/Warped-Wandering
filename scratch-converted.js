// Converted from Scratch 3 target:  
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (question) => new Promise((resolve) => rl.question(String(question) + " ", resolve));
const currentDatePart = (part) => {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return part === "year" ? String(now.getFullYear()) : part === "month" ? pad(now.getMonth() + 1) : part === "date" ? pad(now.getDate()) : part === "dayofweek" ? String(now.getDay() + 1) : part === "hour" ? pad(now.getHours()) : part === "minute" ? pad(now.getMinutes()) : pad(now.getSeconds());
};



// No scripts found.