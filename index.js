const info = require('./utils/gen-data.js');
const { user, companies, invoice, items } = info;

const {   
  listCompanies, 
  createPdfDefault,
  createPdfCompany,
  addCompany,
  showError,
} = require('./utils/functions.js');

const LIST_COMPANIES = 'showCompanies';
const ADD_COMPANY = 'addCompany';
const CREATE_PDF_DEFAULT = 'createPdfDefault';
const CREATE_PDF_COMPANY = 'createPdfCompany';
const TOO_MANY_ARGUMENTS = 'tooManyArguments';
const DELETE_COMPANY = 'deleteCompany';

const handleArgs = (arg) => {
  const command = getCommand(arg);
 
  
  switch(command){
    case LIST_COMPANIES:
      listCompanies();
      break;
    case ADD_COMPANY:
      addCompany();
      break;
    case CREATE_PDF_DEFAULT:      
      createPdfDefault();
      break;
    case CREATE_PDF_COMPANY:
      const companyId = parseInt(arg.join());      
      createPdfCompany(companyId);
      break;      
    case TOO_MANY_ARGUMENTS:
      showError('Too many arguments');
      break;
    case DELETE_COMPANY:
      showError('delete');
      break;
    default:
      console.log('Command not found');
      break;
  }

}

const getCommand = (command) => {
  if(command.length > 1) return TOO_MANY_ARGUMENTS;
  if(/^\d+$/.test(command)) return CREATE_PDF_COMPANY;
  if(command == '') return CREATE_PDF_DEFAULT;
  if(command == '-l' || command == '--list-companies') return LIST_COMPANIES;
  if(command == '-a' || command == '--add-company') return ADD_COMPANY;
  if(command == '-d' || command == '--delete-company') return DELETE_COMPANY;
}

handleArgs(process.argv.slice(2));
//createPdf(info);
