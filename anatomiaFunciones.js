function calculateDiscountPrice (price, discountPercentage) {
  let discount = (price * discountPercentage) / 100;
  let priceWithDiscount = price - discount;

  return priceWithDiscount;
}

let price = 0;
let discountPercentage = 0;
let priceWithDiscount = 0;

price = prompt(`¿Cual es el precio de su articulo?`);
discountPercentage = prompt(`Indique el descuento en nivel de decenas: `);
if (price > 0) {
  priceWithDiscount = calculateDiscountPrice (price, discountPercentage);
  alert(`El precio de su articulo, con descuento ya restado, seria de: ${priceWithDiscount}`);
} else {
  alert('El precio debe ser mayor a 0');
}