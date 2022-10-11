console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull(basket)) {
        return false;
    } else {
        basket.push(item);
        console.log(`Basket is ${basket.join(' and ')}`);
        return true;
    }
}

console.log('Adding a shirt (expect true):', addItem('shirt'))
console.log(`Basket is now ${basket}`);

function listItems(array) {
    for (let item of array) {
        console.log(item);
    }
    return true;
}

addItem('pants');
addItem('trunks');
addItem('socks');
addItem('hat');
addItem('glasses');
listItems(basket);

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
    return true;
}

console.log(`emptying basket (expect true):`, empty());
console.log(`test: basket should be empty`, basket);

function isFull(basket) {
    return (basket.length < maxItems) ? false : true;

}
console.log(isFull(basket));

console.log(`test: basket should stop filling past five items`);
addItem('pants');
addItem('trunks');
addItem('socks');
addItem('hat');
addItem('glasses');
addItem('hat');
addItem('glasses');
addItem('socks');

function removeItem(item) {
    if (basket.indexOf(item) < 0) { return null }
    const itemPlace = basket.indexOf(item);
    return basket.splice(itemPlace, 1);
}

console.log(removeItem('shirt'))