"use client"
import React, { useEffect, useState } from 'react'
// icon
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { getCookie } from '@/uttil';
import { useRouter } from 'next/navigation';
function HeaderAdmin() {
    const router = useRouter();
    const [account,setAccount] = useState(false);
    const [token,setToken] = useState("");
    
    const checkAccount = () => {
        const tokenCookie = getCookie("token")
        
       if(tokenCookie === null){
        router.push("/loginAdmin")
       }else{
        return
       }
    }
useEffect(() => {
    checkAccount()
},[])
  return (
    <div className="header bg-white p-5 flex justify-between items-center border-b-4 border-[#4f46e5] sticky top-0" >
        <div className="search flex items-center border-2 border-transparent focus-within:border-2 focus-within:border-black w-max rounded-lg overflow-hidden">
            <SearchIcon/>
            <input type="text" placeholder="Search..." className="outline-none py-2" />
        </div>
        <div className="profile flex  items-center gap-4">
            <div className="notif">
                <NotificationsNoneIcon className="text-3xl text-gray-500 cursor-pointer"/>
            </div>
            <div className="my_profile">
                <img src="https://i.pinimg.com/736x/3c/ff/91/3cff919993408ea8cc8fd113bed4cda6.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"/>
                
            </div>
        </div>
    </div>
  )
}

export default HeaderAdmin