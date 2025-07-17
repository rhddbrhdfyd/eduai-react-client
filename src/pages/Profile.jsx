import React from "react";

function Profile() {
  // 예시 데이터 (추후 실제 데이터로 대체 가능)
  const user = {
    name: "이선",
    email: "seon@edu-search.ai",
    joinedDate: "2025-01-10",
    interests: ["생성형 AI", "프론트엔드 개발", "UI/UX 디자인"],
    recentSearches: ["ChatGPT 강의", "Vue3 컴포지션 API", "AI 윤리 교육"]
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>내 프로필</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>기본 정보</h2>
        <p><strong>이름:</strong> {user.name}</p>
        <p><strong>이메일:</strong> {user.email}</p>
        <p><strong>가입일:</strong> {user.joinedDate}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>관심 분야</h2>
        <ul>
          {user.interests.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>최근 검색 내역</h2>
        <ul>
          {user.recentSearches.map((query, idx) => (
            <li key={idx}>{query}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Profile;
