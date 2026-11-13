import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const url = import.meta.env.VITE_SERVER_URL;

  const [list, setList ] = useState([])

  const fetchList = async () =>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Error fetching list');
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])
  console.log(list)

  return (
    <div className='width-[70%] ml-[max(5vw,25px)] mt-13 '>
      <p>All Foods List</p>
      <div></div>
      <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-3.75 border border-solid border-[#cacaca] text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item, index)=>{
        return (
          <div key={index} className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-3.75 border border-solid border-[#cacaca] text-sm">
            <img src={`${url}/images/`+item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price} ₹</p>
            <p>X</p>
          </div>
        )
      })}
    </div>
  )
}

export default List