import React from 'react'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='width-[70%]'>
      <form>
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required/>
        </div>

        <div>
          <p>Product Name</p>
          <input type="text" name="name" placeholder='Type here'/>
        </div>

        <div>
          <p>Product Description</p>
          <textarea name="description" placeholder='Write Content here...' rows='5' />
        </div>

        <div>
          <div>
            <p>Product Category</p>
            <select name="category" >
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
            <input type="number" name="price" placeholder='₹200' />
          </div>
        </div>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add