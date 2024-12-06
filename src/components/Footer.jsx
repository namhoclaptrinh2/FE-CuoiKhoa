import React from 'react';
// icon material
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Footer() {
  return (
    <footer className='footer'>
      <div className='container flex text-lg '>
          <div className='contact flex flex-col gap-4 w-1/4'>
              <a href="#" className='font-bold relative text-3xl text-shadow-custom'>
                <span className='text-green-500 text-5xl font-extrabold text-shadow-custom'>V</span>

                learning
                <KeyboardIcon className='absolute ' />
              </a>
              <div className='flex items-center gap-2 font-semibold ml-4 w-max transform hover:-translate-y-1 transition duration-300'>
                  <LocalPhoneIcon className='bg-primary_tailwind text-4xl p-2 rounded-full text-white ' />
                  1800-123-4567
              </div>
              <div className='flex items-center gap-2 font-semibold ml-4 w-max transform hover:-translate-y-1 transition duration-300'>
                <ContactEmergencyIcon className='bg-primary_tailwind text-4xl p-2 rounded-full text-white ' />
                devit@gmail.com
              </div>
              <div className='flex items-center gap-2 font-semibold ml-4 w-max transform hover:-translate-y-1 transition duration-300' >
                <PlaceIcon className='bg-primary_tailwind text-4xl p-2 rounded-full text-white ' />
                Việt Nam
              </div>
          </div>
          <div className='link flex-1'>
              <div className='link_item flex justify-around'>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl'>Liên Kết</h1>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'>
                      <KeyboardArrowRightIcon/>
                      Trang chủ
                    </a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Dịch vụ </a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Nhóm</a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Blog</a>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl'>Khóa Học</h1>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Front End</a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Back End </a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Full stack</a>
                    <a href="#" className='transform hover:-translate-y-1 transition duration-300'><KeyboardArrowRightIcon/>Node Js</a>
                  </div>
                  <div className='form_register flex flex-col gap-3'>
                      <h1 className='font-bold text-2xl'>Đăng Ký Tư Vấn </h1>
                      <input type="text" placeholder='Họ và tên' className='border-2 border-primary_tailwind rounded px-1 w-80 outline-primary_tailwind '/>
                      <input type="text" placeholder='Email' className='border-2 border-primary_tailwind rounded px-1 w-80 outline-primary_tailwind '/>

                      <input type="text" placeholder='Số điện thoại' className='border-2 border-primary_tailwind rounded px-1 w-80 outline-primary_tailwind '/>
                      <button className='w-max bg-sub text-white px-2 py-1 text-base font-medium rounded'>Đăng ký</button>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
