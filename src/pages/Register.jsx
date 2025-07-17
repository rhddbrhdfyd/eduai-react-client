// client\src\pages\Register.jsx
import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('📤 form 데이터:', form);
    try {
      const res = await axios.post('https://eduai-react-v4-fm-server.onrender.com/api/auth/register', form,
       {
          headers: {
            'Content-Type': 'application/json', // 명시적으로 JSON 데이터임을 알림
          },
        } 
      );
      console.log("📥 응답 데이터111", res.data); // ✅ 이 줄을 추가
       // ③✅  서버로부터 토큰과 사용자 정보 수신
      const { token, user } = res.data;

      if (token && user) {
        // ④✅  토큰 및 사용자 정보 localStorage 저장
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user._id);
        localStorage.setItem("username", user.username);

        // 로그인된 상태로 홈페이지나 원하는 곳으로 이동
        navigate('/login');
      } else {
        setError("회원가입 응답이 올바르지 않습니다.");
      }
      // if (res.data.success) {
      //   navigate('/login');
      // }
    } catch (err) {
      setError(err.response?.data?.message || '회원가입 중 오류 발생');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">회원가입</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">사용자 이름</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">비밀번호</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;
