import cartClicked from "./cart-actions-type";

export const toggleCartHidden = () => ({
  type: cartClicked.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: cartClicked.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: cartClicked.REMOVE_ITEM,
  payload: item
});

export const clearItem = (item) => ({
  type: cartClicked.CLEAR_ITEM,
  payload: item
});
