import {React, useEffect, createContext, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

// localStorage.clear();
// setLocalStorage();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Test-3");
    if(!localStorage.getItem("employees")){
      console.log("Test-1");
      setLocalStorage();
    }
    if(!localStorage.getItem("loggedInUser")){
      console.log("Test-2");
      const loggedInUser = {role: "anonymous", data: null};
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }
    const {employees, admin} = getLocalStorage();
    setUserData({employees, admin});
  }, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
