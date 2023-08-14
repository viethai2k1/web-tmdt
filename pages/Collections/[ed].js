import React, { useState } from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { FaAngleUp, FaAngleDown} from "react-icons/fa";
export default function ed({ sanPhamsTraVe, name }) {
  console.log(sanPhamsTraVe);

  const [luachon, setluachon] = useState(false);
  const [state_1, setState_1] = useState(false);
  const [state_2, setState_2] = useState(false);
  const [state_3, setState_3] = useState(false);
  const [state_4, setState_4] = useState(false);
  const [state_5, setState_5] = useState(false);

  return (
    <Layout>

      <div className="w-[1280px] mx-auto">
        <div className="w-[1180px] mx-auto">
          <div className="flex justify-between mt-[30px]">
            <div className="text-[25px] font-semibold">TOP BRANDS</div>
            <div><u>All Brands</u></div>
          </div>
          <div className="grid grid-cols-5 gap-4 my-[20px]">
            <div className="flex flex-col text-center gap-[10px]">
              <img src="/img/anh07.webp"></img>
              <div>Nike</div>
            </div>
            <div className="flex flex-col text-center gap-[10px]">
              <img src="/img/anh09.webp"></img>
              <div>Adidas</div>
            </div>
            <div className="flex flex-col text-center gap-[10px]">
              <img src="/img/anh11.webp"></img>
              <div>New Balance</div>
            </div>
            <div className="flex flex-col text-center gap-[10px]">
              <img src="/img/anh15.webp"></img>
              <div>Puma</div>
            </div>
            <div className="flex flex-col text-center gap-[10px]">
              <img src="/img/anh34.webp"></img>
              <div>Reebok</div>
            </div>         
          </div>
        </div>
      </div>
      <div className="w-[1280px] mx-auto]">
        <div className="w-[1180px] mx-auto flex justify-end relative ">
          <button
            onClick={() => {
              setluachon(!luachon);
            }}
            className=""
          >
            Sort buy: Featured
          </button>

          {luachon && (
            <div>
              <div className="w-[150px] h-[150px] bg-[white] absolute top-[30px] right-0 z-10 border-[1px] text-[14px]">
                <div className="border-b-[1px] flex justify-center h-[30px]">
                  Featured
                </div>
                <div className="border-b-[1px] flex justify-center h-[30px]">
                  Price: Low - High
                </div>
                <div className="border-b-[1px] flex justify-center h-[30px]">
                  Price: High - Low
                </div>
                <div className="border-b-[1px] flex justify-center h-[30px]">
                  Best Selling
                </div>
                <div className="border-b-[1px] flex justify-center h-[30px]">
                  {" "}
                  Newest
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[1280px] mx-auto mt-[30px] ">
        <div className="w-[1180px] mx-auto"></div>
      </div>
      <div className="w-[1280px mx-auto] flex">
        {/* {name} */}

        <div className="w-[1180px] mx-auto flex gap-[20px]">
          <div className="w-[300px]">
            <div className="font-bold">Filter By</div>

            <div className="mt-[20px] flex flex-col gap-6">
              <div className="border-b pb-4">
                <div
                  onClick={() => {
                    setState_1(!state_1);
                  }}
                  className="flex justify-between"
                >
                  <div className="font-bold">Availability</div>
                  {
                    state_1 ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>
                  }
                </div>
                {state_1 && (
                  <div className="flex gap-[10px] text-[14px] pt-4">
                    <buton className="hover_1 w-[80px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                      In stock
                    </buton>
                    <buton className="hover_2 w-[120px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                      Out of stock
                    </buton>
                  </div>
                )}
                {/* <div className="border-[1px] w-[200px] fixed top-[350px]"></div>             */}
              </div>
              <div className="border-b pb-4">
                <div
                  onClick={() => {
                    setState_2(!state_2);
                  }}
                  className="flex justify-between"
                >
                  <div className="font-bold">More filters</div>
                  {

                      state_2 ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>
                  }
                </div>
                {state_2 && (
                  <div className="flex flex-col gap-[10px] text-[14px] w-[250px] mt-[10px]">
                    <div className="flex gap-[10px]">
                      <buton className="hover_2 w-[60px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        adidas
                      </buton>
                      <buton className="hover_2 w-[60px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        Asics
                      </buton>
                      <buton className="hover_2 w-[60px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        Nike
                      </buton>
                    </div>
                    <div className="flex gap-[10px]">
                      <buton className="hover_2 w-[80px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        Nimbus
                      </buton>
                      <buton className="hover_2 w-[60px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        Shoes
                      </buton>
                    </div>
                  </div>
                )}
                {/* <div className="border-[1px] w-[200px] fixed top-[340px]"></div>             */}
              </div>

              <div className="border-b pb-4">
                <div
                  onClick={() => {
                    setState_3(!state_3);
                  }}
                  className="flex justify-between"
                >
                  <div className="font-bold">Brand</div>
                  {state_3 ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}
                </div>
                {state_3 && (
                  <div className="text-[14px] w-[230px] flex flex-col gap-[10px] mt-[10px]">
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>Adidas</div>
                      </div>
                      <div>3</div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>Asice</div>
                      </div>
                      <div>1</div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>Brooks</div>
                      </div>
                      <div>1</div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>New Balance</div>
                      </div>
                      <div>2</div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>Nike</div>
                      </div>
                      <div>1</div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[15px] h-[15px] border-[1px] border-[black]"></input>
                        <div>Reebok</div>
                      </div>
                      <div>1</div>
                    </div>
                  </div>
                )}
                {/* <div className="border-[1px] w-[200px] fixed top-[340px]"></div>             */}
              </div>

              <div className="border-b pb-4">
                <div
                  onClick={() => {
                    setState_4(!state_4);
                  }}
                  className="flex justify-between"
                >
                  <div className="font-bold">Color</div>
                  {state_4 ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}
                </div>
                {state_4 && (
                  <div className="flex flex-col gap-[10px]  text-[14px] mt-[10px] ">
                    <div className="flex gap-[10px]">
                      <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[black] border-none"></div>
                      <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[#0000FF] border-none"></div>
                      <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[#4A4B46] border-none"></div>
                      <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[#ADD8E6] border-none"></div>
                      <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[#FFC0CB] border-none"></div>
                    </div>
                    <div className="w-[30px] h-[30px] rounded-[60px] border-[1px] border-[black] bg-[#FFFF00] border-none"></div>
                  </div>
                )}
                {/* <div className="border-[1px] w-[200px] fixed top-[350px]"></div>             */}
              </div>

              <div className="border-b pb-4">
                <div
                  onClick={() => {
                    setState_5(!state_5);
                  }}
                  className="flex justify-between"
                >
                  <div className="font-bold">Size</div>
                  {state_5 ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}
                </div>
                {state_5 && (
                  <div className="flex flex-col gap-[10px] text-[14px] w-[250px] mt-[10px]">
                    <div className="flex gap-[10px]">
                      <buton className="hover_2 w-[50px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        M10
                      </buton>
                      <buton className="hover_2 w-[50px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        M11
                      </buton>
                      <buton className="hover_2 w-[50px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        M12
                      </buton>
                    </div>
                    <div className="flex gap-[10px]">
                      <buton className="hover_2 w-[50px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        M6
                      </buton>
                      <buton className="hover_2 w-[50px] h-[30px] border-[1px] border-[black] flex justify-center items-center">
                        M8
                      </buton>
                    </div>
                  </div>
                )}
                {/* <div className="border-[1px] w-[200px] fixed top-[340px]"></div>             */}
              </div>
            </div>
          </div>
          <div className="w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sanPhamsTraVe.map((sp ,index) => {
              return <Product key={index} sanPham={sp}></Product>;
            })}
          </div>
        </div>
      </div>
      
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { ed, name } = context.query;
  const response = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/collections/${ed}/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const responseJson = await response.json();
  console.log(responseJson);
  return {
    props: {
      sanPhamsTraVe: responseJson.products,
      name: name,
    },
  };
};
