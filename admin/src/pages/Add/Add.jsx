import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';


const Add = () => {

  const url = import.meta.env.VITE_SERVER_URL;

  const[image, setImage] = useState(false)
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-13 text-sm '>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className='w-30 ' />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image"  hidden required/>
        </div>

        <div className='flex-col w-[max(40%,280px)]'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' className='p-2.5 border border-gray-300' />
        </div>

        <div className='flex-col w-[max(40%,280px)]'>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder='Write Content here...' rows='5' className='p-2.5 border border-gray-300'/>
        </div>

        <div className='flex gap-8'>
          <div className='flex-col'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category" className='max-w-30 p-2.5 border border-gray-300'>
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
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='₹200' className='max-w-30 p-2.5 border border-gray-300'/>
          </div>
        </div>
        <button type='submit' className='max-w-30 border-none p-2.5 bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Add