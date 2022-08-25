var pdf = require("pdf-creator-node");
var fs = require("fs");
var path = require("path");
var html = fs.readFileSync(path.join(__dirname, "../template.html"), "utf8");

var prompt = require('prompt-sync')();

const createPdf = ({user, company, invoice, items}) => {
  
    var options = {
      format: "A4",
      orientation: "portrait",
      border: "10mm",
    };
    
    var document = {
      html: html,
      data: {
        user,
        company: company,
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

const listCompanies = (companies) => {
  companies.forEach(company => {
    console.log('ID:', company.id);
    console.log('Name:', company.name);
    console.log('Address Line 1:', company.addressLine1);
    console.log('Address LIne 2:', company.addressLine2);
    console.log('-'.repeat(50));
  })
}

const addCompany = () => {    
    const name = prompt('Company name: ');
    const addressLine1 = prompt('Company address line 1: ');
    const addressLine2 = prompt('Company address line 2: ');
    console.log('Company added');
}

module.exports = {
    createPdf,    
    listCompanies,
    addCompany,
}