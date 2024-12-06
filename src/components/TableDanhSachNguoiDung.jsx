import { Dialog, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { getDanhSachNguoiDungTheoPhanTrangThunk } from '@/redux/reducers/nguoiDungReducer';
import XoaComponent from '@/components/XoaComponent';
import XoaUser from './XoaUser';
function TableDanhSachNguoiDung(props) {
    const [currentPage,setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const danhSachNguoiDung = useSelector(state => state.nguoiDungReducer.danhSachNguoiDungTheoPhanTrang)
    const handleClose = () => {
        setOpen(false);
    };
    const getDanhSachNguoiDung = (maNhom,currentPage,sizePage) => {
        dispatch(getDanhSachNguoiDungTheoPhanTrangThunk("GP01",currentPage,sizePage))
    }

    //
    const isCheckCurrentPage = (type,value) => {
        switch(type){
          case "number" :
            setCurrentPage(value)
            break;
          case "truoc": 
            if(currentPage <= danhSachNguoiDung.totalPages && currentPage > 1){
              setCurrentPage(state => state - 1 )
            }
            break;
          case "sau": 
            if(currentPage < danhSachNguoiDung.totalPages ){
              setCurrentPage(state => state + 1)
            }
            break;
        }
    
      }

    useEffect(() => {
        getDanhSachNguoiDung("GP01",currentPage,50)
    },[currentPage])
  return (
    <div className='my-4'>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          <TableCell align='center'>Tài Khoản</TableCell>
          <TableCell align='center'>Họ Tên</TableCell>
          <TableCell align='center'>Số Điện Thoại </TableCell>
          <TableCell align='center'>Mã Nhóm</TableCell>
          <TableCell align='center'>Email</TableCell>
          <TableCell align='center'>Tên Loại Người Dùng</TableCell>
          <TableCell align='center'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {danhSachNguoiDung && danhSachNguoiDung.items.map((row,index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align='center' >{row.taiKhoan} </TableCell>
            <TableCell align='center' >{row.hoTen}</TableCell>
            <TableCell align='center' >{row.soDT}</TableCell>
            <TableCell  align='center'>{row.maNhom}</TableCell>
            <TableCell  align='center'>{row.email}</TableCell>
            <TableCell  align='center'>{row.tenLoaiNguoiDung}</TableCell>
            <TableCell align='center' className='  ' >
              {/* <XemChiTietComponent maKhoaHoc={row.maKhoaHoc}/>
              <button className='edit' onClick={() => handleEdit(row.maKhoaHoc)}><EditIcon className='text-orange-400'/></button> */}
              <XoaUser taiKhoan={row.taiKhoan}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <div className='pagination flex justify-center gap-2 mt-4'>
        <button className='border-2 border-primary_tailwind p-2 rounded' onClick={() => isCheckCurrentPage("truoc")}><ArrowBackIosIcon/>Trước</button>
        {
          Array.from({length: danhSachNguoiDung.totalPages },(_,index) => {
            return (<button  className={`border-2 border-primary_tailwind p-2 rounded ${currentPage === index + 1 && "bg-primary_tailwind text-white"}`} key={index} value={index+1} onClick={() => isCheckCurrentPage("number",index+1)}>{index + 1}</button>)
          })
        }
        
        <button  className='border-2 border-primary_tailwind p-2 rounded' onClick={() => isCheckCurrentPage("sau")}><ArrowForwardIosIcon/>Sau</button>
        
    </div>
    {/* <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">
          Cập nhật khóa học 
          </DialogTitle>
          <DialogContent>
            <form action="" className='flex flex-col gap-2' onSubmit={editKhoaHocFormik.handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Tên Khóa Học</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name="tenKhoaHoc" value={editKhoaHocFormik.values.tenKhoaHoc} onChange={editKhoaHocFormik.handleChange}/>
              {editKhoaHocFormik.errors.tenKhoaHoc && <span className='error_text text-red-500'>{editKhoaHocFormik.errors.tenKhoaHoc}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Nhập mô tả khóa học</label>
              <textarea type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='moTa' value={editKhoaHocFormik.values.moTa} onChange={editKhoaHocFormik.handleChange}/>
              {editKhoaHocFormik.errors.moTa && <span className='error_text text-red-500'>{editKhoaHocFormik.errors.moTa}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Hình Ảnh</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='hinhAnh' value={editKhoaHocFormik.values.hinhAnh}  onChange={editKhoaHocFormik.handleChange}/>
              {editKhoaHocFormik.errors.hinhAnh && <span className='error_text text-red-500'>{editKhoaHocFormik.errors.hinhAnh}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Mã nhóm</label>
              <input type="text" className='w-[350px] outline-none border-2 border-gray-500 p-1 rounded' placeholder='Nhập tên khóa học' name='maNhom' value={editKhoaHocFormik.values.maNhom} onChange={editKhoaHocFormik.handleChange}/>
              {editKhoaHocFormik.errors.maNhom && <span className='error_text text-red-500'>{editKhoaHocFormik.errors.maNhom}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Danh mục khóa học</label>
              <select name="maDanhMucKhoaHoc" id="" value={editKhoaHocFormik.values.maDanhMucKhoaHoc} onChange={editKhoaHocFormik.handleChange} >
                {
                  danhMuc.map((item,index) => <option value={item.maDanhMuc} key={index}>{item.tenDanhMuc}</option>)
                }
              </select>
            </div>
            <div className='flex justify-end my-3'>
            <button type='submit' className='w-max p-2 bg-primary_tailwind text-white rounded'>Lưu</button>
            </div>
          </form>
          </DialogContent>
          
    </Dialog> */}

    
  </div>
  )
}

export default TableDanhSachNguoiDung