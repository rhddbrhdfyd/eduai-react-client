
// client\src\components\Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext"; //✅ 추가

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth(); //✅ 추가
  const navigate = useNavigate();
console.log("현재 로그인된 사용자 정보:", user);
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center px-8">
      {/* 로고 */}
      <Link to="/" className="text-xl font-bold">AI EduSearch</Link>

      {/* 중앙 메뉴 */}
      <nav className="flex gap-6 text-sm font-medium">
        <Link to="/about" className="hover:underline">서비스 소개</Link>
        <Link to="/search" className="hover:underline">강의 검색</Link>
        {isLoggedIn && <Link to="/FavoriteCourses" className="hover:underline">찜한 강의</Link>}

      </nav>

      {/* 우측 메뉴 */}
      <div className="flex gap-4 text-sm font-medium">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:underline">로그인</Link>
            <Link to="/register" className="hover:underline">회원가입</Link>
          </>
        ) : (
          <>
            {/* 관리자 링크 */}
            {user?.role === "admin" && (
              <Link to="/admin/dashboard" className="hover:underline text-red-600 font-semibold">
                관리자
              </Link>
            )}

            {/* 내 정보 및 로그아웃 */}
            <Link to="/profile" className="hover:underline">내 정보</Link>
            <button
              className="hover:underline"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  );
}