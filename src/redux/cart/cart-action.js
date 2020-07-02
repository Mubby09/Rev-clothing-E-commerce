import cartClicked from "./cart-actions-type";

export const toggleCartHidden = () => ({
  type: cartClicked.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: cartClicked.ADD_ITEM,
  payload: item
});
