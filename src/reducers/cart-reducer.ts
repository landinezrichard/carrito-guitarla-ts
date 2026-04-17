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

const MAX_QUANTITY = 5;
const MIN_QUANTITY = 1;

// Reducer
export const cartReducer = (
  state: CartState = initialState,
  action: CartActions,
) => {
  switch (action.type) {
    case "add-to-cart": {
      const itemExist = state.cart.find(
        (itemInCart) => itemInCart.id === action.payload.item.id,
      );
      let updatedCart: CartItem[] = [];
      // Si el item ya existe en el carrito, actualizamos la cantidad
      if (itemExist) {
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            // Verificar si ya alcanzó el límite
            if (item.quantity < MAX_QUANTITY) {
              // Incrementar cantidad
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });
      } else {
        const newItem: CartItem = { ...action.payload.item, quantity: 1 };
        updatedCart = [...state.cart, newItem];
      }
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "remove-from-cart": {
      const cart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart,
      };
    }
    case "increase-quantity": {
      const cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_QUANTITY) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
      return {
        ...state,
        cart
      };
    }
    case "decrease-quantity": {
      const cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_QUANTITY) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
      return {
        ...state,
        cart
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
