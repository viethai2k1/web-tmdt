import Layout from "../components/Layout";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { BsTruck } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Home() {
  return (
    <Layout>
        <div>
          <div className="bg-[black]">
              <div className=" w-[1280px]  mx-auto">
                  <div className=" w-[1180px] h-[60px] mx-auto flex items-center justify-between text-[white]">
                        <div className="flex gap-[40px]">
                            <div>Home</div>
                            <div>Women</div>
                            <div>Men</div>
                            <div>Accessories</div>
                            <div>Pages</div>
                            <div>FAQs</div>
                            <div>About Us</div>
                            <div>Blog</div>
                            <div>Contact</div>
                        </div>
                        <div className="flex items-center justify-center gap-[12px]">
                          <BsTruck className="text-[25px]"></BsTruck>
                          <div className="text-[15px]">Free shipping for all order over $99.00</div>
                        </div>
                  </div>
              </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><div><img src="/img/anh19.webp"></img></div></SwiperSlide>
              <SwiperSlide><div><img src="/img/anh20.webp"></img></div></SwiperSlide>
            </Swiper>
          </div>
          <div>
              <div className="w-[1280px] mx-auto ">
                  <div className="w-[1180px]  mx-auto">
                        <div className="flex justify-between items-center h-[60px]">
                          <div className="text-[22px] font-bold">SHOP BY CATEGORIES</div>
                          <u>View All</u>
                        </div>
                  </div>
                  <div className="w-[1180px] mx-auto">
                    <div className="w-[100%] mx-auto  flex gap-[25px]" >
                          <div className=" w-[25%]">
                            <img className="h-[280px]" src="/img/anh01.webp"></img>
                            <div className="ml-[80px]">Women Shoes</div>
                          </div>
                          <div className=" w-[25%]">
                            <img className="h-[280px]" src="/img/anh01.webp"></img>
                            <div className="ml-[80px]">Men Shoes</div>
                          </div>
                          <div className=" w-[25%]">
                            <img className="h-[280px]" src="/img/anh03.webp"></img>
                            <div className="ml-[80px]">Kid Shoes</div>
                          </div>
                          <div className=" w-[25%]">
                            <img className="h-[280px]" src="/img/anh04.webp"></img>
                            <div className="ml-[80px]">Accessories</div>
                          </div>                                       
                    </div>
                  </div>
              </div>
          </div>
          <div>Đây là phần móm 2</div>
          <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto">
                <div className="w-[100%] flex gap-[25px]">
                  <div className="w-[50%]">
                    <img src="/img/anh05.webp"></img>
                  </div>
                  <div className="w-[50%]">
                    <img src="/img/anh06.webp"></img>
                  </div>
                  
                </div>
              </div>
          </div>
          <div>Đây là phần móm 3</div>
          <div>Đây là phần móm 4</div>
          <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto">
                  <div className="flex justify-between">
                    <div className="text-[20px] font-bold">FEATURED BRANDS</div>
                    <u>View All Brand</u>
                  </div>             
              </div>
              <div className="w-[1180px] mx-auto mt-[20px]">
                <div className="w-[100%] flex gap-[25px]" >
                  <div className="w-[25%]">
                    <img src="/img/anh07.webp"></img>
                    <div className="ml-[90px]">Nike</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh09.webp"></img>
                    <div className="ml-[90px]">Adidas</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh10.webp"></img>
                    <div className="ml-[90px]">Jordan</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh11.webp"></img>
                    <div className="ml-[90px]">New Balance</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh12.webp"></img>
                    <div className="ml-[90px]">Asics</div>
                  </div>
                </div>
              </div>
              <div className="w-[1180px] mx-auto">
                <div className="w-[100%] flex gap-[25px]" >
                  <div className="w-[25%]">
                    <img src="/img/anh13.webp"></img>
                    <div className="ml-[90px]">Brooks</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh14.webp"></img>
                    <div className="ml-[90px]">Fila</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh15.webp"></img>
                    <div className="ml-[90px]">Puma</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh16.webp"></img>
                    <div className="ml-[90px]">Underarmour</div>
                  </div>
                  <div className="w-[25%]">
                    <img src="/img/anh17.webp"></img>
                    <div className="ml-[90px]">Converse</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto">
                <div className="h-[60px] flex items-center justify-between">
                  <div className="text-[22px] font-bold">OUR BLOG</div>
                  <u>View All</u>
                </div>
                <div className="w-[1180px] mt-[10px]">
                  <div className="w-[100%] flex gap-[25px]">
                    <div className="w-[25%]">
                      <img src="/img/anh08.webp"></img>
                      <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px] ">
                        <div>Demo Owen v1 Admin</div>
                        <div>|</div>
                        <div>Tue Nov 08 2022</div>
                      </div>
                      <div className="text-[18px] font-semibold mt-[10px]">THE BEST NIKE BLACK FRIDAY DEALS OF 2023</div>
                      <div className="text-[#4B5563] mt-[10px]">Black Friday 2023 is coming, and that only
                         means one thing — it’s time to fill your ...</div>
                    </div>
                    <div className="w-[25%]">
                      <img src="/img/anh08.webp"></img>
                      <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                        <div>Demo Owen v1 Admin</div>
                        <div>|</div>
                        <div>Tue Nov 08 2022</div>
                      </div>
                      <div className="text-[18px] font-semibold mt-[10px]">THE BEST NIKE BLACK FRIDAY DEALS OF 2023</div>
                      <div className="text-[#4B5563] mt-[10px]">Black Friday 2023 is coming, and that only
                         means one thing — it’s time to fill your ...</div>
                    </div>
                    <div className="w-[25%]">
                      <img src="/img/anh08.webp"></img>
                      <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                        <div>Demo Owen v1 Admin</div>
                        <div>|</div>
                        <div>Tue Nov 08 2022</div>
                      </div>
                      <div className="text-[18px] font-semibold mt-[10px]">THE BEST NIKE BLACK FRIDAY DEALS OF 2023</div>
                      <div className="text-[#4B5563] mt-[10px]">Black Friday 2023 is coming, and that only
                         means one thing — it’s time to fill your ...</div>
                    </div>
                    <div className="w-[25%]">
                      <img src="/img/anh08.webp"></img>
                      <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                        <div>Demo Owen v1 Admin</div>
                        <div>|</div>
                        <div>Tue Nov 08 2022</div>
                      </div>
                      <div className="text-[18px] font-semibold mt-[10px]">THE BEST NIKE BLACK FRIDAY DEALS OF 2023</div>
                      <div className="text-[#4B5563] mt-[10px]">Black Friday 2023 is coming, and that only
                         means one thing — it’s time to fill your ...</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </Layout>
  )
}
