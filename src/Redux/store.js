import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './slice'
import SingleReducer from "./slice"
import categoryReducer from "./slice"

const store= configureStore({
    reducer:{Search:SearchReducer,
        Single:SingleReducer,
        cata:categoryReducer
    }
})



export default store