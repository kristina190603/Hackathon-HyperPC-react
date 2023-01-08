export function getCountModelsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.models.length : 0;
}

export const calcSubPrice = (model) => +model.count * model.item.price;

export const calcTotalPrice = (models) => {
  return models.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
