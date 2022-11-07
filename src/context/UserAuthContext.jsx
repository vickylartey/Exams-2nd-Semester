import React, { createContext, useState } from "react";

export const Context = createContext();
const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const refreshUser = () => {
    const lsUser = localStorage.getItem("user")
    if (lsUser) {
      setUser(JSON.parse(lsUser))
    }
  }

  const handleAuthLogin = (username, password) => {
    let myPassword = 'Nii@12345naa'
    let myUsername = 'admin'
    if (password === myPassword && username === myUsername) {
      const matchingUser = {
        firstName: 'Victoria',
        lastName: 'Abbey'
      }
      setUser(matchingUser)
      localStorage.setItem("user", JSON.stringify(matchingUser));
      return { success: "successful" };
    } else {
      return { error: "Wrong username or password, please try again" };
    }

    };

  const handleAuthRegister = (username, password) => {
    localStorage.setItem(username, JSON.stringify(password));
  };

  const handleAuthLogout = () => {
    localStorage.removeItem("user");
    setUser(null)
    return true
  };

  return (
    <Context.Provider
      value={{
        user,
        handleAuthLogin,
        handleAuthRegister,
        handleAuthLogout,
        refreshUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserAuthContext;