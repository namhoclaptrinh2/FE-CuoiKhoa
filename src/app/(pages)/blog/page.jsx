import React from "react";
// import thư viện fontAwesome
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import {
  faBullhorn,
  faComment,
  faEye,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="container">
      <div className="titleBlog bg-warning text-white ">
        <h3>BLOG</h3>
        <p>THÔNG TIN CÔNG NGHỆ SỐ!!!</p>
      </div>
      <div className="blogCarousel">
        <h6 className="">
          <a href="#" className="bull fw-bold d-flex align-items-center">
            <CampaignIcon className="text-danger fs-1"></CampaignIcon>
            PHÙ HỢP VỚI BẠN
          </a>
        </h6>
        <div className="rowTong row  d-flex">
          <div className="colTong8 col-md-8">
            <div className="contentLeft">
              <div className="row d-flex  	">
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div className="cardBlog">
                    <div className="cardBlogContent d-flex flex-column ">
                      {/* Ảnh bài viết */}
                      <div className="imgCardBlog overflow-hidden mb-3 ">
                        <img
                          className="w-100 object-cover"
                          src="https://base.vn/wp-content/uploads/2024/06/ky-nang-quan-ly-thoi-gian.webp"
                          alt="Thời gian và động lực"
                          style={{ height: "300px", minHeight: "300px" }}
                        />
                      </div>
                      {/* Tiêu đề bài viết */}
                      <h6 className="fs-5 py-2">Thời gian và động lực</h6>
                      {/* Thông tin về thời gian và động lực */}
                      <div className="timeBlogCourse d-flex justify-content-between">
                        <div className="reviewBlog d-flex max-content">
                          <div className=" ">
                            <ThumbUpAltIcon className="text-info me-1" />
                            300
                          </div>
                          <div>
                            <ChatBubbleOutlineIcon className="text-info ms-2 me-1"></ChatBubbleOutlineIcon>
                            500
                          </div>
                          <div>
                            <RemoveRedEyeIcon className="text-info ms-2 me-1"></RemoveRedEyeIcon>
                            200
                          </div>
                        </div>
                        <p>
                          Đăng bởi :{" "}
                          <span className="text-danger">Jhony Đặng</span>
                        </p>
                      </div>
                      {/* Mô tả bài viết */}
                      <p className="colorCardTitle py-2">
                        Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi
                        là "timetable". Hay dân dã hơn thì người ta hay gọi là
                        "Lịch thường nhật",...
                      </p>
                      {/* Nút xem thêm */}
                      <button className="btnGlobal btnCardBlog btn btn-warning w-50  my-3 rounded-0">
                        <a href="#">Xem thêm</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blogItemRight">
              {/* Hộp các chủ đề được đề xuất */}
              <div className="blogRightBox border border-secondary mb-4 ">
                <h6 className="border-top-custom border-bot-custom text-center p-2 fw-bold">Các chủ đề được đề xuất</h6>
                <ul>
                  <li className="py-2 px-4 "> 
                    <a href="#">Front-end / Mobile apps</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">UI / UX / Design</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">BACK-END</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">Thư viện</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">Chia sẻ người trong nghề</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">Châm ngôn IT</a>
                  </li>
                  <li className="py-2 px-4">
                    <a href="#">Chủ đề khác</a>
                  </li>
                </ul>
              </div>
              {/* Hộp bài đăng được đề xuất */}
              <div className="blogRightBox border border-secondary mb-4 ">
                <h6 className="border-top-custom border-bot-custom text-center p-2 fw-bold ">Bài đăng được đề xuất</h6>
                {/* Bài viết 1 */}
                <div className="postBlog px-4 py-4">
                 
                  <h6 className="pb-2 fw-bold">Routing trong ReactJS</h6>
                  <p className="colorCardTitle text-secondary">
                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong ReactJS...
                  </p>
                  <div className="imgPost d-flex align-items-center">
                    <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg" alt />
                    <span className="colorCardTitle">Nguyên Văn...</span>
                  </div>
                </div>
                {/* Bài viết 2 */}
                <div className="postBlog px-4 py-4">
                  {/* <img
                    src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg"
                    alt
                  /> */}
                  <h6 className="pb-2 fw-bold">Lập trình hướng đối tượng OOP</h6>
                  <p className="colorCardTitle text-secondary">
                    Chúng ta sẽ cùng nhau tìm hiểu cách OOP trong ReactJS...
                  </p>
                  <div className="imgPost d-flex align-items-center">
                    <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg" alt />
                    <span className="colorCardTitle">Nguyên Văn Vũ...</span>
                  </div>
                </div>
                {/* Bài viết 3 */}
                <div className="postBlog px-4 py-4">
                  {/* <img
                    src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1017/6172259ab8b80.png"
                    alt
                  /> */}
                  <h6 className="pb-2 fw-bold">Xử Lý Bất Đồng Bộ Trong Javascript</h6>
                  <p className="colorCardTitle text-secondary">
                    Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời
                    gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi
                    file,...)...
                  </p>
                  <div className="imgPost d-flex align-items-center">
                    <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg" alt />
                    <span className="colorCardTitle">Nguyên Minh...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
