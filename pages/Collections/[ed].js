import React, { useState } from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
export default function ed({ sanPhamsTraVe, name }) {
  console.log(sanPhamsTraVe);

  const [luachon, setluachon] = useState(false);

  return (
    <Layout>
      <div className="w-[1280px] mx-auto">
        <div className="w-[1180px] mx-auto">
          <button
            onClick={() => {
              setluachon(!luachon);
            }}
          >
            Sort buy: Featured
          </button>

          {luachon && (
            <div
              // onClick={() => {
              //   setluachon(false);
              // }}
            >

              <div className="w-[150px] h-[150px] bg-[red]">
                  <div>Featured</div>
                  <div>Price: Low - High</div>
                  <div>Price: High - Low</div>
                  <div>Best Selling</div>
                  <div> Newest</div>
              </div>
              
              
            </div>
          )}
        </div>
      </div>
      {/* <div className="w-[1280px] mx-auto">
        <div className="w-[1180px] mx-auto">
          <select> 
            <option>Featured</option>
            <option>Price: Low - High</option>
            <option>Price: High - Low</option>
            <option>Best Selling</option>
            <option>Newest</option>
          </select>
        </div>
      </div> */}
      <div className="w-[1280px] mx-auto">
        <div className="w-[1180px] mx-auto"></div>
      </div>
      <div className="w-[1280px mx-auto] flex">
        {/* {name} */}

        <div className="w-[1180px] mx-auto">
          <div className="">
            <div className="font-bold">Filter</div>
          </div>
          <div className="w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sanPhamsTraVe.map((sp) => {
              return <Product sanPham={sp}></Product>;
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
