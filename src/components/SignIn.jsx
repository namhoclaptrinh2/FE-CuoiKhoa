
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { dangNhapNguoiDung } from '@/redux/reducers/nguoiDungReducer';
import Dialog from './Dialog';
import { setCookie } from '@/uttil';
function SignIn() {
    const dispatch = useDispatch();
    
    const [openDialog,setOpenDialog] = useState({
        mess : '',
        dieuhuong: '',
        status: "",
        open: false
    })
    const signInChema = Yup.object().shape({
        taiKhoan: Yup.string().required("Tài khoản không được bỏ trống!"),
        matKhau : Yup.string().required("Mật khẩu không được bỏ trống !").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            "Mật khẩu phải ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt!")

    })
    const signInFormik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau : ""
        },
        onSubmit: async (values) => {
            try{
                const res = await dispatch(dangNhapNguoiDung(values));
                console.log("🚀 ~ res:", res.data.accessToken)
                if(res.status === 200){
                    setOpenDialog({
                        mess : "Đăng Nhập Thành Công",
                        dieuhuong: "/",
                        open: true,
                        status: true
                    })
                }
                setCookie("token",res.data.accessToken)

                
            }catch(error){
                setOpenDialog({
                    mess : "Tài khoản hoặc mật khẩu không chính xác !",
                    open: true,
                    status: false,
                    dieuhuong:"/login"
                })
            }
           
        },
        validationSchema : signInChema
    })
  return (
    <div>
        <div className="form-container sign-in ">
            <form onSubmit={signInFormik.handleSubmit}>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <div className="social-icons">
            <a href="#" className="icon"><GoogleIcon/></a>
                    <a href="#" className="icon"><FacebookIcon/></a>
                    <a href="#" className="icon"><GitHubIcon/></a>
                    <a href="#" className="icon"><LinkedInIcon/></a>
            </div>
            <span>or use your email password</span>
            <div className='email w-full'>
                <input type="text" placeholder="Tài Khoản" name='taiKhoan' onChange={signInFormik.handleChange} value={signInFormik.values.taiKhoan}/>
                {signInFormik.errors.taiKhoan && <span className='error_text'>{signInFormik.errors.taiKhoan}</span>}
            </div>
            <div className='matKhau w-full'>
                <input type="password" placeholder="Password" name='matKhau' onChange={signInFormik.handleChange} value={signInFormik.values.matKhau}/>
                {signInFormik.errors.matKhau && <span className='error_text'>{signInFormik.errors.matKhau}</span>}
            </div>
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
            </form>
           
        </div>
        <Dialog data = {openDialog} setOpenDialog={setOpenDialog}/>
    </div>
    
  )
}

export default SignIn