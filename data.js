var yaml_config = require('node-yaml-config');
var config = yaml_config.load(__dirname + '/config.yml');

const user = {
    name: config.user.name,
    addressLine1: config.user.addressLine1,
    addressLine2: config.user.addressLine2,
    phone: config.user.phone
}

const companies = config.companies;

const items = config.items.map(item => (
    {
        description: item.description,
        rate: item.rate,
        unity: item.unity,        
        amount: item.rate * item.unity,
    }));

const subtotal = items.reduce((total, item) => total + item.amount, 0);  
const tax = (subtotal * (config.invoice.tax/100)).toFixed(2);
const total = subtotal + parseFloat(tax);

const invoice = {
    date: "Aug 23, 2022",
    number: "ADO1098S0ADKL",    
    subtotal,
    tax,
    total,
}

module.exports = {
    user,
    companies,
    invoice,
    items
}