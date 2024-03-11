import {Route,Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./componenets/routes/PrivateRoute";
import AdminRoute from "./componenets/routes/AdminRoute";
import Dashboard from "./pages/User/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddBook from "./pages/Admin/AddBook";
import ViewBook from "./pages/Admin/ViewBook";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LoginPage/>} ></Route>
      <Route path="/signup" element={<SignupPage/>} ></Route>
      <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}/>
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element= {<AdminDashboard/>}/>
        <Route path="admin/addbook" element = {<AddBook/>}/>
        <Route path="admin/viewbook" element = {<ViewBook/>}/>
      </Route>

    </Routes>
     
    </div>
  );
}

export default App;
