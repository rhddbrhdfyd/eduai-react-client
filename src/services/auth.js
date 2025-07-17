// client/src/services/auth.js
import axiosInstance from './axiosInstance';

// registerUser 회원가입 요청
export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};

export const login = async (email, password) => {
  const res = await axiosInstance.post('/auth/login', { email, password });
  return res.data; // { token, user: { _id, email, role } }
};

// loginUser 로그인 요청
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  
  const { token, user } = response.data; //✅ 토근 정보를 가져옴
  localStorage.setItem('token', token); // ✅ 여기서 저장

  return user; //✅Login.jsx에게 내보냄 (token정보는 auth.js에서 사용할 예정)
};

// logoutUser 로그아웃 요청
export const logoutUser = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
};

// fetchCurrentUser 현재 로그인 사용자 정보 요청
export const fetchCurrentUser = async () => {
  const response = await axiosInstance.get('/auth/me');
  return response.data;
};
