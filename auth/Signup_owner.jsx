import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'

const Signup_owner = () => {
    const initial_details={
        
        email:"",
        password:"",
        name:"",
        address:"",
        phone:"",
        bank_details:"",
        registarion_date:"",
        update_date:""
    
    }

    const[siginData,setsignData] = useState(initial_details);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        
        setsignData(initial_details);
        await axios.post(
          "http://localhost:8081/api/owners",{ownerName:siginData.name,address:siginData.address,email:siginData.email,password:siginData.password,phone:siginData.phone}
      ).then((res)=>{setCustomer(res.data)
        console.log(Customer)}).catch((err)=>{
        console.log(err)
      })
      console.log(siginData);
      }
      
      const handleChange= (e)=>{
        const {name,value} = e.target;
        setsignData(
          {
          ...siginData,
          [name]:value,
        }
        )
      }
      
      
      const password_hide_show=(inp)=>{
      const value=document.getElementById(inp);
      if (value.type=="password"){
        value.type="text"
      }
      else{
      value.type="password"
      
      }
      }
    return (
    <div>
        <div className="fullscreen">
        <form className="login" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Enter Your Name" name="name"   value={siginData.name} onChange={handleChange}/><br />
         <input type="text" id="email" placeholder="Enter Your Mail" name="email" value={siginData.email}  onChange={handleChange} /><br />
         <input type="text" id="address" placeholder="Enter Your Address" name="address"value={siginData.address} onChange={handleChange} /><br />
        <input type="text" id="bank_details" placeholder="Enter Your Bank Details" name="bank_details"  value={siginData.bank_details} onChange={handleChange} /><br />
         <input type="password" id="password3" placeholder="Enter Password" name="password" value={siginData.password}  onChange={handleChange} />
        show password:<input type="checkbox"  onClick={()=>{password_hide_show("password3")}}  onChange={handleChange}></input><hr></hr>
          <button type="submit">Signup</button>
        </form>
        </div>
        
         
      
    </div>
    );
    }

export default Signup_owner
