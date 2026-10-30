import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-solid border-[#a9a9a9] border-t-0'>
      <div className='pt-12 pl-[20%] flex flex-col gap-5'>
        <div className='flex items-center gap-4 border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-l-lg'>
          <img src={assets.add_icon} alt="Add_icon" />
          <p>Add Item</p>
        </div>
        <div className='flex items-center gap-4 border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-l-lg'>
          <img src={assets.order_icon} alt="Add_icon" />
          <p>List items</p>
        </div>
        <div className='flex items-center gap-4 border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-l-lg'>
          <img src={assets.order_icon} alt="Order_icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar