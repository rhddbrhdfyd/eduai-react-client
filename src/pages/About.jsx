import React from "react";
import Button from '../components/Button';

function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>AI EduSearch 서비스 소개</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>서비스 개요</h2>
        <p>
          <strong>AI EduSearch</strong>는 인공지능 및 IT 분야의 교육 콘텐츠를 한곳에 모아
          사용자가 빠르고 정확하게 강의를 검색하고 비교할 수 있도록 지원하는 플랫폼입니다.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>주요 기능</h2>
        <ul>
          <li>주제별 강의 검색 및 필터링</li>
          <li>즐겨찾기 및 최근 검색 기록 저장</li>
          <li>AI 기반 추천 강의 제공</li>
          <li>강의 리뷰 및 별점 기능</li>
        </ul>
      </section>

      <section>
        <h2>대상 사용자</h2>
        <p>
          예비 개발자, 디자이너, 현직 종사자, AI에 관심 있는 일반인 등
          누구나 쉽게 접근하여 교육 자료를 탐색할 수 있도록 설계되었습니다.
        </p>
      </section>
      <Button onClick={() => alert('기본')} >기본 버튼</Button>
      <Button variant="secondary">보조 버튼</Button>
      <Button variant="danger">위험 버튼</Button>
      <Button variant="outline">테두리 버튼</Button>
      <Button disabled>비활성화</Button>
    </div>
  );
}

export default About;
