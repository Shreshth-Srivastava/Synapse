import { React, useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const contextData = useContext(AuthContext);
  var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

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

  const [user, setUser] = useState(loggedInUser.role);

  const handleLogin = (email, password) => {
    const employee = employeesData.find((e)=>email == e.email && password == e.password);
    const admin = adminData.find((e)=>email == e.email && password == e.password);

    if (employee) {
      loggedInUser.role = "user";
      loggedInUser.data = employee;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("user")

      // localStorage.setItem("loggedInUser", "user");
      // setCurrUserData(employee);
      // localStorage.setItem("currUserData", JSON.stringify(employee));
      // window.location.reload();
    } 
    else if (admin) {
      loggedInUser.role = "admin";
      loggedInUser.data = admin;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("admin")

      // localStorage.setItem("loggedInUser", "admin");
      // setCurrUserData(admin);
      // localStorage.setItem("currUserData", JSON.stringify(admin));
      // window.location.reload();
    } 
    else {
      loggedInUser.role = "anonymous";
      loggedInUser.data = null;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("anonymous")

      // localStorage.setItem("loggedInUser", "anonymous");
      // localStorage.setItem("currUserData", null);

      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {user === "user" ? (
        <EmployeeDashboard currUser = {loggedInUser} setUser={setUser}/>
      ) : user === "admin" ? (
        <AdminDashboard currUser = {loggedInUser} setUser={setUser} employees={employeesData}/>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
