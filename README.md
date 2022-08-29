# Invoice generator

Generate basic PDF invoices with Node.

This was built using [hajareshyam](https://github.com/hajareshyam) awesome [PDF creator node](https://github.com/hajareshyam/pdf-creator-node).

# Getting started

## Dependencies

```
Node 14.17.0
```

## Installing

Once you have everything installed and running, let's clone this repository and open its folder. No change to any files should be required.

```
git clone https://github.com/caickdias/invoice-generator.git
cd invoice-generator
```
Then run npm install to install dependencies

```
npm install
```

<<<<<<< HEAD
## Executing program
=======
## Usage

Go to "config.yml" file and edit your information. After that, navigate to your current folder and do command below to generate "invoice.pdf" in the same folder.

```
npm start
```

<<<<<<< HEAD
=======
## Arguments

```
(no arguments) - create pdf for the first company in config.yml
(-l || --list-companies) - list all companies
(-a || --add-company) - add a new company via CLI
(-d [COMPANYID] || --delete-company [COMPANYID]) - delete company with given id
(companyId),eg: node index 3 - create pdf for the given company id
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
