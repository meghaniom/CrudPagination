import { configureStore } from "@reduxjs/toolkit";

import  userSlice from "./UserReducer";
const store = configureStore({
    reducer: {

        users: userSlice
    }
})
 export  default store;