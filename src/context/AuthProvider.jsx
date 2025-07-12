import {React, useEffect, createContext, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

// localStorage.clear();
// setLocalStorage();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = {role: "anonymous", data: null};
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    const {employees, admin} = getLocalStorage();
    setUserData({employees, admin});
  }, [localStorage.getItem("employees")])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
