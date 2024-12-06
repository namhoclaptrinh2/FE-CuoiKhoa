import React from 'react'

import StarIcon from '@mui/icons-material/Star';

function User(props) {
    const {data} = props;

  return (
    <div className='giang_vien_hang_dau container'>
            <h1 className='my-10 font-semibold text-lg' >Giảng viên hàng đầu</h1>
            <div className='boxContainer flex justify-around gap-5' >
                    {
                        data.map((item,index) => {
                            
                            return (    <div className='box text-center' key={index}>
                                <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="" className='w-[80px] h-[80px] object-cover rounded-full mx-auto'  />
                                <h1 className='font-semibold'>{item.hoTen}</h1>
                                <span>Chuyên gia lĩnh vực lập trình</span>
                                <div className='rating flex justify-center items-center text-yellow-400 '>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    4.9
                                </div>
                                <span className='text-gray-400'> 100 đánh giá</span>
                            </div>)
                        })
                    }
                    
                   
                    
                    
            </div>
        </div>
  )
}

export default User