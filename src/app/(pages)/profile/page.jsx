"use client"
import SkillBar from '@/components/SkillBar';
import TabsComponent from '@/components/TabsComponent';


import React, { useState } from 'react'
function profile() {
const [openDialog,setOpenDialog] = useState(false);

  return (
    <div className='profile relative '>
        <div className='title  bg-yellow-400 text-white p-10'>
            <h1 className='text-2xl font-semibold'>Thông Tin Cá Nhân </h1>
            <span className='text-sm'>Thông Tin Học Viên</span>
        </div>
       <div className='container flex gap-2'>
            <div className='avatar  h-screen w-[25%] flex flex-col gap-2 text-center'>
                <img src="https://i.pinimg.com/736x/85/1c/63/851c632044d7dda30effc733db7a825a.jpg" alt="" className='w-[150px] h-[150px] object-cover rounded-full mx-auto' />
                <h1 className='font-semibold'>Robert Nguyễn</h1>
                <span>Lập Trình Viên Frontend</span>
                <button className='text-white bg-primary_tailwind w-max p-2 mx-auto rounded-2xl'>Hồ sơ cá nhân</button>
            </div>
            <div className='info w-[70%]'>
              <TabsComponent setOpenDialog={setOpenDialog}/>
            </div>
       </div>
       <div className={`dialog_login h-screen fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-20 ${openDialog ? 'flex' : "hidden"} justify-center transition duration-300 ease-in-out`}  >
            <div className="bg-[url('https://demo2.cybersoft.edu.vn/static/media/hornor.a74f5377.gif')] bg-center bg-cover w-1/3 h-max my-auto">
                <div className='header text-white flex justify-between px-4 py-3 text-xl font-semibold'>
                    <h1>Chỉnh sửa thông tin cá nhân</h1>
                    <button onClick={() => setOpenDialog(false)}>x</button>
                </div>
                <hr className='border-white border-t-2'/>
                <form action="" className='p-4 text-white font-semibold flex flex-col gap-3'> 
                        <div className='flex flex-col gap-1'>
                          <h1>Họ và tên</h1>
                          <input type="text" placeholder='Họ Tên' className='px-2 py-1 rounded-sm text-lg text-black' />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h1>Mật khẩu</h1>
                          <input type="password" placeholder='Mật khẩu' className='px-2 py-1 rounded-sm text-lg text-black'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h1>Email</h1>
                          <input type="mail" placeholder='Email' className='px-2 py-1 rounded-sm text-lg text-black'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h1>Điện Thoại</h1>
                          <input type="number" placeholder='số điện thoại' className='px-2 py-1 rounded-sm text-lg text-black'/>
                        </div>
                        <div className='flex justify-end '>
                          <button  className='bg-primary_tailwind p-2'>Hoàn Thành</button>
                          <button className='bg-red-500 p-2 ml-3'  onClick={() => setOpenDialog(false)}>Đóng</button>
                        </div>
                    </form>
            </div>
       </div>
      
    </div>
  )
}

export default profile;
