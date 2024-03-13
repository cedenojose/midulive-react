import { CART_ACTION_TYPE } from "../actions/Cart";

export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTION_TYPE.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        // Una forma utilizando structureClone
        // const newState = structuredClone(state);
        // newState[productInCartIndex].quantity += 1;

        // Utilizando map
        const newState = state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        updateLocalStorage(newState);
        return newState;
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPE.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPE.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }
  return state;
};
