import { createSlice } from "@reduxjs/toolkit";
import { addBook, fetchBook } from "./bookAction";

const initalState = {
  loading: false,
  books: [],
  error: null,
  success: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    //register user
    
    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.books = action.payload
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.error.message;
    });
    builder.addCase(fetchBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.books = action.payload
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.error.message;
    });
   
    // builder.addCase(updateUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(updateUser.fulfilled, (state, action) => {
    //   console.log("slice", action.payload.data.user);
    //   state.loading = false;
    //   state.success = true;
    //   state.userInfo = action.payload.data.user;
    // });
    // builder.addCase(updateUser.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });



  },
});

export default bookSlice.reducer;
