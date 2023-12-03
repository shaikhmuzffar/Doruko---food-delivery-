import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push(newItem);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name!== action.payload)
        },
        increaseItemQuantity: (state, action) => {
            const itemIdToIncrease = action.payload;
            const existingItem = state.items.find(item => item.name === itemIdToIncrease);

            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseItemQuantity: (state, action) => {
            const itemIdToDecrease = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.name === itemIdToDecrease);

            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex];

                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items.splice(existingItemIndex, 1);
                }
            }

        },
    }
});
export const { addItems, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;