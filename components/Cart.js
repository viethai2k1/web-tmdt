import React from "react";
import Product from "./Product";

export default function Cart({ products, setClose }) {
  const getProduct = localStorage.getItem("Cart");
  const getProductJS = JSON.parse(getProduct);

  return (
    <div
      className="bg-[white] w-[485px] h-[100%] fixed top-0 right-0 z-10 overflow-y-auto"
      // onClick={() => {
      //   setyeuthich(false);
      // }}
    >
      {" "}
      <div className="w-[400px] mx-auto mt-[20px]">
        <div className="flex justify-between">
          <div className="font-bold text-[20px]">Cart</div>
          <buton
            onClick={() => {
              setClose(false);
            }}
          >
            Đóng
          </buton>
        </div>
        {getProductJS?.length > 0 ? (
          getProductJS.map((prodCart) => <ProductInCart prodCart={prodCart} />)
        ) : (
          <div>
            <div className="mt-[20px] w-[380px]">
              Looks like you haven’t added anything yet, let’s get you started!
            </div>
            <button className="w-[200px] h-[50px] bg-[black] text-[white] font-medium rounded-[5px] mt-[30px]">
              Continue shopping
            </button>
            <div className="mt-[20px]">Shop Best Sellers</div>
            <div className="grid grid-cols-2 gap-4">
              {products.map((sanPham) => {
                return (
                  <div>
                    <Product sanPham={sanPham}></Product>
                    <button className="rounded w-[180px] h-[40px] border-[1px] border-[gray] mt-4">
                      Add to Bag
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { BsTrash } from "react-icons/bs";

function ProductInCart({ prodCart }) {
  const xuLyXoaSanPham = (idXoa) => {
    const getProduct = localStorage.getItem("Cart") ?? "[]";
    const getProductJS = JSON.parse(getProduct);

    const newCart = getProductJS.filter((item) => item.product.id !== idXoa);

    localStorage.setItem("Cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("capNhatCart"));
  };

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex gap-3 pb-5 h-[9rem]">
      <img
        className="object-cover h-full w-auto"
        src={prodCart.product.image.src}
      ></img>
      <div>
        <p className="font-semibold text-lg">{prodCart.product.title}</p>
        <p className="font-base text- text-gray-500">Title: Default Title</p>
        <div className="flex items-center gap-3 h-10">
          <div className="flex border border-gray-300 rounded h-full text-center justify-center items-center px-5">
            <button>-</button>
            <input
              className="h-full w-12 flex text-center justify-center items-center outline-none bg-white"
              disabled="true"
              placeholder={prodCart.quantity}
            ></input>
            <button>+</button>
          </div>
          <button
            className="border border-gray-300 rounded h-full px-3 flex justify-center items-center"
            onClick={() => {
              xuLyXoaSanPham(prodCart.product.id);
            }}
          >
            <BsTrash />
          </button>
        </div>
      </div>
      <div className="text-xl font-bold">
        ${prodCart.product.variants[0].price * prodCart.quantity}
      </div>
    </div>
  );
}
