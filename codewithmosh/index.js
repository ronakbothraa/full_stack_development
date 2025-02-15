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

address1 = new Address('a', 'b', 'c');
address2 = new Address('a', 'b', 'c');

