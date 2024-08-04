import React from 'react'
import './Login.css'
import { useState } from 'react'
const Signup_admin = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8085/team5/v1/get")
        .then((res) => {
            setData(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);
  
  const initial_details={
        
    email:"",
    password:"",
    name:""


    
}

const[siginData,setsignDate] = useState(initial_details);
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(siginData);
    
    setsignDate(initial_details);
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
    <form className="login">
    <input type="text" id="name" placeholder="Enter Your Name" name="name"  /><br />
     <input type="text" id="email" placeholder="Enter Your Mail" name="email"  /><br />
     <input type="password" id="password4" placeholder="Enter Password" name="password"  />
      show password:<input type="checkbox"  onClick={()=>{password_hide_show("password4")}}></input><hr></hr>
      <button type="submit">Signup</button>
    </form>
   
    </div>
    
     {
       data
     }
  
</div>
);
}


export default Signup_admin
