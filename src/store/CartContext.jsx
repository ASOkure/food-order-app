import { Children, createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],

  addItem: (item) => {},

  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exisitingCartItemIdex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (exisitingCartItemIdex > -1) {
      const existingItem = state.items[exisitingCartItemIdex];
      const updateItem = {
        ...state.existingItem,

        quantity: existingItem.quantity + 1,
      };
      updatedItems[exisitingCartItemIdex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    //
  }

  return state;
}

export function CartContextProvider({ Children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{Children}</CartContext.Provider>;
}

export default CartContext;
