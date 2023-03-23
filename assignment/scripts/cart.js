console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
 basket = []
 function addItem(item) {
    basket.push(item)
    return true;
 }
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


 function listItems(basket) {
    for (let i=0; i < basket.length; i++) {
        console.log(basket[i])
    }
    
 }
 listItems(basket);

 function empty(basket) {
    while (basket.length > 0) {
        basket.pop();
    }
 }
 empty(basket);
 console.log('Check the contents of the basket after the empty function');
 listItems(basket);
