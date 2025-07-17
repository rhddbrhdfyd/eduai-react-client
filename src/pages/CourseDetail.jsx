//client\src\pages\CourseDetail.jsx
import React from "react"; // 
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourseById, addFavoriteCourse, fetchFavoriteCourses } from "../services/course"; //✅✅✅찜기능


export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isFav, setIsFav] = useState(false);//✅✅✅찜기능

  // COURESE목록 가져오기
  useEffect(() => {
    const loadCourse = async () => {
      const data = await fetchCourseById(id);
      setCourse(data);
    };
    loadCourse();
  }, [id]);


  // ✅✅✅ 찜 여부 확인
  useEffect(() => {
    const checkFavorite = async () => {
      const favorites = await fetchFavoriteCourses();
      setIsFav(favorites.includes(id)); // id는 useParams()로 받은 courseId
    };
    checkFavorite();
  }, [id]);

    if (!course) return <p>로딩 중...</p>;

  // ✅✅✅ 찜 토글 처리
  const handleFavorite = async () => {
    await addFavoriteCourse(id);  // 서버에 찜 추가 또는 해제 요청
    setIsFav((prev) => !prev);    // UI 상태만 토글 (서버 응답 재조회 생략)
  };

  return (
    <>
        <div className="bg-gray-100">
            {/* ✅ 상단 배너 */}
            <div className="max-w-5xl mx-auto py-8 px-6 rounded-lg mb-8 shadow-sm">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{course.title}</h1>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                    제공기관: <span className="font-medium text-gray-800">{course.provider}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                    수준: <span className="font-medium text-gray-800">{course.level}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                    카테고리: <span className="font-medium text-gray-800">{course.category}</span>
                    </p>
                </div>

                {/* 찜 버튼은 주석 처리된 서비스 연결 후 활성화 가능 */}
                
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-700">
                    ⭐ {course.rating} / 5.0 &nbsp;•&nbsp; 👨‍🎓 {course.students.toLocaleString()}명 수강
                    </div>
                    {/* ✅✅✅ 찜 토글 처리 */}
                    <button
                      onClick={handleFavorite}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      {isFav ? "찜 해제" : "찜하기"}
                    </button>
                </div>
               
                </div>
            </div>
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
            {/* ✅ 상세 정보 표 영역 */}
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
                <div><span className="font-semibold">카테고리:</span> {course.category}</div>
                <div><span className="font-semibold">난이도:</span> {course.level}</div>
                <div><span className="font-semibold">교육 제공자:</span> {course.provider}</div>
                <div><span className="font-semibold">총 학습 시간:</span> {course.duration}</div>
                <div><span className="font-semibold">가격:</span> {course.price.toLocaleString()}원</div>
                <div><span className="font-semibold">별점:</span> {course.rating} / 5</div>
                <div><span className="font-semibold">수강생 수:</span> {course.students.toLocaleString()}명</div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">강의 설명</h2>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>
        </div>
    </>              
  );
}
