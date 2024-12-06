import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { getChiTietKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';

function ButtonEdit(props) {
    const {maKhoaHoc} = props;
    const [idKhoaHoc,setIdKhoaHoc] = useState("");
    console.log("🚀 ~ idKhoaHoc:", idKhoaHoc)
    
    const [open, setOpen] = useState(false);
    const danhMuc = useSelector(state => state.danhMucReducer.danhMucKhoaHoc);
    const chiTietKhoaHoc = useSelector(state => state.khoaHocReducer.chiTietKhoaHoc);
    console.log("🚀 ~ chiTietKhoaHoc:", chiTietKhoaHoc)
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
        setIdKhoaHoc(maKhoaHoc)
        getKhoaHoc(idKhoaHoc)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addFormKhoaHocChema = Yup.object().shape({
        tenKhoaHoc : Yup.string().required("Tên khóa học không được bỏ trống !"),
        moTa : Yup.string().required("Mô tả hông được bỏ trống"),
        hinhAnh : Yup.string().required("Hình ảnh hông được bỏ trống"),
        maNhom : Yup.string().required("Mã nhóm hông được bỏ trống"),
       
    
      })
    const addKhoaHocFormik = useFormik({
        initialValues : chiTietKhoaHoc,
        
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
              
            }
            
          }catch(error){
            alert(error.response.data)
            
        }
        },
        validationSchema: addFormKhoaHocChema,
        
        
      })
    const getKhoaHoc = (idKhoaHoc) => {
        dispatch(getChiTietKhoaHocThunk(idKhoaHoc))
    }
    
  return (
    <div className=''>
        <button onClick={handleClickOpen}><EditIcon className='text-orange-400'/></button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            Cập nhật khóa học 
            </DialogTitle>
            <DialogContent>
            <form action="" className='flex flex-col gap-2' onSubmit={addKhoaHocFormik.handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Tên Khóa Học</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name="tenKhoaHoc" value={addKhoaHocFormik.values.tenKhoaHoc} onChange={addKhoaHocFormik.handleChange} defaultValue={addKhoaHocFormik.values.tenKhoaHoc}/>
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

export default ButtonEdit