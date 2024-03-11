import React, { useState } from 'react'
import Navbar from '../../componenets/Navbar'
import { Box, Button, Input, Paper, Stack, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addBook } from '../../features/book/bookAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
  const [title,setTitle]= useState("");
  const [author,setAuthor]= useState("");
  const [genre,setGenre]= useState("");
  const [quantity,setQuantity]= useState("");
  const dispatch = useDispatch();
  const notify = () => toast("Book Added sucessfully");
  


  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }
  const handleAuthor = (e)=>{
    setAuthor(e.target.value)
  }
  const handleGenre = (e)=>{
    setGenre(e.target.value)
  }
  const handleQuantity = (e)=>{
    setQuantity(e.target.value)
  }
  const data={
    title,
    author,
    genre,
    quantity
  }

  const handleSubmit = async()=>{

   const res = await dispatch(addBook(data));
   if(res.payload.data.success){
    notify();
  }
  setTitle("");
  setAuthor("");
  setGenre("");
  setQuantity("");
  
}


  return (
    <div>
        <Navbar/>
        <Stack height="100vh" justifyContent={"center"} alignItems={"center"}>

      
        <Box width={"500px"} height={"600px"} >
        <Paper elevation={3} sx={{ width:"100%",height:"100%", textAlign:"center"}}>
        <Stack>

        <Typography fontWeight={"600"} fontSize={"25px"} sx={{m:2}}>Add new Book</Typography>
        <TextField sx={{m:2}} placeholder='Book Title' value={title} onChange={handleTitle} />
        <TextField sx={{m:2}} placeholder='Author' value={author} onChange={handleAuthor}/>
        <TextField sx= {{m:2}} placeholder='Genre' value={genre} onChange={handleGenre}/>
        <TextField sx= {{m:2}} placeholder='Quantity' value={quantity} onChange={handleQuantity}/>
        <Typography textAlign={"left"} sx={{ml:2}}>Add Cover Photo</Typography>
        <TextField type="file"sx= {{ml  :2,mr:2,mb:2}} />
        </Stack>
        <Button variant='contained' onClick={handleSubmit}>Add Book</Button>

<ToastContainer /> 
        

        </Paper>


        </Box>
        </Stack>
    </div>
  )
}

export default AddBook