//src\routes\index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from "../pages/Home";
import Search from "../pages/Search";
import FavoriteCourses from "../pages/FavoriteCourses";
import Profile from "../pages/Profile"; // 추가
import About from "../pages/About"; // 추가
import Terms from "../pages/Terms"; 
import Login from "../pages/Login";  //로그인
import Register from "../pages/Register";  //회원가입
import Privacy from "../pages/Privacy";  //개인정보처리방침
import Contact from "../pages/Contact";  //개인정보처리방침
import CourseDetail from '../pages/CourseDetail'; // ✅✅ 상세강의안 컴포넌트 불러오기
import AdminDashboard from '../admin/pages/AdminDashboard'; // ✅✅ 상세강의안 컴포넌트 불러오기
import RequireAdmin from '../admin/pages/RequireAdmin';

function RoutesComponent() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/FavoriteCourses" element={<FavoriteCourses />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetail />} /> {/* ✅✅ 상세강의안 매칭 */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        <Route path="/admin/dashboard" element={
          <RequireAdmin>
            <AdminDashboard />
          </RequireAdmin>
          } />
        </Route> 
    </Routes>
  );
}