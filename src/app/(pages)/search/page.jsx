"use client"
import React, { useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { getDanhSachKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';
function Search() {
    const dispatch = useDispatch();
    const {danhSachKhoaHoc} = useSelector(state => state.khoaHocReducer);
    const getKhoaHoc = () => {
        dispatch(getDanhSachKhoaHocThunk())
    }
    useEffect(() => {
        getKhoaHoc()
    },[])

  return (
    <div className='search'>
         <div className='title  bg-yellow-400 text-white p-10'>
            <h1 className='text-2xl font-semibold'>TÌM KIẾM</h1>
            <span className='text-sm'>Kết Quả Tìm Kiếm Khóa Học</span>
        </div>
        <div className='container flex'>
            <div className="boLoc  w-[20%] flex flex-col gap-4">
                <h1 className='text-2xl font-semibold py-2'>Lọc</h1>
                <div className='flex flex-col gap-2 text-lg'>
                    <h1 className='text-xl font-semibold'>Khóa Học</h1>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <label htmlFor="">Tất cả</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                    <input type="checkbox"  className='w-6 h-6' />

                        <label htmlFor="">Front End</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <label htmlFor="">Back End</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox" className='w-6 h-6' />
                        <label htmlFor="">HTML/CSS</label>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-lg'>
                    <h1 className='text-xl font-semibold'>Cấp độ</h1>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <label htmlFor="">Tất cả</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                    <input type="checkbox"  className='w-6 h-6' />

                        <label htmlFor="">Mới bắt đầu</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <label htmlFor="">Trung cấp</label>
                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox" className='w-6 h-6' />
                        <label htmlFor="">Cao cấp</label>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-lg'>
                    <h1 className='text-xl font-semibold'>Đánh giá</h1>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <StarIcon className='text-yellow-300'/>
                    </div>
                    <div className='flex gap-1 pl-4'>
                    <input type="checkbox"  className='w-6 h-6' />
                    <StarIcon className='text-yellow-300'/>
                    <StarIcon className='text-yellow-300'/>

                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox"  className='w-6 h-6'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>

                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox" className='w-6 h-6' />
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>

                    </div>
                    <div className='flex gap-1 pl-4'>
                        <input type="checkbox" className='w-6 h-6' />
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>
                        <StarIcon className='text-yellow-300'/>

                    </div>
                </div>
            </div>
            <div className='thongtins  w-[80%]'>
                <h1 className='font-semibold py-3'>Hiển Thị 30 kết quả</h1>
                <div className='container_box'>
                   {
                    danhSachKhoaHoc.slice(0,30).map((khoahoc,index) => (
                        <div className='box flex shadow-box py-2 text-base justify-around my-4'>
                        <img src={khoahoc.hinhAnh} alt="" className='h-[200px] w-[250px] object-cover'/>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-semibold '>{khoahoc.tenKhoaHoc}</h1>
                            <p>ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau...</p>
                            <div className='flex gap-4'>
                                <span className='flex gap-2 items-center'><AccessTimeIcon/> 8 giờ</span>
                                <span><CalendarMonthIcon/> 23 giờ</span>
                                <span><BarChartIcon/> All view</span>
                            </div>
                            <div className='rating'>
                                <StarIcon className='text-yellow-400'/>
                                <StarIcon className='text-yellow-400'/>
                                <StarIcon className='text-yellow-400'/>
                                <StarIcon className='text-yellow-400'/>
                                <StarIcon className='text-yellow-400'/>
                                
                            </div>
                            <div className='footer flex justify-between items-center'>
                                <div className='avatar flex items-center gap-2'>
                                    <img src="https://i.pinimg.com/736x/64/85/d5/6485d59bf75d6330bbc1ad424705a1ad.jpg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                                    <h1>Nguyễn Nam</h1>
                                </div>
                                <button className='bg-primary_tailwind text-white h-max p-2 rounded-lg'>Xem chi tiết</button>
                                
                            </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Search