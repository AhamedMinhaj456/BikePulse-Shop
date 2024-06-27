import { createSlice } from "@reduxjs/toolkit";

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return null;
    }
};

// Initial state loader functions
const initialShopIdState = loadState('shopId') || "";
const initialShopStatusState = loadState('shopStatus') || ""; 

const shopIdSlice = createSlice({
    name: 'shopId',
    initialState: initialShopIdState,
    reducers: {
        addShopId(state, action) {
            return action.payload;
        },
        clearShopId(state) {
            return "";
        }
    }
});

const shopStatusSlice = createSlice({
    name: 'shopStatus',
    initialState: initialShopStatusState,
    reducers: {
        addShopStatus(state, action) {
            return action.payload;
        },
        clearShopStatus(state) {
            return "";
        }
    }
});

export const { addShopId, clearShopId } = shopIdSlice.actions;
export const { addShopStatus, clearShopStatus } = shopStatusSlice.actions;

export const shopIdReducer = shopIdSlice.reducer;
export const shopStatusReducer = shopStatusSlice.reducer;
