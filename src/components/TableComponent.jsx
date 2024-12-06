import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// icon
import EditIcon from '@mui/icons-material/Edit';

import ButtonEdit from './ButtonEdit';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { capNhapKhoaHocThunk, getChiTietKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';
import { formatDate, getCookie } from '@/uttil';
import { useRouter } from 'next/navigation';
import XemChiTietComponent from './XemChiTietComponent';
import XoaComponent from './XoaComponent';



function TableComponent(props) {
    const router = useRouter();
    const {danhSachKhoaHoc} = props;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const chiTietKhoaHoc = useSelector(state => state.khoaHocReducer.chiTietKhoaHoc);

    const danhMuc = useSelector(state => state.danhMucReducer.danhMucKhoaHoc);

    
    const handleEdit = async (maKhoaHoc) => {
        dispatch(getChiTietKhoaHocThunk(maKhoaHoc))
        setOpen(true)
    }
    const handleClose = () => {
      setOpen(false);
  };
  //  validate tion
  const editFormKhoaHocChema = Yup.object().shape({
    tenKhoaHoc : Yup.string().required("Tên khóa học không được bỏ trống !"),
    moTa : Yup.string().required("Mô tả hông được bỏ trống"),
    hinhAnh : Yup.string().required("Hình ảnh hông được bỏ trống"),
    maNhom : Yup.string().required("Mã nhóm hông được bỏ trống"),
   

  })
  const initialValues = {
    tenKhoaHoc: chiTietKhoaHoc.tenKhoaHoc,
    moTa: chiTietKhoaHoc.moTa,
    hinhAnh: chiTietKhoaHoc.hinhAnh,
    maNhom: chiTietKhoaHoc.maNhom,
    maDanhMucKhoaHoc: "BackEnd",
  } 
  const editKhoaHocFormik = useFormik({
    initialValues : {
      tenKhoaHoc: "",
      moTa: "",
      hinhAnh: "",
      maNhom: "",
      maDanhMucKhoaHoc: "",
    } | {},
    onSubmit: async (values) => {
      const ngayTao = formatDate();
      values.maKhoaHoc = chiTietKhoaHoc.maKhoaHoc;
      values.biDanh = values.tenKhoaHoc;
      values.luotXem = 0;
      values.danhGia = 0;
      values.ngayTao = ngayTao;
      values.taiKhoanNguoiTao = getCookie("hoTen");
      
      try{
        const res = await dispatch(capNhapKhoaHocThunk(values));
        if(res === 200){
          // handleClose()
          alert("Thêm thành công!");
          window.location.reload();
          
        }
      }catch(error){
        alert(error.response.data)
        
    }
      
    },
    validationSchema: editFormKhoaHocChema
  })
  useEffect(() => {
    editKhoaHocFormik.setValues(initialValues || {});
  },[chiTietKhoaHoc,open]);
  return (
    <div className='mt-4'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align='center'>Mã khóa học</TableCell>
            <TableCell align='center'>Tên khóa học</TableCell>
            <TableCell align='center'>Mô tả</TableCell>
            <TableCell align='center'>Số lượng học viên</TableCell>
            <TableCell align='center'>Lượt xem</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {danhSachKhoaHoc.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' >{row.maKhoaHoc} </TableCell>
              <TableCell align='center' >{row.tenKhoaHoc}</TableCell>
              <TableCell align='center' >{row.moTa}</TableCell>
              <TableCell  align='center'>{row.soLuongHocVien}</TableCell>
              <TableCell  align='center'>{row.luotXem}</TableCell>
              <TableCell align='center' className='  ' >
                <XemChiTietComponent maKhoaHoc={row.maKhoaHoc}/>
                <button className='edit' onClick={() => handleEdit(row.maKhoaHoc)}><EditIcon className='text-orange-400'/></button>
                <XoaComponent maKhoaHoc={row.maKhoaHoc}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
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
            
      </Dialog>

      
    </div>
    
  )
}

export default TableComponent