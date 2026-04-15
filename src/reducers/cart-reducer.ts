import type { Guitar, CartItem } from "../types";
import { db } from "../data/db.ts";

// Tipo de las Acciones
export type CartActions =
  | { type: "add-to-cart"; payload: { item: Guitar } }
  | { type: "remove-from-cart"; payload: { id: Guitar["id"] } }
  | { type: "increase-quantity"; payload: { id: Guitar["id"] } }
  | { type: "decrease-quantity"; payload: { id: Guitar["id"] } }
  | { type: "clear-cart" };

// Tipo del Estado inicial
export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

// Estado inicial
export const initialState: CartState = {
  data: db,
  cart: [],
};

// Reducer
export const cartReducer = (
  state: CartState = initialState,
  action: CartActions,
) => {
  switch (action.type) {
    case "add-to-cart": {
      return {
        ...state,
      };
    }
    case "remove-from-cart": {
      return {
        ...state,
      };
    }
    case "increase-quantity": {
      return {
        ...state,
      };
    }
    case "decrease-quantity": {
      return {
        ...state,
      };
    }
    case "clear-cart": {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
