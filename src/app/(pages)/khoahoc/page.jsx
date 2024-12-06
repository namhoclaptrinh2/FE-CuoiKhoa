"use client"
import React, { useEffect, useState } from 'react'
// icons
import ComputerIcon from '@mui/icons-material/Computer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CameraIcon from '@mui/icons-material/Camera';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// hook
import { useDispatch, useSelector } from 'react-redux';
import { getDanhSachKhoaHocPhanTrang, getDanhSachKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';
import KhoaHocLienQuan from '@/components/KhoaHocLienQuan';
function KhoaHoc() {
  const {khoaHocTheoPhanTrang} = useSelector(state => state.khoaHocReducer);
  console.log("🚀 ~ khoaHocTheoPhanTrang:", khoaHocTheoPhanTrang)
  const [currentPage,setCurrentPage] = useState(1)
  console.log("🚀 ~ currentPage:", currentPage)
  const dispatch = useDispatch();
  const soTrang = khoaHocTheoPhanTrang.totalPages
  const danhSachKhoaHoc = khoaHocTheoPhanTrang.items
  console.log("🚀 ~ soTrang:", soTrang)
  // lấy danh sách khóa học
  const getDanhSachKhoaHoc = async (currentPage,pageSize) => {
    dispatch(getDanhSachKhoaHocPhanTrang(currentPage,pageSize))
  }
  const isCheckCurrentPage = (type,value) => {
    switch(type){
      case "number" :
        setCurrentPage(value)
        break;
      case "truoc": 
        if(currentPage <= soTrang && currentPage > 1){
          setCurrentPage(state => state - 1 )
        }
        break;
      case "sau": 
        if(currentPage < soTrang ){
          setCurrentPage(state => state + 1)
        }
        break;
    }

  }
  useEffect(() => {
    getDanhSachKhoaHoc(currentPage,12)
  },[currentPage])
  return (
    <div className='khoaHoc '>
        <div className='title  bg-yellow-400 text-white p-10'>
            <h1 className='text-2xl font-semibold'>KHÓA HỌC</h1>
            <span className='text-sm'>Bắt đầu Hành Trình Nào</span>
        </div>
        <div className='cards container flex'>
            <div className='box bg-[#264653] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>CHƯƠNG TRÌNH HỌC</h1>
                <ComputerIcon className='text-4xl'/>
                <span>300</span>
            </div>
            <div className='box bg-[#2a9d8f] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>NHÀ SÁNG TẠO</h1>
                <CameraAltIcon/>
                <span>10000</span>
            </div>
            <div className='box bg-[#e9c46a] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>NHÀ THIẾT KẾ</h1>
                <BusinessCenterIcon/>
                <span>400</span>
            </div>
            <div className='box bg-[#f4a261] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>BÀI GIẢNG</h1>
                <LibraryBooksIcon/>
                <span>30000</span>
            </div>
            <div className='box bg-[#ee8959] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>VIDEO</h1>
                <SmartDisplayIcon/>
                <span>40000</span>
            </div>
            <div className='box bg-[#e76f51] text-white flex flex-col w-[230px] py-4 px-4 text-base justify-center items-center font-semibold gap-2'>
                <h1>LĨNH VỰC</h1>
                <CameraIcon/>
                <span>200</span>
            </div>
        </div>
        <KhoaHocLienQuan title="Danh Sách Khoa Học" data={danhSachKhoaHoc}/>
        <div className='pagination flex justify-center gap-2'>
        <button className='border-2 border-primary_tailwind p-2 rounded' onClick={() => isCheckCurrentPage("truoc")}><ArrowBackIosIcon/>Trước</button>
        {
          Array.from({length: soTrang },(_,index) => {
            return (<button  className={`border-2 border-primary_tailwind p-2 rounded ${currentPage === index + 1 && "bg-primary_tailwind text-white"}`} key={index} value={index+1} onClick={() => isCheckCurrentPage("number",index+1)}>{index + 1}</button>)
          })
        }
        
        <button  className='border-2 border-primary_tailwind p-2 rounded' onClick={() => isCheckCurrentPage("sau")}><ArrowForwardIosIcon/>Sau</button>
        
    </div>
    </div>
  )
}

export default KhoaHoc