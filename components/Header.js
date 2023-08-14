import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";
import { BsArrowLeftRight, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Product from "./Product";
import Cart from "./Cart";

export default function Header() {
  const [yeuthich, setyeuthich] = useState(false);
  const [thamSo3, setThamSo3] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  useEffect(() => {
    fetch("/api/all-product")
      .then((res) => res.json())
      .then((res) => {
        setThamSo3(res.products);
      });
  }, []);

  useEffect(() => {
    const handleUpdateTotal = () => {
      const cartRaw = localStorage.getItem("Cart") ?? "[]";
      const cart = JSON.parse(cartRaw);
      console.log(cart);
      let total = 0;

      for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity;
      }
      setTotalProduct(total);
    };

    window.addEventListener("capNhatCart", handleUpdateTotal);
    handleUpdateTotal();
  }, []);

  return (
    <div>
      <div className="h-[80px] bg-[#FAA618] flex items-center justify-center gap-[35px]  ">
        <div>
          <div className="text-[23px] font-bold">20% Off Site-Wide</div>
          <div className="text-[20px]">Apply code on checkout</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <div className="font-bold text-[30px]">33</div>
            <div className="text-[14px]">Days</div>
          </div>
          <div>:</div>
          <div>
            <div className="font-bold text-[30px]">22</div>
            <div className="text-[14px]">Hsr</div>
          </div>
          <div>:</div>
          <div>
            <div className="font-bold text-[30px]">3</div>
            <div className="text-[14px]">Mins</div>
          </div>
        </div>
        <div className="w-[250px] h-[50px] text-[white] bg-[#D20808] flex items-center justify-center rounded-[5px]">
          CODE: CLIQUEFRIENDLY
        </div>
      </div>
      <div className=" bg-[#E5E7EB]">
        <div className="w-[1280px]  mx-auto">
          <div className="h-[40px] w-[1180px]  mx-auto flex items-center justify-end relative">
            <div className="flex gap-[27px] font-medium absolute left-0 text-[14px]">
              <div>Shipping</div>
              <div>FAQs</div>
              <div>Contact</div>
              <div>Track Order</div>
            </div>
            <div className="flex gap-[15px] absolute right-[220px]">
              <BsFacebook></BsFacebook>
              <AiOutlineTwitter></AiOutlineTwitter>
              <AiOutlineInstagram></AiOutlineInstagram>
              <FaPinterest></FaPinterest>
              <AiFillYoutube></AiFillYoutube>
            </div>
            <div className="text-[black] text-[14px]">
              {" "}
              United States (USD $)
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white]">
        <div className="w-[1280px] mx-auto">
          <div className="h-[80px] w-[1180px] mx-auto bg-[white] flex items-center justify-end relative gap-[25px]">
            <Link href="http://localhost:3000/">
              <img
                className="w-[120px] absolute left-0 top-[20px] "
                src="https://demo.shopifyhydrogen.io/sanity/9aa18a302f43fda497243b7f3470fc9098e83683-1765x515.svg?width=1765&height=515&crop=center"
              ></img>
            </Link>
            <div className=" relative">
              <button className="flex items-center justify-center absolute w-[35px] h-[35px] rounded-[50px] bg-[#F59E0B] right-[10px] top-[5px]">
                <AiOutlineSearch className="text-black text-[25px]"></AiOutlineSearch>
              </button>
              <input
                type="text"
                className="w-[460px] h-[45px] rounded-full pl-[20px] border-[1px] "
                placeholder="Search in the store..."
              ></input>
            </div>
            <div className="flex items-center gap-[15px] mr-[125px]">
              <Image
                src="/img/anh3.png"
                width={60}
                height={50}
                alt="img"
              ></Image>
              <div className="text-[black]">
                <div className="text-[12px] font-medium">HOTLINE FREE</div>
                <div>+91333444555</div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <Link
                href="/account/login"
                className="text-[black] flex flex-col items-center"
              >
                <AiOutlineUser className="text-[30px]"></AiOutlineUser>
                <div className="text-[10px]">ACCOUNT</div>
              </Link>
              <Link href={"/compare/compare_1"} className="text-[black] flex flex-col items-center">
                <BsArrowLeftRight className="text-[30px]"></BsArrowLeftRight>
                <div className="text-[10px]">COMPARE</div>
              </Link>
              <Link href={"/wishlist"} className="text-[black] flex flex-col items-center">
                <AiOutlineHeart className="text-[30px]"></AiOutlineHeart>
                <div className="text-[10px]">WISHLIST</div>
              </Link>
              <div className="">
                <div
                  className="text-[black]  flex flex-col items-center"
                  onClick={() => {
                    setyeuthich(true);
                  }}
                >
                  <AiOutlineShoppingCart className="text-[30px] relative giohang"></AiOutlineShoppingCart>
                  <div className="w-[20px] h-[20px] rounded-[40px] bg-[#EF4444] absolute top-[10px] left-[1165px] text-[white] text-[12px] flex items-center justify-center">
                    {" "}
                    0
                  </div>
                  <div className="text-[10px]">CART</div>
                </div>
                {yeuthich && <Cart products={thamSo3} setClose={setyeuthich} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
