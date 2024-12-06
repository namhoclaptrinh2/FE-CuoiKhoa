"use client";
import React, { useEffect, useState } from 'react'
// ICON
import AddIcon from '@mui/icons-material/Add';
import TableComponent from '@/components/TableComponent';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { getDanhSachKhoaHocThunk, themKhoaHoc } from '@/redux/reducers/khoaHocReducer';
// material
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { getDanhMucThunk } from '@/redux/reducers/danhMucReducer';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { formatDate, getCookie } from '@/uttil';
function page() {
  const danhSachKhoaHoc = useSelector(state => state.khoaHocReducer.danhSachKhoaHoc);
  const danhMuc = useSelector(state => state.danhMucReducer.danhMucKhoaHoc);
  const dispatch = useDispatch();
  // redux
  const getDanhSachKhoaHoc = () => {
      dispatch(getDanhSachKhoaHocThunk())
  }
  const getDanhMucKhoaHoc = () => {
    dispatch(getDanhMucThunk());
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //  validate tion
  const addFormKhoaHocChema = Yup.object().shape({
    tenKhoaHoc : Yup.string().required("Tên khóa học không được bỏ trống !"),
    moTa : Yup.string().required("Mô tả hông được bỏ trống"),
    hinhAnh : Yup.string().required("Hình ảnh hông được bỏ trống"),
    maNhom : Yup.string().required("Mã nhóm hông được bỏ trống"),
   

  })
  // const data = {
  //   "biDanh": "JavaScript",
  //   "danhGia": 0,
  //   "hinhAnh": "https://i.pinimg.com/736x/3c/fb/76/3cfb769f842fb198f4e04e2a3d10be30.jpg",
  //   "luotXem" : 0,
  //   "maDanhMucKhoaHoc": "BackEnd",
  //   "maKhoaHoc": 89430,
  //   "maNhom": "GP01",
  //   "moTa": "adasdasdads",
  //   "ngayTao": "04/12/2024",
  //   "taiKhoanNguoiTao": "Nguyễn Duy",
  //   "tenKhoaHoc": "JavaScript"
  // }
  const addKhoaHocFormik = useFormik({
    initialValues : {
      tenKhoaHoc: "",
      moTa: "",
      hinhAnh: "",
      maNhom: "",
      maDanhMucKhoaHoc: 'BackEnd',
    },
    onSubmit: async (values) => {
      const maKhoaHoc =  Math.floor(10000 + Math.random() * 90000);
      
      const ngayTao = formatDate();
      values.maKhoaHoc = maKhoaHoc;
      values.biDanh = values.tenKhoaHoc;
      values.luotXem = 0;
      values.danhGia = 0;
      values.ngayTao = ngayTao;
      values.taiKhoanNguoiTao = getCookie("hoTen");
      const token = getCookie("token");
      try{
        const res = await dispatch(themKhoaHoc(values,token));
        if(res === 200){
          handleClose()
          alert("Thêm thành công!")
          window.location.reload();
          
        }
        
      }catch(error){
        alert(error.response.data)
        
    }
    },
    validationSchema: addFormKhoaHocChema
    
  })
  
  useEffect(() => {
    getDanhSachKhoaHoc();
    getDanhMucKhoaHoc();
  },[])
  return (
    <div className='quanly_khoahoc p-4 '>
        <div className='header flex justify-between'>
            <h1 className='text-2xl font-semibold'>Quản lý khóa học</h1>
            <button className='w-max bg-[#4f46e5] text-white text-base p-1 rounded-md font-semibold flex items-center justify-center' onClick={() => handleClickOpen()}>
              <AddIcon/>
              Thêm Khóa Học
            </button>
        </div>
        <TableComponent danhSachKhoaHoc={danhSachKhoaHoc}/>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Thêm Khóa Học
        </DialogTitle>
        <DialogContent>
          <form action="" className='flex flex-col gap-2' onSubmit={addKhoaHocFormik.handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Tên Khóa Học</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name="tenKhoaHoc" value={addKhoaHocFormik.values.tenKhoaHoc} onChange={addKhoaHocFormik.handleChange}/>
              {addKhoaHocFormik.errors.tenKhoaHoc && <span className='error_text text-red-500'>{addKhoaHocFormik.errors.tenKhoaHoc}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Nhập mô tả khóa học</label>
              <textarea type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='moTa' value={addKhoaHocFormik.values.moTa} onChange={addKhoaHocFormik.handleChange}/>
              {addKhoaHocFormik.errors.moTa && <span className='error_text text-red-500'>{addKhoaHocFormik.errors.moTa}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Hình Ảnh</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='hinhAnh' value={addKhoaHocFormik.values.hinhAnh}  onChange={addKhoaHocFormik.handleChange}/>
              {addKhoaHocFormik.errors.hinhAnh && <span className='error_text text-red-500'>{addKhoaHocFormik.errors.hinhAnh}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Mã nhóm</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='maNhom' value={addKhoaHocFormik.values.maNhom} onChange={addKhoaHocFormik.handleChange}/>
              {addKhoaHocFormik.errors.maNhom && <span className='error_text text-red-500'>{addKhoaHocFormik.errors.maNhom}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Danh mục khóa học</label>
              <select name="maDanhMucKhoaHoc" id="" value={addKhoaHocFormik.values.maDanhMucKhoaHoc} onChange={addKhoaHocFormik.handleChange} >
                {
                  danhMuc.map((item,index) => <option value={item.maDanhMuc} key={index}>{item.tenDanhMuc}</option>)
                }
              </select>
            </div>
            <div className='flex justify-end my-3'>
            <button type='submit' className='w-max p-2 bg-primary_tailwind text-white rounded'>Thêm</button>
            </div>
          </form>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}

export default page