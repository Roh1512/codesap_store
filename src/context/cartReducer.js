// cartReducer.js
export const initialState = { items: [] };

export function cartReducer(state, action) {
  console.log("Dispatch:", action);
  switch (action.type) {
    case "ADD_ITEM": {
      const incoming = action.payload;
      // Check if item already exists
      const exists = state.items.find((item) => item.id === incoming.id);
      if (exists) {
        // Map over items, increment only the matching one
        return {
          items: state.items.map((item) =>
            item.id === incoming.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Add new item with initial quantity = 1
        return {
          items: [...state.items, { ...incoming, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}
