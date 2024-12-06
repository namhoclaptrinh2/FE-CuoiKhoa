import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    danhSachKhoaHoc : [],
    chiTietKhoaHoc : {},
    khoaHocTheoDanhMuc: [],
    khoaHocTheoPhanTrang: {}
}

const khoaHocReducer = createSlice({
    name: "khoaHocReducer",
    initialState,
    reducers:{
        setDanhSachKhoaHoc: (state,action) => {
            state.danhSachKhoaHoc = action.payload
        },
        setChiTietKhoaHoc : (state,action) => {
            state.chiTietKhoaHoc = action.payload
        },
        setKhoaHocTheoDanhMuc : (state,action) =>{
            state.khoaHocTheoDanhMuc = action.payload
        },
        setKhoaHocTheoPhanTrang : (state,action) => {
            state.khoaHocTheoPhanTrang = action.payload
        }
    }
})

export const {setDanhSachKhoaHoc,setChiTietKhoaHoc,setKhoaHocTheoDanhMuc,setKhoaHocTheoPhanTrang} = khoaHocReducer.actions;
export default khoaHocReducer.reducer


///-----------action thunk --------------

// lấy danh sách khóa học bằng API 
export const getDanhSachKhoaHocThunk = () => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
        dispatch(setDanhSachKhoaHoc(res.data))
    }
}
export const getChiTietKhoaHocThunk = (id) => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
       const data = res.data.find(item => item.maKhoaHoc === id)
       dispatch(setChiTietKhoaHoc(data))
       return data
       
    }
}

export const getKhoaHocTheoDanhMucThunk = (danhmuc) => {
    console.log("danhmuc",danhmuc)
    return async (dipatch) => {
        const res = await axios({
            method: "GET",
            url : `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${danhmuc}&MaNhom=GP01`,
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        });
        dipatch(setKhoaHocTheoDanhMuc(res.data))
    }
}

export const getDanhSachKhoaHocPhanTrang = (currentPage,pageSize) => {
    console.log("🚀 ~ pageSize:", pageSize)
    console.log("🚀 ~ currentPage:", currentPage)
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url : `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`,
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        });
        dispatch(setKhoaHocTheoPhanTrang(res.data))
    }
    
}

export const themKhoaHoc = (values,token) => {
    return async (dispatch) => {
        console.log(values)
        console.log(token)

        const res = await axios({
            method : "POST",
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI",
                'Authorization' : `Bearer ${token}`
            },
            data: values
        })
        return res.status 
    }
}

export const capNhapKhoaHocThunk = (values) => {
    return async (dispatch) => {
        const res = await axios({
            method: "PUT",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc',
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI",
                
            },
            data: values
        })
        return res.status 
    }
}
export const xoaKhoaHocThunk = (maKhoaHoc,token) => {
    return async (dispatch) => {
        const res = await axios({
            method: "DELETE",
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}
`,
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI",
                'Authorization' : `Bearer ${token}`
            },
        })
         return res
        
    }
}