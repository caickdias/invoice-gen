const info = require('./utils/gen-data.js');
const { user, companies, invoice, items } = info;

const { createPdf, addCompany } = require('./utils/functions.js');

const SHOW_COMPANIES = 'showCompanies';
const ADD_COMPANY = 'addCompany';

const handleArgs = (arg) => {
  const command = getCommand(arg.join());
  
  switch(command){
    case SHOW_COMPANIES:
      console.log(companies);
      break;
    case ADD_COMPANY:
      addCompany();
      break;
  }

}

const getCommand = (command) => {
  if(command == '-c' || command == '--companies') return SHOW_COMPANIES;
  if(command == '-a' || command == '--add-company') return ADD_COMPANY;
}

handleArgs(process.argv.slice(2));
//createPdf(info);
