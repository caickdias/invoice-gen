const TAX = 0.1;

const user = {
    name: "CAICK ANDRADE",
    addressLine1: "Montes Escuros, Rj. Brazil 39421-111",
    addressLine2: "Rua Um dois três, 877. São Sebastião",
    phone: "+55 (58) 9-9222-4415"
    }

const company = {
    name: "COMPANY NAME INC.",
    addressLine1: "1704 Ironwood Dr #22",
    addressLine2: "Fairborn, Ohio(OH), 45324",
}

const items = [
    {
        description: "Working Project, working details",
        rate: 10,
        unity: 100,        
        amount: function() {
            return this.unity * this.rate;
        },
    },
    {
        description: "asdads",
        rate: 110,
        unity: 130,        
        amount: function() {
            return this.unity * this.rate;
        },
    },
    {
        description: "OPAAA",
        rate: 220,
        unity: 40,        
        amount: function() {
            return this.unity * this.rate;
        },
    }
]

const subtotal = items.reduce((total, item) => total + item.amount(), 0);  
const tax = subtotal * TAX;
const total = subtotal + tax;

const invoice = {
    date: "Aug 23, 2022",
    number: "ADO1098S0ADKL",
    customerId: 5,
    subtotal,
    tax,
    total,
}
module.exports = {
    user,
    company,
    invoice,
    items
}