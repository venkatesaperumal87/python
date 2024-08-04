import React, { useEffect } from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import axios from 'axios';
import "./Login.css";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [roles, ] = useState(["Customer","Owner","Admin"])
    const [apis, ] = useState(["customers","owners","admins"])
    const [value, setValue] = useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`http://localhost:8081/api/${apis[value]}/login`, {email,password})
            console.log(response.data)
            response.data === "Success" ? setIsLoggedIn(true) : setIsLoggedIn(false)

        } catch (error) {
            if (error.response.status === 401) {
                console.error('Unauthorized: Invalid credentials');
                // Handle unauthorized error
            }
            
        }
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const password_hide_show=(inp)=>{
        const value=document.getElementById(inp);
        if (value.type=="password"){
          value.type="text"
        }
        else{
        value.type="password"
        
        }
        }



    
        const validation=(e)=>{
           
          e.preventDefault();
            
            const logincheck=
        data.map((key)=>{
                
                    
            if(email==key.email && password==key.password){
            

            return true;
            }
            
                return false;

                
             

      
            

        

});

        }
        
    
    return (
        <div className="fullscreen">
        <div className="login">
            <Box >
            <TabContext value={value}>
                <Box sx={{}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {roles.map((role,idx)=><Tab label={role} value={idx}/>)}
                    </TabList>
                </Box>
            </TabContext>
        </Box>
        <br></br>
        <form  >
        <br></br>
                <input type="text" id="email" placeholder="Enter Mail id" name="Email" onChange={(e)=>{setemail(e.target.value)}} /><br />
                <br></br>
                <input type="password" id="password1" placeholder="Enter Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}  /><br></br>
                <br></br>
                show password:<input type="checkbox"  onClick={()=>{password_hide_show("password1")}}></input>
                <br/>
                <pre>      <button className='' type="submit" onClick={handleSubmit}>Log in</button></pre>
                <pre id="ele"></pre>
            </form>
         
            
        </div>
        
            

        </div>
    )
}


export default Login
