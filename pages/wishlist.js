import React from 'react'
import Layout from '../components/Layout'

export default function wishlist() {
  return (
    <div>
        <Layout>
          <div className='w-[1280px] mx-auto'>
            <div className='w-[1180px] mx-auto'>
              <div className='text-[30px] font-bold'>Your Wishlist</div>
              <div className='mt-[20px]'>No products found on wishlist</div>
              <a><u>Browse catalog</u></a>
            </div>
          </div>
        </Layout>
    </div>
  )
}
