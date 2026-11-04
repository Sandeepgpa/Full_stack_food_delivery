import React from 'react'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='width-[70%] ml-[max(5vw,25px)] mt-13 text-sm '>
      <form className='flex-col '>
        <div className='flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" className='w-30 ' />
          </label>
          <input type="file" id="image" hidden required/>
        </div>

        <div className='flex-col w-[max(40%,280px)]'>
          <p>Product Name</p>
          <input type="text" name="name" placeholder='Type here' className='p-2.5 border-2 border-black' />
        </div>

        <div className='flex-col w-[max(40%,280px)]'>
          <p>Product Description</p>
          <textarea name="description" placeholder='Write Content here...' rows='5' className='p-2.5'/>
        </div>

        <div className='flex gap-8'>
          <div className='flex-col'>
            <p>Product Category</p>
            <select name="category" className='max-w-30 p-2.5'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input type="number" name="price" placeholder='₹200' className='max-w-30 p-2.5'/>
          </div>
        </div>
        <button type='submit' className='max-w-30 border-none p-2.5 bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Add