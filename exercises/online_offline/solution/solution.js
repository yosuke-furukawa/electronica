const parentFile = process.env.parent_filename;
const fs = require('fs');
const file = fs.readFileSync(parentFile).toString();
const keywords = ['button', 'html', 'body', 'script'];

const result = keywords.filter((keyword) => file.indexOf(keyword) !== -1);

if (result.length === keywords.length) {
  console.log("Congrats!!!");
} else {
  console.error("Your file does not have keywords");
}
