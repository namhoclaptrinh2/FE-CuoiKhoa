
import React from 'react'
import Link from 'next/link';

function Dialog(props) {
    const {data,setOpenDialog} = props;
  return (
    <div className={`dialog w-full h-screen absolute top-0 left-0 z-50 backdrop-blur-sm ${data.open ? "flex" : 'hidden'} justify-center `}>
            <div className='box bg-white h-40 w-80 shadow-box mt-44 flex flex-col justify-between'>
                <h1 className='p-2'>Thông báo</h1>
                <h1 className='text-center '>{data.mess}</h1>
                {
                    data.status ?<Link href={"/"} className='ok'><button>OK</button></Link>
                     :
                     <div className='ok'>
                        <button onClick={() => setOpenDialog(false)} >OK</button>
                     </div>
                }
               
                
            </div>
        </div>
  )
}

export default Dialog