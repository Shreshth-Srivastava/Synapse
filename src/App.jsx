import { React, useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const contextData = useContext(AuthContext);
  const loggedInUser = localStorage.getItem("loggedInUser");

  const [employeesData, setEmployeesData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // })

  // const [user, setUser] = useState(null);

  useEffect(() => {
    if(contextData){
      setEmployeesData(contextData.employees);
      setAdminData(contextData.admin);
    }
  }, [contextData]);

  // const [currUserData, setCurrUserData] = useState(null)

  const handleLogin = (email, password) => {
    const employee = employeesData.find((e)=>email == e.email && password == e.password);
    const admin = adminData.find((e)=>email == e.email && password == e.password);

    console.log("Employee: ",employee," Admin: ",admin);

    if (employee) {
      localStorage.setItem("loggedInUser", "user");
      // setCurrUserData(employee);
      localStorage.setItem("currUserData", JSON.stringify(employee));
      window.location.reload();
    } 
    else if (admin) {
      localStorage.setItem("loggedInUser", "admin");
      // setCurrUserData(admin);
      localStorage.setItem("currUserData", JSON.stringify(admin));
      window.location.reload();
    } 
    else {
      localStorage.setItem("loggedInUser", "anonymous");
      localStorage.setItem("currUserData", null);
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {loggedInUser === "user" ? (
        <EmployeeDashboard />
      ) : loggedInUser === "admin" ? (
        <AdminDashboard />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
