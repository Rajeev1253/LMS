import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./bookActionType";
import { fetchAllBook, newBook } from "../../services/book.service";

export const addBook = createAsyncThunk(
    ACTION_TYPE.ADD_BOOK,
    async ({ title, author, genre, quantity },  { getState }) => {
        try {
            let state = getState();
            const config = {
                headers: {
                    Authorization: state.auth.user.token,
                },
            };
            const res = await newBook({ title, author, genre, quantity },config)
            console.log(res)
            return res

        }
        catch (error) {
            console.log(error)
           
        }
    }
)
export const fetchBook = createAsyncThunk(
    ACTION_TYPE.FETCH_BOOK,
    async (token) => {
        console.log('token: ', token);
        try {
            const config = {
                headers: {
                    Authorization: token,
                },
            };
            const res = await  fetchAllBook(config)
            console.log(res)
            return res

        }
        catch (error) {
            console.log(error)
           
        }
    }
)