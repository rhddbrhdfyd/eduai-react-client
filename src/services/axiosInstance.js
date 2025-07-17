// client/src/services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:5000/api',
  //baseURL: 'https://eduai-react-v3-fm.vercel.app/ ', 
  // / ✅RENDER 백엔드서버요청 주소✅
  baseURL: 'https://eduai-react-v4-fm-server.onrender.com/api',
  timeout: 5000, // 요청시간
  //
  withCredentials: true, // 필요시 사용
});

// ✅ 인터셉터 추가
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;