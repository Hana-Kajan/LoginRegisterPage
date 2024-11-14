import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserContextType {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserContext");
  return context;
};

export const Navbar: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = (email: string) => setUser(email);
  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  if (!user) return null;

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <nav>
        <span>Welcome, {user}</span>
        <button onClick={logout}>Logout</button>
      </nav>
    </UserContext.Provider>
  );
};


