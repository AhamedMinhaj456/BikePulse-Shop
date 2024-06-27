import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice';
import { shopIdReducer, shopStatusReducer } from '../Slices/ShopSlice'; // Adjusted imports for individual reducers

const saveState = (state) => {
    try {
        const serializedCustomersState = JSON.stringify(state.customers.customerId);
        localStorage.setItem('customers', serializedCustomersState);

        const serializedShopIdState = JSON.stringify(state.shopId);
        localStorage.setItem('shopId', serializedShopIdState);

        const serializedShopStatusState = JSON.stringify(state.shopStatus);
        localStorage.setItem('shopStatus', serializedShopStatusState);
    } catch (err) {
        console.error("Error saving state to local storage:", err);
    }
};

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    saveState(store.getState());
    return result;
};

const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        shopId: shopIdReducer, // Changed to use shopIdReducer directly
        shopStatus: shopStatusReducer, // Changed to use shopStatusReducer directly
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
