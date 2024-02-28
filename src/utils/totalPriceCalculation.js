export function  cartTotal  (data){
    const cartTotalCal = data.reduce(
        (totalPrice, item) => totalPrice + (item.quantity * (item.price - (item.price * item.discountRate*0.01))),
        0
      );
      return  cartTotalCal.toFixed(2)
}