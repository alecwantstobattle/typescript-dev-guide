const drink = {
    color: 'brown',
    carbonatd: true,
    sugar:40
}

// const pepsi = ['brown', true, 40]; 
// pepsi[0] = 40;
// pepsi[2] = 'brown';

type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 40];