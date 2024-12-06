import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    danhMucKhoaHoc: []
}

const danhMucReducer = createSlice({
    name: 'khoaHocReducer',
    initialState,
    reducers:{
        setDanhMucKhoaHoc : (state,action) => {
            state.danhMucKhoaHoc = action.payload
        }
    }
})
export const {setDanhMucKhoaHoc} = danhMucReducer.actions;
export default danhMucReducer.reducer;
export const  getDanhMucThunk = () => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        });
        dispatch(setDanhMucKhoaHoc(res.data))
    }
}