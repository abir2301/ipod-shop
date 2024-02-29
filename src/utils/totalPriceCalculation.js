export function  cartTotal  (data){
    const cartTotalCal = data.reduce(
        (totalPrice, item) => totalPrice + (item.quantity * (item.price - (item.price * item.discountRate*0.01))),
        0
      );
      return  cartTotalCal.toFixed(2)
}
export function discountPrice (product){
  return (
   ( product.price -
    product.price * product.discountRate * 0.01
  ).toFixed(2))

}