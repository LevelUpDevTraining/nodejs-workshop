const data = require("./data");
const fs = require("fs");

function saveFile() {
  fs.writeFileSync("./data2.json", JSON.stringify(data));
}

function readFile() {
  const dataObj = fs.readFileSync("./data2.json");
  const data2 = JSON.parse(dataObj.toString());
  console.log(data2[2]);
}

readFile();
