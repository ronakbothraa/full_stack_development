const add = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

function createAddress(street, city, state) {
    return {
        street,
        city,
        state
    }
}

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

const addresses = [
    new Address('a', 'b', 'c'),
    new Address('d', 'e', 'f'),
    new Address('a', 'b', 'c'), // Duplicate address
];

const foundAddress = addresses.find(address => address.street === 'a');

console.log(foundAddress); 

// splice and slice are two different methods
// splice does not return a new array, it modifies the original array
// slide return the items as a new array

const number = [-5,1,2,3]
number.forEach((number) => {
    if (number >= 0) {
        console.log(number);
    }
})
const filtered  = number.filter(n => n >= 0)
console.log(filtered)


