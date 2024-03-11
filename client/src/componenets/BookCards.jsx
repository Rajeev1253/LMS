import React, { useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import image from "../assets/million.jpg"


const BookCards = () => {
  return (
 
    <div>
    <Card sx={{width:"200px",height:"300px"}}>
        <CardContent>
        <img src={image} style={{width:"150px",height:"150px"}}></img>
        <Typography>title</Typography>
        <Typography>author</Typography>
        <Typography>genre</Typography>
        <Typography>Qty</Typography>
        


        </CardContent>
    </Card>
    </div>
  )
}

export default BookCards