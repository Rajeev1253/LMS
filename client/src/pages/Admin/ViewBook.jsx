import React, { useEffect } from 'react'
import Navbar from '../../componenets/Navbar'
import BookCards from '../../componenets/BookCards'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { fetchBook } from '../../features/book/bookAction'

const ViewBook = () => {
  const token = useSelector((state)=>state.auth.user.token)
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(fetchBook(token))
   
  },[fetchBook])
  const books = useSelector((state)=>state.books.books)

  return (
    <div><Navbar/>
    <h1>View ALL books</h1>
    {books?.data?.user?.map((i)=>
    <BookCards/>

    )}
 
    </div>
  )
}

export default ViewBook