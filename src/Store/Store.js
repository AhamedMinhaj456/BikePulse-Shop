import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice';
import shopReducer, { shopStatusReducer } from '../Slices/ShopSlice'; 

const saveState = (state) => {
    try {
        const serializedCustomersState = JSON.stringify(state.customers.customerId);
        localStorage.setItem('customers', serializedCustomersState);

        const serializedShopsState = JSON.stringify(state.shops.shopId);
        localStorage.setItem('shops', serializedShopsState);

        const serializedShopsStatusState = JSON.stringify(state.shopStatus);
        localStorage.setItem('shopStatus', serializedShopsStatusState);
    } catch {
        // Ignore write errors
    }
};

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    saveState(store.getState());
    return result;
};

const clearLocalStorageMiddleware = store => next => action => {
    if (action.type === 'customerId/clearStorage' || action.type === 'shopId/clearStorage' || action.type === 'shopStatus/clearStorage') {
        localStorage.removeItem('customers');
        localStorage.removeItem('shops');
        localStorage.removeItem('shopStatus');
    }
    return next(action);
};

const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        shops: shopReducer, 
        shopStatus: shopStatusReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware, clearLocalStorageMiddleware)
});

export default store;