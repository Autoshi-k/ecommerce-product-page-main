let itemToAdd = 0;
let itemInCart = 0;

const headerCart = document.querySelectorAll('.items-count')[0];
const itemsToAddCart = document.querySelectorAll('.items-count')[1];
// const itemsInCartDisplay = document.querySelector('.items-count')[1];

function countItemDisplay(number) {
  if (number !== 0 && !headerCart.style.display) {
    headerCart.style.display = 'block';
    console.log('im here');
  } else if (number === 0 && headerCart.style.display === 'block') headerCart.style.display = 'block';
}

function addToCart (noOfItems) {
  itemInCart += noOfItems;
  itemToAdd = 0;
  itemsToAddCart.textContent = 0;
  headerCart.textContent = itemInCart;
  console.log('yo');
  countItemDisplay(itemInCart);
}

function counter (num) {
  if (num === 1 || itemToAdd !== 0) {
    itemToAdd += num;
    itemsToAddCart.textContent = itemToAdd;
  }
}






const removeItem = document.querySelectorAll('.act-btn')[0];
const addItem = document.querySelectorAll('.act-btn')[1];

addItem.addEventListener('click', () => counter(1));
removeItem.addEventListener('click', () => counter(-1));

document.querySelector('#add-to-cart').addEventListener('click', () => addToCart(itemToAdd));