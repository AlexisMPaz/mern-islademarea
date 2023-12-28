"use client"
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <UserContext.Provider value={{ user, updateUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;