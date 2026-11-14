import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-4 border border-solid border-[#a9a9a9] border-r-0 py-2 px-2.5 cursor-pointer rounded-l-lg ${
      isActive ? "bg-[#fff0ed] border-[tomato]" : ""
    }`;

  return (
    <div className="w-[18%] min-h-screen border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[max(1vw, 10px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">

        <NavLink to="/add" className={navLinkStyle} >
          <img src={assets.add_icon} alt="Add_icon" />
          <p className="max-sm:hidden">Add Item</p>
        </NavLink>

        <NavLink to="/list" className={navLinkStyle} >
          <img src={assets.order_icon} alt="Add_icon" />
          <p className="max-sm:hidden">List items</p>
        </NavLink>

        <NavLink to="/orders" className={navLinkStyle} >
          <img src={assets.order_icon} alt="Order_icon" />
          <p className="max-sm:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
