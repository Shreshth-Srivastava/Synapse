import {React, useState, useEffect, useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from "./context/AuthProvider"


const App = () => {  

    const contextData = useContext(AuthContext);

    const [loggedInUser, setLoggedInUser] = useState(null);

  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // })
  

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == "user@gmail.com" && password == "123"){
      setUser("user");
      setLoggedInUser("user")
    }
    else if(email == "admin@gmail.com" && password == "123"){
      setUser("admin");
      setLoggedInUser("admin");
    }
    else{
      setUser("");
      setLoggedInUser("");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user == "user" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  )
}

export default App
