import React from 'react'
// import use formik
import { useFormik } from 'formik';
// import yup
import * as Yup from 'yup';
import { dangKyNguoiDung } from '@/redux/reducers/nguoiDungReducer';
import { useDispatch } from 'react-redux';
function SignUp() {
    const dispatch = useDispatch()
    const signUpShema = Yup.object().shape({
        taiKhoan: Yup.string().required("Tài khoản không được bỏ trống !"),
        hoTen: Yup.string().required('Họ tên không được bỏ trống'),
        email: Yup.string().required("Email không được bỏ trống").email("Email không đúng định dạng !"),
        soDT: Yup.string().required("Số điện thoại không được bỏ trống !").matches(/^[0-9]{10}$/, "Số điện thoại phải chứa 10 ký tự và chỉ bao gồm số !"),
        matKhau : Yup.string().required("Mật khẩu không được bỏ trống !").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            "Mật khẩu phải ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt!"
        )

    })
    const formikSignUp = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: ""
        },
        validationSchema : signUpShema,
        onSubmit : async (values) => {
            try{
                const res = await dispatch(dangKyNguoiDung(values));
                alert("Đăng Ký Thành Công");
                dieuHuong("/")
            }catch(error){
                alert(`Đăng Ký không Thành Công Lỗi : ${error.response.data}`);
            }
            
            
        }
        
    })
  return (
    <div className="form-container sign-up ">
        <form onSubmit={formikSignUp.handleSubmit}>
            <h1 className='text-3xl font-semibold'>Create Account</h1>
            <div className='taiKhoan w-full'>
                <input type="text" placeholder="Tài Khoản" name='taiKhoan' onChange={formikSignUp.handleChange} value={formikSignUp.values.taiKhoan}/>
                {formikSignUp.errors.taiKhoan && <span className='error_text'>{formikSignUp.errors.taiKhoan}</span>}
            </div>
            <div className='w-full hoTen'>
                <input type="text" placeholder="Họ Và Tên" name='hoTen' onChange={formikSignUp.handleChange} value={formikSignUp.values.hoTen}/>
                {formikSignUp.errors.hoTen && <span className='error_text'>{formikSignUp.errors.hoTen}</span>}
            </div>
            <div className='w-full email'>
                <input type="email" placeholder="Email" name='email' onChange={formikSignUp.handleChange} value={formikSignUp.values.email}/>
                {formikSignUp.errors.email && <span className='error_text'>{formikSignUp.errors.email}</span>}
            </div>
            <div className='w-full soDT'>
                <input type="text" placeholder="Số Điện Thoại" name='soDT' onChange={formikSignUp.handleChange} value={formikSignUp.values.soDT}/>
                {formikSignUp.errors.soDT && <span className='error_text'>{formikSignUp.errors.soDT}</span>}
            </div>
            <div className='matKhau w-full'>
                <input type="password" placeholder="Password" name='matKhau' onChange={formikSignUp.handleChange} value={formikSignUp.values.matKhau}/>
                {formikSignUp.errors.matKhau && <span className='error_text'>{formikSignUp.errors.matKhau}</span>}
            </div>
            <select name="maNhom" id="" className='text-gray-500 w-full py-[10px] px-[15px] outline-none' values={formikSignUp.values.maNhom} onChange={formikSignUp.handleChange}>
                <option value="GP01" >GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03">GP03</option>
                <option value="GP04">GP04</option>
                <option value="GP05">GP05</option>
            </select>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp