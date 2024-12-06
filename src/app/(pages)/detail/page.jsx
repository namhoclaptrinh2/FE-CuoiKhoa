"use client"
import React, { useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupIcon from '@mui/icons-material/Group';
import BookIcon from '@mui/icons-material/Book';
import TheatersIcon from '@mui/icons-material/Theaters';
import StorageIcon from '@mui/icons-material/Storage';
import KhoaHocLienQuan from '@/components/KhoaHocLienQuan';
import { useDispatch, useSelector } from 'react-redux';
import { getChiTietKhoaHocThunk, getDanhSachKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';
import { useSearchParams } from 'next/navigation';


function Detail() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useDispatch();
  const {danhSachKhoaHoc} = useSelector(state => state.khoaHocReducer)
  const {chiTietKhoaHoc} = useSelector(state => state.khoaHocReducer)
  
  // call api
  const getDanhSachKhoaHocAPI = async () => {
    dispatch(getDanhSachKhoaHocThunk());
  }
  const getChiTietKhoaHocApi = async (id) => {
      dispatch(getChiTietKhoaHocThunk(id))
  }
  useEffect(() => {
    getDanhSachKhoaHocAPI()
    getChiTietKhoaHocApi(id)
  },[])
  return (
    <div className='chiTiet'>
        <div className='title w-screen bg-yellow-400 text-white p-10'>
           <h1 className='text-2xl font-semibold'>THÔNG TIN KHÓA HỌC</h1>
           <span className='text-sm'>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</span>
        </div>
        <div className='thongTinChiTietKhoaHoc container flex gap-2'>
            <div className='left w-2/3'>
              <h1 className='text-2xl mb-4' >{chiTietKhoaHoc.tenKhoaHoc}</h1>
              <div className='thongTinGiangVien flex gap-40 items-center'>
                  <div className='hero flex gap-2 items-center'>
                    <img src="https://i.pinimg.com/control/564x/94/47/36/9447365f451b94fd53c2ac2a91d8c39f.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-[50%] ' />
                    <div>
                      <h1 className='text-gray-500'>Giảng Viên</h1>
                      <span className='font-semibold'>Robert Ngô Ngọc</span>
                    </div>
                  </div>
                  <div className='linhVuc flex items-center gap-2'>
                    <SchoolIcon className='text-4xl text-primary_tailwind'/>
                    <div>
                      <h1 className='text-gray-500'>Lĩnh Vực</h1>
                      <span className='font-semibold'>Lập Trình Back End</span>
                    </div>
                  </div>
                  <div className='danhGia flex flex-col '>
                    <div className='flex items-center text-yellow-400'> 
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                        5.0
                    </div>
                     
                    <p className='text-end'>100 đánh giá</p>
                  </div>

              </div>
              <p className='decription text-lg py-4'>
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!
              </p>
              <hr />
              <h1 className='text-2xl py-3'>Những gì bạn sẽ học</h1>  
              <div className='nhungGiBanSeHoc flex justify-between gap-4'>
                <div className='left w-1/2 flex flex-col gap-3'>
                    
                    <div className='flex gap-2 '>
                      <CheckIcon className='text-yellow-400'/>
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Tìm hiểu tất cả về React Hooks và React Components
                    </div>
                </div>
                <div className='right w-1/2 flex flex-col gap-3'>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Tìm hiểu tất cả về React Hooks và React Components
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </div>
                    <div className='flex gap-2 '>
                    <CheckIcon className='text-yellow-400'/>
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
                    </div>
                    
                </div>
              </div>
              <div className='noiDung'>
                  <h1 className='text-xl font-semibold py-2'>Nội Dung Khóa Học</h1>
                  <div className='box_course pl-5 my-4'>
                      <div className='title flex gap-2 items-center mb-4'>
                        <h1 className='text-xl'>MỤC 1 : GIỚI THIỆU </h1>
                        <button className='border-2 p-2 text-primary_tailwind border-primary_tailwind'>XEM TRƯỚC</button>
                      </div>
                      <div className='main flex flex-col gap-2'>
                          <h1>Bài học</h1>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Các khái niệm về React Component</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Thiết lập môi trường cho Windows</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Tạo ứng dụng React - React-Scripts</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Ghi chú nhanh về dấu ngoặc kép cho string interpolation</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                      </div>
                  </div>
                  <div className='box_course pl-5 my-4'>
                      <div className='title flex gap-2 items-center mb-4'>
                        <h1 className='text-xl'>MỤC 2 :Kiến thức căn bản</h1>
                        <button className='border-2 p-2 text-primary_tailwind border-primary_tailwind'>XEM TRƯỚC</button>
                      </div>
                      <div className='main flex flex-col gap-2'>
                          <h1>Bài học</h1>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Trang chủ và thành phần thư mục</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Hướng dẫn khóa học + Liên kết Github</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Hướng dẫn khóa học + Liên kết Github</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Tệp CSS và SCSS</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>React 17: Cập nhật các gói + Phiên bản React mới nhất</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                      </div>
                  </div>
                  <div className='box_course pl-5 my-4'>
                      <div className='title flex gap-2 items-center mb-4'>
                        <h1 className='text-xl'>MỤC 3 :  Kiến thức chuyên sâu </h1>
                        <button className='border-2 p-2 text-primary_tailwind border-primary_tailwind'>XEM TRƯỚC</button>
                      </div>
                      <div className='main flex flex-col gap-2'>
                          <h1>Bài học</h1>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>connect() and mapStateToProps</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Trạng thái thư mục vào Redux</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          <div className='flex justify-between'>
                              <div className='flex items-center gap-2 text-lg text-gray-500'><PlayCircleIcon className='text-primary_tailwind'/>Thành phần Tổng quan về Bộ sưu tập</div>
                              <div className='flex items-center gap-2 text-lg'><AccessTimeFilledIcon className='text-primary_tailwind'/>14:35</div>
                          </div>
                          
                      </div>
                  </div>
              </div>
            </div>
            <div className="right w-1/3 flex flex-col">
                <img src={chiTietKhoaHoc.hinhAnh} alt="" className='h-[200px] w-full object-cover' />
                <p className='text-2xl text-end py-4'><FlashOnIcon/>500.000 đ</p>
                <button className='border-1 py-1 text-lg text-primary_tailwind border-primary_tailwind'>Đăng Ký</button>
                <div className='py-2 flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Ghi danh :  <span className='text-black font-semibold'>10 học viên </span></p>
                    <GroupIcon className='text-3xl text-yellow-400'/>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Thời gian :  <span className='text-black font-semibold'>18 giờ</span> </p>
                    <AccessTimeFilledIcon className='text-3xl text-yellow-400'/>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Bài học : <span className='text-black font-semibold'>10</span> </p>
                    <BookIcon className='text-3xl text-yellow-400'/>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Video : <span className='text-black font-semibold'>14</span></p>
                    <TheatersIcon className='text-3xl text-yellow-400'/>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Trình độ : <span className='text-black font-semibold'>Người mới bắt đầu</span></p>
                    <StorageIcon  className='text-3xl text-yellow-400'/>
                  </div>
                </div>
                <input type="text" placeholder='nhập mã' className='py-1'/>
            </div>
        </div>
        <KhoaHocLienQuan title="Khóa học liên quan" data = {danhSachKhoaHoc.slice(5,9)}/>
    </div>
  )
}

export default Detail