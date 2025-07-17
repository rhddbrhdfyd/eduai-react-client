// client/src/store/authContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// ✅ AuthContext 생성 및 export
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 사용자 정보
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부

  // ✅ 로그인 함수
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // ✅ 로그아웃 함수
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  // ✅ 새로고침 시 localStorage에서 user 복원
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ 외부에서 접근 가능한 custom hook
export const useAuth = () => useContext(AuthContext);
