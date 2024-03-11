import { comparePassword, hashPassword } from "../helper/auth.helper.js";
import { userModel } from "../models/userModel.js";
import Jwt  from "jsonwebtoken";
const register = async (req) => {
    try {
      const { userName,email, password,role } = req.body;


      if (!userName) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "UserName is required",
        });
      }
  
      if (!email) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "email is required",
        });
      }
  
      if (!password) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "password is required",
        });
      }
      if (!role) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "role is required",
        });
      }
      
      
  
      const existingUser = await userModel.findOne({ email });
  
      if (existingUser) {
        throw Object.assign(new Error(), {
          name: "CONFLICT",
          message: "User Already exists",
        });
      }
  
      const hashed_password = await hashPassword(password);
  
      const user = await userModel.create({ userName,email, password: hashed_password,role});
  
      return  user ;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const login = async (req) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if (!email || !password) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Email or Password is missing",
        });
      }
  
      const user = await userModel.findOne({ email });
      console.log(user);
      if (!user) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: `Email is not registered`,
        });
      }
      console.log('user.password: ', user.password,password);
      const match = await comparePassword(password, user.password);
      console.log(' match: ',  match);

  
      if (!match) {
        throw Object.assign(new Error(), {
          name: "UNAUTHORIZED",
          message: `Password is not correct`,
        });
      }
  
      const token = Jwt.sign({ _id: user._id },"zenmonk", {
        expiresIn: "7d",
      });
    console.log(token)
      
      return { user, token };
    } catch (error) {
      throw error;
    }
  };

  export const authService = {
 
    register,
    login,
  
  };
