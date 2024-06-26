import { createSlice } from "@reduxjs/toolkit";

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return null; 
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return null; 
    }
};

const initialShopState = loadState('shops') || "";

const shopSlice = createSlice({
    name: 'shopId',
    initialState: initialShopState,
    reducers: {
        addShopId(state, action) {
            return action.payload;
        },
        deleteShopId(state) {
            return {};
        },
        clearStorage(state) {
            return {};
        }
    }
});

const initialStatusState = loadState('shopStatus') || "";

const shopStatusSlice = createSlice({
    name: 'shopStatus',
    initialState: initialStatusState,
    reducers: {
        addShopStatus(state, action) {
            return action.payload;
        },
        deleteShopStatus(state) {
            return {};
        },
        clearStorageStatus(state) {
            return {};
        }
    }
});

export const { addShopStatus, deleteShopStatus, clearStorageStatus } = shopStatusSlice.actions;
export const { addShopId, deleteShopId, clearStorage } = shopSlice.actions;

export default shopSlice.reducer;
export const shopStatusReducer = shopStatusSlice.reducer;