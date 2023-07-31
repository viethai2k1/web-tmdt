import Layout from "../components/Layout";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { BsTruck } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Product from "../components/Product";
import Link from "next/link";
export default function Home({ sanPhamsTraVe, collecttion }) {
  return (
    <Layout>
      <div>
        <div className="bg-[black]">
          <div className=" w-[1280px]  mx-auto">
            <div className=" w-[1180px] h-[60px] mx-auto flex items-center justify-between text-[white]">
              <div className="flex gap-[40px]">
                <div className={`overflow-hidden sanpham_2`}>
                  <div>Home</div>
                  <div>Home</div>
                </div>
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
                <div className="text-[15px]">
                  Free shipping for all order over $99.00
                </div>
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
            <SwiperSlide>
              <div className="relative">
                <img
                  className="w-[100%] h-[500px] "
                  src="/img/anh19.webp"
                ></img>
                <div className="absolute top-[50px] left-[110px] text-[white] ">
                  <div className="text-[20px] font-medium">NIKE AIR</div>
                  <div className="text-[60px] font-bold w-[280px]">NIKE AIR FOR 2023</div>
                  <div className="w-[500px] font-bold text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus felis in egestas cursus</div>
                  <button className="w-[200px] h-[50px] bg-[red] text-[white] mt-[20px]">VIEW MORE</button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="w-[100%] h-[500px] "
                  src="/img/anh20.webp"
                ></img>
                 <div className="absolute top-[50px] right-[160px] text-[white] ">
                    <div className="text-[20px] font-medium">NIKE AIR</div>
                    <div className="text-[60px] font-bold w-[400px]">NEW SHOES FOR 2023</div>
                    <div className="w-[500px] font-bold text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus felis in egestas cursus</div>
                    <button className="w-[200px] h-[50px] bg-[yellow] text-[white] mt-[20px]">SHOW NOW</button>
                </div>

              </div>
            </SwiperSlide>
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
              <div className="w-[100%] mx-auto grid grid-cols-4 gap-4">
                {collecttion.map((item) => {
                  return (
                    <Link
                      href={`/Collections/${item.collection_id}?name=${item.title}`}
                      key={item.collection_id}
                      className=""
                    >
                      <img className="" src={item.image.src}></img>
                      <div className="text-center font-bold">{item.title}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[1180px] mx-auto mt-[80px]">
            <div className="flex justify-between">
              <div className="text-[22px] font-bold">FEATURED PRODUCTS</div>
              <div className="flex gap-[15px]">
                <div>Men</div>
                <div>Women</div>
                <div>Accessories</div>
              </div>
            </div>
          </div>
          <div className="w-[1280px] mx-auto mt-[20px]">
            <div className="w-[1180px] mx-auto">
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                scrollbar={{ draggable: true }}
              >
                <div className="mt-[20px] w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sanPhamsTraVe.map((sanPham) => {
                    return (
                      <SwiperSlide>
                        <Product sanPham={sanPham} />
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="mt-[70px] w-[1280px] mx-auto">
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

        <div className="w-[1280px] mx-auto mt-[80px]">
          <div className="w-[1180px] mx-auto">
            <div className="flex justify-between mt-[20px]">
              <div className="text-[22px] font-bold">WOMEN COLLECTION</div>
              <div>View All</div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] mx-auto mt-[20px]">
          <div className="w-[1180px] mx-auto flex gap-[20px] ">
            <img
              className="w-[160px] h-[220px] object-cover"
              src="/img/anh26.webp"
            ></img>

            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
            >
              <div className="w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sanPhamsTraVe.map((sanPham) => {
                  return (
                    <SwiperSlide>
                      <Product sanPham={sanPham} />
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>

        <div className="w-[1280px] mx-auto mt-[100px]">
          <div className="w-[1180px] mx-auto">
            <div className="flex justify-between mt-[20px]">
              <div className="text-[22px] font-bold">MEN COLLECTION</div>
              <div>View All</div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] mx-auto mt-[20px]">
          <div className="w-[1180px] mx-auto flex gap-[20px] ">
            <img
              className="w-[160px] h-[220px] object-cover"
              src="/img/anh27.webp"
            ></img>

            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
            >
              <div className="w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sanPhamsTraVe.map((sanPham) => {
                  return (
                    <SwiperSlide>
                      <Product sanPham={sanPham} />
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
        <div className="w-[1280px] mx-auto mt-[80px]">
          <div className="w-[1180px] mx-auto">
            <div className="flex justify-between">
              <div className="text-[20px] font-bold">FEATURED BRANDS</div>
              <u>View All Brand</u>
            </div>
          </div>
          <div className="w-[1180px] mx-auto mt-[20px]">
            <div className="w-[100%] flex gap-[25px]">
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
            <div className="w-[100%] flex gap-[25px]">
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
        <div className="w-[1280px] mx-auto mt-[60px]">
          <div className="w-[1180px] mx-auto">
            <div className="h-[60px] flex items-center justify-between">
              <div className="text-[22px] font-bold">OUR BLOG</div>
              <u>View All</u>
            </div>
            <div className="w-[1180px] mt-[10px]">
              <div className="w-[100%] flex gap-[25px]">
                <div className="w-[25%]">
                  <img
                    className="h-[180px] w-[280px]"
                    src="/img/anh08.webp"
                  ></img>
                  <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px] ">
                    <div>Demo Owen v1 Admin</div>
                    <div>|</div>
                    <div>Tue Nov 08 2022</div>
                  </div>
                  <div className="text-[18px] font-semibold mt-[10px]">
                    THE BEST NIKE BLACK FRIDAY DEALS OF 2023
                  </div>
                  <div className="text-[#4B5563] mt-[10px]">
                    Black Friday 2023 is coming, and that only means one thing —
                    it’s time to fill your ...
                  </div>
                </div>
                <div className="w-[25%]">
                  <img
                    className="h-[180px] w-[280px]"
                    src="/img/anh28.webp"
                  ></img>
                  <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                    <div>Demo Owen v1 Admin</div>
                    <div>|</div>
                    <div>Tue Nov 08 2022</div>
                  </div>
                  <div className="text-[18px] font-semibold mt-[10px]">
                    THE BEST NIKE BLACK FRIDAY DEALS OF 2023
                  </div>
                  <div className="text-[#4B5563] mt-[10px]">
                    Black Friday 2023 is coming, and that only means one thing —
                    it’s time to fill your ...
                  </div>
                </div>
                <div className="w-[25%]">
                  <img
                    className="h-[180px] w-[280px] "
                    src="/img/anh18.webp"
                  ></img>
                  <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                    <div>Demo Owen v1 Admin</div>
                    <div>|</div>
                    <div>Tue Nov 08 2022</div>
                  </div>
                  <div className="text-[18px] font-semibold mt-[10px]">
                    THE BEST NIKE BLACK FRIDAY DEALS OF 2023
                  </div>
                  <div className="text-[#4B5563] mt-[10px]">
                    Black Friday 2023 is coming, and that only means one thing —
                    it’s time to fill your ...
                  </div>
                </div>
                <div className="w-[25%]">
                  <img
                    className="h-[180px] w-[280px] "
                    src="/img/anh29.webp"
                  ></img>
                  <div className="flex justify-between text-[14px] text-[#4B5563] mt-[10px]">
                    <div>Demo Owen v1 Admin</div>
                    <div>|</div>
                    <div>Tue Nov 08 2022</div>
                  </div>
                  <div className="text-[18px] font-semibold mt-[10px]">
                    THE BEST NIKE BLACK FRIDAY DEALS OF 2023
                  </div>
                  <div className="text-[#4B5563] mt-[10px]">
                    Black Friday 2023 is coming, and that only means one thing —
                    it’s time to fill your ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const response = await fetch(
    "https://panofrontendstore.myshopify.com/admin/api/2023-07/products.json",
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const responseJson = await response.json();

  const collecttion = await fetch(
    "https://panofrontendstore.myshopify.com/admin/api/2023-07/collection_listings.json",
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  ).then((res) => res.json());

  console.log(collecttion);

  return {
    props: {
      sanPhamsTraVe: responseJson.products,
      collecttion: collecttion.collection_listings,
    },
  };
};
