// client/src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅✅ 링크함수 불러오기
import NoticeModal from "../components/NoticeModal";
import { fetchCourses } from "../services/course"; // ✅ course 서비스 불러오기

export default function Home() {
  const [showNotice, setShowNotice] = useState(false);
  const [noticeContent, setNoticeContent] = useState("");
  const [courses, setCourses] = useState([]); //✅ 상태관리

  useEffect(() => {
    const latestNotice = `서버 점검 안내\n6월 20일(목) 오전 10시부터 12시까지 서버 점검이 진행됩니다.\n이용에 참고 부탁드립니다.`;

    const hideUntil = localStorage.getItem("hideNoticeUntil");
    const now = Date.now();

    if (!hideUntil || now > Number(hideUntil)) {
      setNoticeContent(latestNotice);
      setShowNotice(true);
    }
  }, []);

  const handleCloseWithOption = (hideForOneDay) => {
    if (hideForOneDay) {
      const oneDayLater = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("hideNoticeUntil", oneDayLater.toString());
    }
    setShowNotice(false);
  };

  //✅ 서비스 함수 호출
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses(); // 
        setCourses(data);
      } catch (err) {
        console.error("강의 데이터 불러오기 실패:", err);
      }
    };

    loadCourses();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      {/* 상단 소개 영역 */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">AI 교육 검색 플랫폼에 오신 것을 환영합니다</h1>
        <p className="text-lg text-gray-600 mb-6">
          다양한 AI 강의를 검색하고 비교하며, 나에게 맞는 학습을 시작해보세요.
        </p>
        <Link
          to="/search"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          강의 검색 시작하기
        </Link>
      </section>

      {/* 핵심 기능 안내 영역 */}
      <section className="grid md:grid-cols-3 gap-6 text-center text-sm text-gray-700">
        <div className="p-4 border rounded-lg shadow hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">AI 기반 강의 추천</h3>
          <p>나의 관심사와 학습 수준을 기반으로 맞춤형 강의를 추천합니다.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">강의 비교 기능</h3>
          <p>가격, 리뷰, 커리큘럼 등 다양한 항목을 기준으로 강의를 비교합니다.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-md">
          <h3 className="font-bold text-lg mb-2">찜하기 기능</h3>
          <p>마음에 드는 강의를 저장하고, 나중에 다시 확인할 수 있습니다.</p>
        </div>
      </section>
  
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-semibold mb-4">📚 현재 등록된 강의</h2>
        {courses.length === 0 ? (
          <p className="text-gray-500">등록된 강의가 없습니다.</p>
        ) : (
          <ul className="grid md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link key={course._id} to={`/courses/${course._id}`}>  {/* ✅✅ 강의 목록에서 각 항목에 링크 추가 */}
                  <li className="p-4 border rounded-lg shadow hover:shadow-md">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </li> 
                </Link>
              ))}
          </ul>
        )}
      </section>

      {/* 공지사항 모달 */}
      <NoticeModal
        isOpen={showNotice}
        onClose={handleCloseWithOption}
        notice={noticeContent}
      />
    </main>
  );
}