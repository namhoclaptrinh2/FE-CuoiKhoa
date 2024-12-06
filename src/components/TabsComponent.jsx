"use client"
import React, { useEffect, useRef, useState } from 'react'
import SkillBar from './SkillBar';
// icon
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SearchIcon from '@mui/icons-material/Search';
function TabsComponent({setOpenDialog}) {
    const firstBtnRef = useRef();
    const [selectedTab,setSeletedTab] = useState(0);
    const items = [
        {
          title:"Thông Tin Cá Nhân", 
          content: (
            <div>
              <div className='info flex '>
                  <div className="left w-1/2 flex flex-col gap-3">
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Email : </h1>
                      <p>sugar@gmail.com</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Họ và tên : </h1>
                      <p>Nguyễn Sugar</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Số điện thoại : </h1>
                      <p>0353616182</p>
                    </div>
                  </div>
                  <div className="right flex flex-col gap-3">
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Tài khoản : </h1>
                      <p>sugar baby</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Nhóm : </h1>
                      <p>GP01</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <h1 className='font-semibold'>Đối tượng : </h1>
                      <p>Học viên</p>
                    </div>
                    <button className='w-max bg-yellow-400 text-white p-2' onClick={() => setOpenDialog(true)}>CẬP NHẬT</button>
                  </div>
              </div>
              <div className='skill'>
                <div className='flex'>
                  <div className='left w-[60%] flex flex-col gap-2'>
                    <SkillBar skill={"HTML"} level={9} background = {"orange"}/>  
                    <SkillBar skill={"CSS"} level={7} background = {"green"}/>
                    <SkillBar skill={"JS"} level={8} background = {"blue"}/>
                    <SkillBar skill={"REACT"} level={10} background = {"yellow"}/>
                  </div>
                  <div className="right  w-[40%] flex justify-between flex-wrap px-3  " >
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <AccessTimeFilledIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Giờ học</h1>
                          <h1>80</h1>
                        </div>
                      </div>
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <AutoAwesomeIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Tổng điểm</h1>
                          <h1>80</h1>
                        </div>
                      </div>
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <AutoStoriesIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Buổi học</h1>
                          <h1>40</h1>
                        </div>
                      </div>
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <CatchingPokemonIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Cấp độ </h1>
                          <h1>Trung cấp</h1>
                        </div>
                      </div>
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <CelebrationIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Học Lực </h1>
                          <h1>Khá</h1>
                        </div>
                      </div>
      
                      <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                        <ColorLensIcon className='my-auto'/>
                        <div className='text-base'>
                          <h1>Bài tập  </h1>
                          <h1>100</h1>
                        </div>
                      </div>
                      
                  </div>
                </div>
               
                
              </div>
           </div>
          )
        },
        {
          title:"Khóa Hóc", 
          content: (
            <div className=''>
              <div className='flex justify-between items-center'>
                  <h1 className='font-semibold'>KHÓA HỌC CỦA TÔI </h1>
                  <div className="search w-max focus-within:border-2 focus-within:border-[#41b294]  p-1 rounded">
                      <input type="text" placeholder="Tìm kiếm" className='outline-none ' />
                      <SearchIcon/>
                  </div>
              </div>
            </div>
          )
        },
       
      ]
    useEffect(() => {
       firstBtnRef.current.focus();  
    },[])
  return (
    <div className=' flex justify-center items-center '>
        <div className=' flex flex-col gap-y-2 w-full  '>
            <div className=' flex justify-between items-center gap-x-2 font-bold text-white  w-max' >
                {items.map((item,index) => (
                    <button key={index} className={`outline-none border-none w-full p-2  text-black text-center ${selectedTab === index ? "ring-2 bg-primary_tailwind text-white" : ""} text-base w-max`} ref={index === 0 ? firstBtnRef : null}
                    onClick={() => setSeletedTab(index)}
                    >{item.title}</button>
                ))}
            </div>
            <div className='bg-white p-2 rounded-xl'>
                {
                    items.map((item,index) => (
                        <div className={`${selectedTab === index ? "" : "hidden"}`}>
                            {item.content}
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default TabsComponent