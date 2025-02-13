import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],

  addItem: (item) => {},

  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (exisitingCartItemIndex > -1) {
      const existingItem = state.items[exisitingCartItemIndex];
      const updatedItem = {
        // ...state.existingItem,
        ...state.existingItem,

        quantity: existingItem.quantity + 1,
      };
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[exisitingCartItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(exisitingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[exisitingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  /* const CartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
*/
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  return (
    <CartContext.Provider value={{ items: cart.items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
