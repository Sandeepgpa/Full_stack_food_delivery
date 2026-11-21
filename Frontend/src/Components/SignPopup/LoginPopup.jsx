import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    const url = import.meta.env.VITE_SERVER_URL;

    const [currentState,setCurrentState] = useState("Sign Up");

    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        setData(data=>({...data,[name]:value}))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let newUrl = url
        if (currentState==='Login') {
            newUrl += "/api/user/login"
        } else {
            newUrl +="/api/user/register"
        }
        const response = await axios.post(newUrl,data)

        if (response.data.success) {
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }
    }

    useEffect(()=>{
        console.log(data)
    },[data])

  return (
    
        <div className="login-popup">
            <form onSubmit={handleSubmit} className="login-popup-cotainer">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState==='Login'?<></>:<input name='name' onChange={handleChange} value={data.value} type="text" placeholder='Your name' required />}
                    <input name='email' onChange={handleChange} value={data.email} type="email"  placeholder='Your email' required/>
                    <input name='password' onChange={handleChange} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type="submit">{currentState==="Sign Up"?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" required />
                    <p>By continuing, I agree to the terms of use & privacy Policy.</p>
                </div>
                {currentState==="Login"
                ?<p>Create a new account ? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
               
                
            </form>
        </div>
  )
}

export default LoginPopup