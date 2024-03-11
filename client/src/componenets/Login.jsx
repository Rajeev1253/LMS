import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Button, CardContent, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authAction";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const role = useSelector((state)=>state.auth.user.role)
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit= async()=>{
   const res = dispatch(loginUser({email,password}))
   console.log('res.data.success: ', res);
    try{
      {
        navigate(location.state||'/dashboard')
        localStorage.setItem('auth',JSON.stringify(res.data.user.token))
      }

      
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}>

    <Stack width="500px" height="500px" s border={"1px solid black"}>

    <Card sx={{width:"100%",height:"100%"}}>
        <CardContent>
        <Stack justifyContent={"center"} alignItems={"center"} sx={{m:2}}>

            <Typography fontSize={"20px"} fontWeight={"600"}>Login</Typography>
            <TextField  type="email" label='Enter your email' sx={{m:1}}  value={email} onChange={handleEmail}></TextField>
            <TextField  type='password' label='Enter your password' sx={{m:1}} value={password} onChange={handlePassword}></TextField>
            
    <Button variant='contained' sx={{textTransform:"none"}} onClick={handleSubmit}>Login</Button>
        </Stack>
        </CardContent>

        <Link to="/signup">
          <Typography>New User</Typography>
        </Link>
    </Card>
    </Stack>
    </Stack>  
  )
}

export default Login