//client\src\pages\FavoriteCourses.jsx

import React, { useEffect, useState } from "react";
import { fetchFavoriteCourses } from "../services/course";
import { Link } from "react-router-dom"; // ✅✅ 링크함수 불러오기

export default function FavoriteCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await fetchFavoriteCourses();
      console.log("✅ 서버 응답 확인:", data); // 구조 확인용
      setCourses(data);
    };
    loadFavorites();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">❤️ 찜한 강의 목록</h1>
      {courses.length === 0 ? (
        <p className="text-gray-600">아직 찜한 강의가 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <Link  key={course._id}  to={`/courses/${course._id}`}>  {/* ✅✅ 강의 목록에서 각 항목에 링크 추가 */}
              <li className="p-4 bg-white shadow rounded">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
                <p className="text-sm text-gray-500">
                  {course.provider} • {course.level} • {course.duration}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
