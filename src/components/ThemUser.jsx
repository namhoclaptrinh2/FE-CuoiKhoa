import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { themNguoiDungThunk } from '@/redux/reducers/nguoiDungReducer';
import { getCookie } from '@/uttil';

function ThemUser() {
    const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const token = getCookie("token")
  const addUserValidate = Yup.object().shape({
    taiKhoan : Yup.string().required("Tài khoản không được bỏ trống !"),
    matKhau : Yup.string().required("Mật khẩu không được bỏ trống"),
    hoTen : Yup.string().required("Họ tên không được bỏ trống"),
    soDT: Yup.string()
    .required("Số điện thoại không được bỏ trống")
    .matches(/^[0-9]{10}$/, "Số điện thoại phải bao gồm 10 chữ số")
    .test("is-valid-phone", "Số điện thoại phải là số", (value) => /^[0-9]+$/.test(value)),
   email: Yup.string().required("Email không được bỏ trống !")

  })
  const addUserFormik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "GV",
      email: "",
    },
    onSubmit :async (values) => {
        values.maNhom = "GP01";
        const res = await dispatch(themNguoiDungThunk(values,token))
        if(res.status === 200){
          alert("Thêm Thành công");
          window.location.reload();
        }
    } , 
    validationSchema: addUserValidate

  })
    const handleClickOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
        <button className='w-max bg-[#4f46e5] text-white text-base p-1 rounded-md font-semibold flex items-center justify-center' onClick={() => handleClickOpen()}>
            <AddIcon/>
            Thêm Khóa Học
        </button>
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
          <form action="" className='flex flex-col gap-2' onSubmit={addUserFormik.handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Tài khoản</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên tài khoản' name="taiKhoan" value={addUserFormik.values.taiKhoan} onChange={addUserFormik.handleChange}/>
              {addUserFormik.errors.taiKhoan && <span className='error_text text-red-500'>{addUserFormik.errors.taiKhoan}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'> Mật khẩu</label>
              <input type="password" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập mật khẩu' name="matKhau" value={addUserFormik.values.matKhau} onChange={addUserFormik.handleChange}/>
              {addUserFormik.errors.matKhau && <span className='error_text text-red-500'>{addUserFormik.errors.matKhau}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'> Họ tên</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập họ tên' name="hoTen" value={addUserFormik.values.hoTen} onChange={addUserFormik.handleChange}/>
              {addUserFormik.errors.hoTen && <span className='error_text text-red-500'>{addUserFormik.errors.hoTen}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'> Số điện thoại</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập số điện thoại' name="soDT" value={addUserFormik.values.soDT} onChange={addUserFormik.handleChange}/>
              {addUserFormik.errors.soDT && <span className='error_text text-red-500'>{addUserFormik.errors.soDT}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Loại người dùng</label>
              <select name="maLoaiNguoiDung" id="" value={addUserFormik.values.maLoaiNguoiDung} onChange={addUserFormik.handleChange} >
                <option value="GV" >Giáo viên</option>
                <option value="HV" >Học viên</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'> Email</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập Email' name="email" value={addUserFormik.values.email} onChange={addUserFormik.handleChange}/>
              {addUserFormik.errors.email && <span className='error_text text-red-500'>{addUserFormik.errors.email}</span>}
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

export default ThemUser