import { configureStore } from "@reduxjs/toolkit";
import khoaHocReducer from "@/redux/reducers/khoaHocReducer";
import nguoiDungReducer from "@/redux/reducers/nguoiDungReducer"
import danhMucReducer from "@/redux/reducers/danhMucReducer"
const store = configureStore({
    reducer:{
        khoaHocReducer : khoaHocReducer,
        nguoiDungReducer:nguoiDungReducer,
        danhMucReducer: danhMucReducer
    }
})

export default store;