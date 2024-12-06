"use client"
import SignIn from '@/components/SignIn';
import { dangNhapNguoiDung } from '@/redux/reducers/nguoiDungReducer';
import { setCookie } from '@/uttil';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup"
function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const signInChema = Yup.object().shape({
        taiKhoan: Yup.string().required("Tài khoản không được bỏ trống!"),
        matKhau : Yup.string().required("Mật khẩu không được bỏ trống !")

    })
    const signInFormik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: ""
        },
        onSubmit : async(values) => {
            try{
                const res = await dispatch(dangNhapNguoiDung(values));
                if(res.status === 200){
                    setCookie("token",res.data.accessToken)
                    setCookie("hoTen",res.data.taiKhoan)
                    router.push("/admin");
                    // console.log("🚀 ~ res:", res.status)
                }
                
                
            }catch(error){
                router.push("/loginAdmin")
            }
        },
        validationSchema: signInChema
    })
  return (
    <div className="login-box shadow-box ">
        <div className="login-header">
            <header>Login</header>
        </div>
       <form action="" onSubmit={signInFormik.handleSubmit}>
            <div className="input-box mb-2">
                <input type="text" className="input-field" name='taiKhoan' placeholder="Email" autoComplete="off" value={signInFormik.values.taiKhoan} onChange={signInFormik.handleChange}/>
                {signInFormik.errors.taiKhoan && <span className='error_text text-red-500'>{signInFormik.errors.taiKhoan}</span>}
            </div>
            <div className="input-box mb-2">
                <input type="password" className="input-field" placeholder="Password" autoComplete="off" name='matKhau' value={signInFormik.values.matKhau} onChange={signInFormik.handleChange}/>
                {signInFormik.errors.matKhau && <span className='error_text text-red-500'>{signInFormik.errors.matKhau}</span>}
            </div>
            <div className="forgot">
            <section>
                <input type="checkbox" id="check"/>
                <label htmlFor="check">Remember me</label>
            </section>
            <section>
                <a href="#">Forgot password</a>
            </section>
        </div>
        <div className="input-submit">
            <button className="submit-btn" id="submit" type='submit'></button>
            <label htmlFor="submit">Sign In</label>
        </div>
        <div className="sign-up-link">
            <p>Don't have account? <a href="#">Sign Up</a></p>
        </div>
       </form>
        
    </div>
  )
}

export default Login