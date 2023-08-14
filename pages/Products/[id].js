import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Layout from "../../components/Layout";
import { BsTruck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineShareAlt, AiTwotoneHeart } from "react-icons/ai";
import { IconName } from "react-icons/ai";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function id({ thamSo1, thamSo2 }) {
  const [thich, setThich] = useState(false);
  const [addtobag, setaddtobag] = useState(false);

  const themvaogiohang = (thamSo1) => {
    const giohang = localStorage.getItem("giohang");

    const CheckCart = localStorage.getItem("Cart");
    
    //kiem tra gio hang da ton tai hay chua
    if (!CheckCart) {
      sanPhamTraVe.quantity = 1;
      localStorage.setItem("Cart", JSON.stringify([sanPhamTraVe]));
    } else {
      const oddCart = localStorage.getItem("Cart");
      let oddCartJSON = JSON.parse(oddCart);
      const checkItem = oddCartJSON.find((item) => {
        return item.product.id === sanPhamTraVe.product.id;
      });


    // Trong trường hợp chưa có giỏ hàng
    if (!giohang) {
      // Tạo giỏ hàng và lưu vào 1 mảng là phần tử là sản phẩm được click
      localStorage.setItem("giohang", JSON.stringify([thamSo1]));
    }
    // Ngược lại đã có giỏ hàng
    else {
      // lấy ra giỏ hàng dạng string
      const giohangCuString = localStorage.getItem("giohang");

      // Đổi giỏ hàng dạng string về dạng mảng
      const giohangCuJson = JSON.parse(giohangCuString);

      // Push sản phẩm đc click vào giỏ hàng cũ
      giohangCuJson.push(thamSo1);

      // Lưu giỏ hàng mới sau khi push sản phẩm vào localStorage
      localStorage.setItem("giohang", JSON.stringify(giohangCuJson));
    }
  };

  return thamSo1.product ? (
    <div>
      <Layout>
        <div>
          <div className="bg-[black]">
            <div className=" w-[1280px]  mx-auto">
              <div className=" w-[1180px] h-[50px] mx-auto flex items-center justify-between text-[white]">
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
                  <div className="text-[15px]">
                    Free shipping for all order over $99.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1280px] mx-auto">
            <div className="w-[1180px] mx-auto text-[12px] flex mt-[20px] gap-[10px]">
              <Link href={"http://localhost:3000/"}>
                <div>HOME /</div>
              </Link>
              <div>PRODUCTS /</div>
              <div> ANTI-DUST-FILTER-BREATHABLE-3-LAYERS-OF-PURIFYING-7</div>
            </div>
            <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto mt-[30px]">
                <div className="w-[100%] flex gap-[80px] ">
                  <div className="w-[65%] grid grid-cols-2 gap-4">
                    {thamSo1.product.images.map((img, index) => {
                      console.log(img);
                      return <img key={index} src={img.src}></img>;
                    })}
                  </div>
                  <div className="w-[30%] flex flex-col gap-[15px]">
                    <div className="text-[gray]">New Balance</div>
                    <div className="text-[32px] font-bold w-[300px]">
                      {thamSo1.product.title}
                    </div>
                    <div>
                      <div className="flex items-center gap-[15px]">
                        <div className="flex">
                          <AiFillStar className="text-[#FFA500]"></AiFillStar>
                          <AiFillStar className="text-[#FFA500]"></AiFillStar>
                          <AiFillStar className="text-[#FFA500]"></AiFillStar>
                          <AiFillStar className="text-[#FFA500]"></AiFillStar>
                          <AiFillStar className="text-[#FFA500]"></AiFillStar>
                        </div>
                        <div>(2 reviews)</div>
                      </div>
                    </div>
                    <div className="text-[25px] font-medium">
                      {thamSo1.product.variants[0].price}
                    </div>
                    <div className="flex flex-col gap-[20px] mt-[20px]">
                      <button
                        onClick={() => {
                          themvaogiohang(thamSo1);
                        }}
                        className="w-[350px] h-[50px] bg-[black] text-[white] rounded-[5px] font-medium"
                      >
                        Add to Bag
                      </button>
                      {addtobag && (
                        <Cart products={thamSo2} setClose={setaddtobag} />
                      )}
                      <button className="w-[350px] h-[50px] bg-[blue] text-[white] flex rounded-[5px] items-center justify-center gap-[10px]">
                        <div className="text-[22px] font-semibold">shop</div>
                        <div className="w-[50px] h-[24px] bg-[white] rounded-[5px] text-[14px] text-[blue]">
                          Pay
                        </div>
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        {/* <AiOutlineHeart className="text-[25px]"></AiOutlineHeart> */}
                        <div
                          className=""
                          onClick={() => {
                            setThich(!thich);
                          }}
                        >
                          {thich ? (
                            <AiTwotoneHeart className="text-[black] text-[25px]"></AiTwotoneHeart>
                          ) : (
                            <AiOutlineHeart className="text-[25px]"></AiOutlineHeart>
                          )}
                        </div>
                        <div>WISHLIST</div>
                      </div>
                      <div className="flex gap-[10px] items-center">
                        <BsArrowLeftRight className="text-[25px]"></BsArrowLeftRight>
                        <div>COMPARE</div>
                      </div>
                      <div className="flex gap-[10px] items-center">
                        <AiOutlineShareAlt className="text-[25px]"></AiOutlineShareAlt>
                        <div>SHARE</div>
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <div className="flex ">
                        SKU:{" "}
                        <div className="font-medium ml-[5px]"> TAGS: N/A</div>
                      </div>
                      <div className="flex">
                        CATEGORIES:
                        <div className="font-medium ml-[5px]"> Men,Shoes,</div>
                      </div>
                      <div className="flex">
                        TAGS: <div className="font-medium ml-[5px]">N/A</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto">
                <div
                  className="list-disc"
                  dangerouslySetInnerHTML={{
                    __html: thamSo1.product.body_html,
                  }}
                ></div>
              </div>
              {/* <div className="w-[1180px] mx-auto">
                <div className="flex justify-between items-end">
                  <div className="text-[18px] font-bold">PRODUCT DETAILS</div>
                  <div>X</div>
                </div>
                <div className="font-semibold mt-[20px]">
                  How to choose your size
                </div>
                <div className="flex gap-[15px] items-center mt-[20px] ml-[20px]">
                  <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                  <div>
                    Our sizing buttons list the Men's size first (M) and the
                    equivalent Women's size second (W)
                  </div>
                </div>
                <div className="flex gap-[15px] items-center ml-[40px] mt-[15px]">
                  <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                  <div>
                    Ex. If you usually wear a Women's size 9.5, select the
                    button with M 8.0 / W 9.5
                  </div>
                </div>
                <div className="font-bold mt-[20px]">Product Features</div>
                <div className="flex flex-col gap-[15px] ml-[20px] mt-[20px]">
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>
                      Lightweight basketball sneakers for top-level two-way play
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>Lace up closure secures the fit</div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>
                      FuelCell foam gives off a propulsive feel to drive you
                      forward
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>
                      ABZORB pillars at the heel and forefoot use cushioning and
                      compression resistance to absorb impact
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>
                      Midfoot TPU shank provides torsional rigidity and
                      stability
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>
                      Durable outsole with a patterned tread for tractioned grip
                    </div>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                    <div>The New Balance TWO WXY V3 is imported.</div>
                  </div>
                </div>
                <div className="mt-[20px]">
                  The New Balance TWO WXY V3 Basketball Shoes know most games
                  come down to those split-second reactions – the quick stops,
                  the second jumps, the quick-fire outlet pass after a rebound
                  and countless other blink-of-an-eye actions that decide the
                  outcome. Lightweight materials and specs designed to give you
                  that split-second advantage arm you with the ultimate sneakers
                  to walk off the court victorious.
                </div>
              </div> */}
            </div>
            <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto">
                <div className="flex justify-between mt-[20px] ">
                  <div className="flex gap-[20px]">
                    <div className="text-[18px] font-semibold">
                      CUSTOMER REVIEWS
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <div className="flex text-[#FFA500]">
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                      </div>
                      <div>(2 reviews)</div>
                    </div>
                  </div>
                  <div>X</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="text-[18px] font-medium ">Cool shoes</div>
                    <div className="flex text-[#FFA500]">
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <div>Review by Ivan</div>
                      <div className="w-[6px] h-[6px] rounded-[10px] bg-[#cdc8c8]"></div>
                      <div>Tue Jul 18 2023</div>
                    </div>
                    <div className="font-semibold gap-[10px]">Liked it!</div>
                  </div>
                </div>
                <div className="border-[1px] border-[#ebe5e5] w-[1180px] mx-auto mt-[20px]"></div>
                <div className="mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="font-medium">Noice</div>
                    <div className="flex text-[#FFA500]">
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div>Review by Dinh. V. Hai</div>
                    <div className="w-[6px] h-[6px] rounded-[10px] bg-[#e8e2e2]"></div>
                    <div>Wed Mar 22 2023</div>
                  </div>
                </div>
                <div className="mt-[10px]">
                  Unique design. Very comfortable and responsive, takes a little
                  breaking but not much. Only potential drawback is the
                  continuous use of the velcro and potential to wear down the
                  material next to it, but no issue yet. I usually keep my shoes
                  untied due to health issues, but with these I keep them tied
                  and just velcro them closed. Noice
                </div>
                <div className="border-[1px] border-[#ebe5e5] w-[1180px] mx-auto mt-[20px]"></div>
                <div className="mt-[20px]">
                  <div className="font-semibold">WRITE YOUR OWN REVIEW</div>
                  <div className="mt-[15px]">
                    Only registered users can write reviews.
                    <u>Sign in</u>or <u>create an account</u>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[1280px] mx-auto">
              <div className="w-[1180px] mx-auto mt-[20px]">
                <div className="text-[25px] font-bold">RELATED PRODUCTS</div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={4}
                  navigation
                  scrollbar={{ draggable: true }}
                >
                  {thamSo2.map((sanPham, index) => {
                    return (
                      <SwiperSlide>
                        <Product key={index} sanPham={sanPham} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  ) : (
    <div>404</div>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  ///API
  const response = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/products/${id}.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );

  const responseMangSP = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );

  const responseJson = await response.json();
  const responseMangSPJson = await responseMangSP.json();

  return {
    props: {
      thamSo1: responseJson,
      thamSo2: responseMangSPJson.products,
    },
  };
};
}
