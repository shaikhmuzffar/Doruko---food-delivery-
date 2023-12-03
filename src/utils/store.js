import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import notificationsSlice from "../features/notificationsSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        notifications:notificationsSlice,
    }
});
export default store;