var pdf = require("pdf-creator-node");
var fs = require("fs");
var path = require("path");
var html = fs.readFileSync(path.join(__dirname, "../template.html"), "utf8");

const createPdf = ({user, companies, invoice, items}) => {
  
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
    
}

module.exports = {
    createPdf,    
}