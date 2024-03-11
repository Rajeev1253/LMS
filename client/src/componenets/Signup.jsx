import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Button, CardContent, Stack, TextField, Typography,Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux";

import { registerUser } from "../features/auth/authAction";
import { Link } from 'react-router-dom';
const Signup = () => {
    const [userName,setUserName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]= useState("")
    const dispatch = useDispatch();


   
    const handleName = (e)=>{
      setUserName(e.target.value)
    }
    const handleEmail = (e)=>{
      setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value)
    }
    const handleRole = (e)=>{
      setRole(e.target.value)
    }

    const handleSubmit= async()=>{
      dispatch(registerUser({userName,email,password,role}))
    }
  return (
    <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}>

    <Stack width="500px" height="500px" s border={"1px solid black"}>

    <Card sx={{width:"100%",height:"100%"}}>
        <CardContent>
        <Stack justifyContent={"center"} alignItems={"center"} sx={{m:2}}>

            <Typography fontSize={"20px"} fontWeight={"600"}>Register Now</Typography>
            <TextField variant="outlined"   type= "text" label='Enter your name' sx={{m:1}} value={userName} onChange={handleName}></TextField>
            <TextField  type="email" label='Enter your email' sx={{m:1}}  value={email} onChange={handleEmail}></TextField>
            <TextField  type='password' label='Enter your password' sx={{m:1}} value={password} onChange={handlePassword}></TextField>
            <Box sx={{ minWidth: 200,m:1 }}>
      <FormControl fullWidth>
        <InputLabel variant='outlined' size="small" id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleRole}
        >
          <MenuItem value={"User"}>User</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button variant='contained' sx={{textTransform:"none"}} onClick={handleSubmit}>Sign-up</Button>
        </Stack>
        </CardContent>

        <Link to="/">
          <Typography>Already User</Typography>
        </Link>
    </Card>
    </Stack>
    </Stack>
        
   
  )
}

export default Signup