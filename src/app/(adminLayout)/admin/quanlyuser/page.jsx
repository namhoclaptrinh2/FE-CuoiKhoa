"use client"
import React from 'react'




import TableDanhSachNguoiDung from '../../../../components/TableDanhSachNguoiDung';
import ThemUser from '../../../../components/ThemUser';
function page() {
 
  return (
    <div className='quanly_khoahoc p-4 '>
        <div className='header flex justify-between'>
            <h1 className='text-2xl font-semibold'>Quản lý User</h1>
            <ThemUser/>
        </div>
        <TableDanhSachNguoiDung/>
        
    </div>
  )
}

export default page