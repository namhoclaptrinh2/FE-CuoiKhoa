import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import axios from "axios";
import { http } from "@/uttil";


const initialState = {
    danhSachNguoiDung : [],
    danhSachNguoiDungTheoPhanTrang : {
        currentPage : 0,
        count: 0,
        totalPages: 0,
        totalCount: 0,
        items: []
    }
}
const nguoiDungReducer = createSlice({
    name: "nguoiDungReducer",
    initialState,
    reducers: {
        setDanhSachNguoiDung : (state,action) => {
            state.danhSachNguoiDung = action.payload
        },
        setDanhSachNguoiDungTheoPhanTrang : (state,action) => {
            state.danhSachNguoiDungTheoPhanTrang = action.payload
        }

    }
});

export default nguoiDungReducer.reducer;
export const {setDanhSachNguoiDung,setDanhSachNguoiDungTheoPhanTrang} = nguoiDungReducer.actions;

// redux thunk
export const getDanhSachNguoiDungThunk = () => {
   
    return async(dispatch) => {
        const res = await axios({
            method: "GET",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
        dispatch(setDanhSachNguoiDung(res.data))
    }
}

export const dangKyNguoiDung = (value) => {
    return async(dispatch) => {
        try{
            const res = await axios({
                method: "POST",
                url : 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
                },
                data: value
            });
            return res
        }catch (res){
            throw res
        }
        
        
        
    }
}
export const dangNhapNguoiDung = (value) => {
    console.log(value)
    return async (dispatch) => {
        try{
            const res = await axios({
                method: "POST",
                url : 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
                },
                data: value
            })
            return res
        }catch(res){
            throw res
        }
    }
}
// Lấy danh Sách người dùng theo phân trang
export const getDanhSachNguoiDungTheoPhanTrangThunk = (maNhom = "GP01",page=1,pageSize = 10) => {
    return async (dispatch) => {
        try{
            const res = await axios ({
                method: "GET",
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${maNhom}&page=${page}&pageSize=${pageSize}`,
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
                },
            })
            dispatch(setDanhSachNguoiDungTheoPhanTrang(res.data))
            return res.data
        }catch(error){
            console.log(error);
            return {
                success: false,
                message: error?.response?.data || 'Có lỗi xảy ra khi xóa người dùng!'
            };
        }
        
        
    }
}

// thêm người dùng 
export const themNguoiDungThunk = (values,token) => {

    return async (dispatch) => {
        try{
            const res = await axios({
                method: "POST",
                url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                data: values,
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI",
                },
            })
            return res;
        }catch(error){
            console.log(error);
            return {
                success: false,
                message: error?.response?.data || 'Có lỗi xảy ra khi xóa người dùng!'
            };
        }
        
    }
}

// xóa người dùng
export const xoaNguoiDung = (taiKhoan,token) => {
    return async (dispatch) => {
        try{
            const res = await axios({
                method: "DELETE",
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI",
                    'Authorization' : `Bearer ${token}`
                },
            })
            return res
        }catch(error){
            return error
        }
    }
}