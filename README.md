# Project Title

Tutorials Ninja (E-commerce website) Automation Testing Project


## Introduction
This project involves creating an automated testing suite for an e-commerce website, with a particular emphasis on the checkout process and user interactions. By using Cypress for end-to-end testing, we aim to ensure the reliability and functionality of essential user flows.

## Project Type

Frontend Testing Automation

## Directory Structure

CypressProject/
├─ cypress/
│  ├─ Integration/
│  │  └─ TutorialNinja.js
│  ├─ fixtures/
│  │  └─ example.json
│  ├─Support─PageObjects/
│  │  			├─ AddToCart.js
│  │  			├─ Delivery.js
│  │  			├─ Login.js
|  |				├─ Logout.js
|	 |				├─ Payment.js
|	 |				├─ ProductView.js
|	 |				├─ Register.js
│  │  			└─ Search.js
│  └─ support/
|  		├─ commands.js
│     └─ e2e.js
├─ node_modules/
├─ cypress.config.js
├─ package-lock.json
└─ package.json

## Features

Automated search for products
Add to cart functionality testing
Checkout process validation
User account interactions

## Installation & Getting started

npm install cypress --save-dev
npx cypress open

## To run the tests

Open Cypress with npx cypress open
Click on Tutorialninja.js in the Cypress test runner
Watch the automated tests execute in the Cypress browser

## Test Structure
The main test file Tutorialninja.js contains:

Setup using before hook to load configuration
Test suite for "Checkout process"

## Steps include

Visiting the homepage
Searching for a product
Adding to cart
Proceeding to checkout
Continuing the billing process



## Technology Stack

Cypress
JavaScript
Node.js

## Configuration

Tests use a config.json file to store test data like baseUrl and existingProductName.
Page Objects
The project uses the Page Object Model with files like:

Homepage.js
Searchandaddtocart.js
Checkoutprocess.js
Accountpage.js
