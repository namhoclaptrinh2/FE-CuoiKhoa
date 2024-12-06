import React, { useState } from 'react'
// Import icon material

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useRouter } from "next/navigation";

import Link from 'next/link';
function KhoaHocLienQuan(props) {
    const router = useRouter();
    const {title,data} = props;
    const [open,setOpen] = useState(false)
  return (
    <div className='khoa_hoc_tham_khao container mb-5 '>
            <h1 className='my-10 font-semibold text-lg' >{title}</h1>
            <div className='container_box flex relative justify-stretch flex-wrap gap-24 w-full' >
                {data && data.map((item, index) => {
                    
                   return (
                    <div className='box w-[280px] shadow-box relative hover:-translate-y-1 transition duration-300 cursor-pointer group' key={index}>
                        <img src={item.hinhAnh} alt="" className='h-[185px] w-full object-contain' />
                        <div className='px-3'>
                        <h1 className='title text-base font-semibold my-3'>{item.tenKhoaHoc}</h1>
                        <div className='time flex justify-between mb-4'>
                            <div className='flex items-center gap-1'><AccessTimeIcon/>8 giờ</div>
                            <div className='flex items-center gap-1'><CalendarMonthIcon/>4 tuần</div>
                            <div className='flex items-center gap-1'><SignalCellularAltIcon/>tất cả</div>
                        </div>
                        <div className='author_price flex items-center justify-between py-3'>
                            <div className="author flex items-center gap-1 text-gray-400">
                            <img src="https://i.pinimg.com/control/564x/94/47/36/9447365f451b94fd53c2ac2a91d8c39f.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-[50%]' />My name
                            </div>
                            <div className='price relative'>
                                <h1 className='text-gray-400 line-through text-sm'>800.000 đ</h1>
                                <h1 className='text-primary_tailwind font-semibold pr-4 '>400.000 đ</h1>
                                <LocalOfferIcon className='absolute top-[50%] -right-[10px] text-red-500'/>
                            </div>

                        </div>
                        </div>
                        <h1 className='bg-primary_tailwind text-white w-max p-2 absolute left-0 top-[45%]'>Javascript</h1>
                        <h1 className='bg-red-500 text-white w-max p-2 absolute top-0 -left-[10px] custom-after custom-before'>Yêu thích</h1>
                            {
                            <div className={`absolute  bg-white  top-0 hidden group-hover:opacity-100 group-hover:flex group-hover:w-[280px] group-hover:h-full flex-col justify-between transiton duration-500`}>
                                 <div className="author flex items-center gap-1 text-gray-400 pt-3 px-2">
                                    <img src="https://i.pinimg.com/control/564x/94/47/36/9447365f451b94fd53c2ac2a91d8c39f.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-[50%] ' />My name
                                    </div>
                                <h1 className='text-2xl px-2'>{item.tenKhoaHoc}</h1>
                                <p className='h-1/4 overflow-hidden text-ellipsis px-2 text-gray-500 my-4'>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
                                <div className='time flex justify-between mb-4 px-2'>
                                    <div className='flex items-center gap-1'><AccessTimeIcon/>8 giờ</div>
                                    <div className='flex items-center gap-1'><CalendarMonthIcon/>4 tuần</div>
                                    <div className='flex items-center gap-1'><SignalCellularAltIcon/>tất cả</div>
                                </div>
                                <button className='text-white bg-primary_tailwind w-full text-xl py-2' onClick={() =>router.push(`/detail?id=${item.maKhoaHoc}`)}>
                                   Xem Chi Tiết
                                </button>
                            </div>
                            }
                    </div>
                    )
                    })}
                   
                     
            </div>
           
            </div>
  )
}

export default KhoaHocLienQuan