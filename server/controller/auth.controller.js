 import { errorHandler } from "../lib/utils.js";
import { authService } from "../service/auth.service.js";
 const register = async (req, res) => {
    try {
      const response = await authService.register(req);
  
      return res.status(201).send({
        success: true,
        message: "user Register Successfully",
        user: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
   const login = async (req, res) => {
    try {
      console.log(req.body)
      const response = await authService.login(req);
      return res.status(200).send({
        success: true,
        message: `Login Sucessfully`,
        user: response.user,
        token: response.token,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

  const authController ={
    register,
    login
  }

  export default authController
