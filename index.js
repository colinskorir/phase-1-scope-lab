var customerName = 'bob';

function getCustomerName() {
    return customerName;
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
}
