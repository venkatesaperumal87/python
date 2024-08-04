import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './Login.css'

const Signup_customer = () => {
  const date=new Date();
  const initial_details={
        
    email:"",
    password:"",
    name:"test",
    address:"",
    phone:""
    
  }

  // body{
  //   ...siginData,
  //   registarion_date:date.now,
  //   update_date:""

  // }
const[siginData,setsignData] = useState(initial_details);
const [Customer,setCustomer]=useState([]);

const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log("Handlesubmit",siginData);
  setsignData(initial_details);
    await axios.post(
        "http://localhost:8081/api/customers",{customerName:siginData.name,address:siginData.address,email:siginData.email,password:siginData.password,phone:siginData.phone}
    ).then((res)=>{setCustomer(res.data)
      console.log(Customer)}).catch((err)=>{
      console.log(err)
    })

}

const handleChange= (e)=>{
  const {name,value} = e.target;
 
  setsignData(
    {
    ...siginData,
    [name]:value,
  }
  
  )
  console.log(siginData);
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
    <div className='fullscreen'>
    <form className="login" onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Enter Your Name" name="name"  value={siginData.name} onChange={handleChange}/><br />
            <input type="text" id="email" placeholder="Enter Your Mail" name="email" value={siginData.email} onChange={handleChange}/><br />
            <input type="text" id="phone" placeholder="Enter Your Phone number" name="phone" value={siginData.phone} onChange={handleChange}/><br></br>
            <input type="text" id="address" placeholder="Enter Your Address" name="address" value={siginData.address} onChange={handleChange} /><hr />
            <input type="password" id="password2" placeholder="Enter Password" name="password" value={siginData.password} onChange={handleChange}/>
            show password:<input type="checkbox"  onClick={()=>{password_hide_show("password2")}}></input><hr></hr>
            <button  type="submit" >Signup</button>
            <pre>New user?</pre>
            </form>
    </div>
    
  
</div>
)
}

export default Signup_customer

