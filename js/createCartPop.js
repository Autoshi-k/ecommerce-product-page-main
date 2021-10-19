
function createEl(type, addClass, text) {
  const newElement = document.createElement(type);
  if (addClass) newElement.classList = addClass;
  if (text) newElement.innerHTML = text;
  return newElement;
}

function createImg(addClass, addSrc, addAlt) {
  const newElement = document.createElement('img');
  newElement.classList = addClass;
  newElement.src = addSrc;
  newElement.alt = addAlt;
  return newElement;
}

function createCart () {
  const divCart = createEl('div', 'dom-cart');
  divCart.append(createEl('h3', undefined, 'Cart'));
  
  const cartContainer = createEl('div', 'dom-cart-container');
  cartContainer.append(createImg('dom-img', 'images/image-product-1-thumbnail.jpg', 'product'));
  
  const domItemInfo = createEl('div', 'dom-items-info');
  domItemInfo.append(createEl('p', undefined, 'Fall Limited Edition Sneakers'));
  domItemInfo.append(createEl('p', undefined, '$125.00 x 3 <span>$375.00</span>'));
  cartContainer.append(domItemInfo);
  
  cartContainer.append(createImg('dom-remove', 'images/icon-delete.svg', 'remove item'));
  
  divCart.append(cartContainer);
  divCart.append(createEl('button', 'dom-checkout', 'Checkout'));
  
  document.querySelector('header').append(divCart);
}

function handleClickCart() {
  const div = document.querySelector('.dom-cart')
  div ? div.remove() : createCart();
}


document.querySelector('#icon-cart').addEventListener('click', handleClickCart);