import {React, useEffect, createContext, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

// localStorage.clear();
// setLocalStorage();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // setLocalStorage();
    // const loggedInUser = {role: "anonymous", data: null};
    // localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
    
    if (!localStorage.getItem("loggedInUser")) {
      const loggedInUser = { role: "anonymous", data: null };
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