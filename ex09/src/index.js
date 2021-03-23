
const product = function product(...args) {

    return args.reduce((a, b) => a * b, 1);
};

console.log(product(1, 2)); // Change this line
console.log(product(4, 3, 10, 2)); // Change this line
console.log(product(7)); // Change this line
console.log(product()); // Change this line
module.exports = product;


