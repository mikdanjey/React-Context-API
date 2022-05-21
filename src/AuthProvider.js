import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentUser = "Mani";
    setUser(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
