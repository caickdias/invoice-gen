const info = require('./utils/gen-data.js');
const { user, companies, invoice, items } = info;

const {   
  listCompanies, 
  createPdfDefault,
  createPdfCompany,
  addCompany,
  deleteCompany,
  throwError,
} = require('./utils/functions.js');

const {
  LIST_COMPANIES,
  ADD_COMPANY,
  CREATE_PDF_DEFAULT,
  CREATE_PDF_COMPANY,
  TOO_MANY_ARGUMENTS,
  DELETE_COMPANY,
} = require('./actions');

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
      throwError('Too many arguments');
      break;
    case DELETE_COMPANY:
      const deleteId = parseInt(arg[1])
      deleteCompany(deleteId);      
      break;
    default:
      throwError('Command not found');
      break;
  }
}

const getCommand = (command) => {
  if(command.length > 1){
    if(command. length == 2 && (command[0] == '-d' || command[0] == '--delete-company')) return DELETE_COMPANY;
    return TOO_MANY_ARGUMENTS;
  } 
  if(/^\d+$/.test(command)) return CREATE_PDF_COMPANY;
  if(command == '') return CREATE_PDF_DEFAULT;
  if(command == '-l' || command == '--list-companies') return LIST_COMPANIES;
  if(command == '-a' || command == '--add-company') return ADD_COMPANY;  
}

handleArgs(process.argv.slice(2));
//createPdf(info);
