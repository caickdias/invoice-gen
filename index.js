var pdf = require("pdf-creator-node");
var fs = require("fs");
var path = require("path");
var html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

const { user, companies, invoice, items } = require('./data.js');

//console.log(process.argv.slice(2));
console.log(items)

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
};

var document = {
  html: html,
  data: {
    user,
    company: companies[0],
    invoice,
    items,
  },
  path: "./invoice.pdf",
  type: "", // "stream" || "buffer" || "" ("" defaults to pdf)
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
