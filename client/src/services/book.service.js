import { axiosApi } from "../config";

const PATHS = {
  addBook: "/book",
  fetchBook: "/book"
  
};

export const newBook= async (payload,config) => await axiosApi.post(PATHS.addBook,payload,config);
export const fetchAllBook = async(config)=>await axiosApi.get(PATHS.fetchBook,config)
