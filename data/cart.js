export const cart = [{
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity:'2'
},{
    productId:'dd82ca78-a18b-4e2a-9250-31e67412f98d',
    quantity:'1'
}];

export function addToCart(productId){
    let matchingItem;
  
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
  }

  export function removeFormCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
    cart = newCart
  }