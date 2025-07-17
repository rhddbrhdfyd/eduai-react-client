// client/src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">문의하기</h2>
      <p className="mb-4">
        서비스 이용 중 문의사항이나 개선 제안이 있으시면 아래 이메일로 연락주세요.
      </p>

      <div className="mb-4">
        <p className="font-semibold">📧 이메일</p>
        <p className="text-gray-700">support@ai-edusearch.com</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">🏢 주소</p>
        <p className="text-gray-700">서울특별시 강남구 테크노길 123, AI센터 5층</p>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        * 빠른 회신을 위해 이메일 제목에 "[문의]" 또는 "[오류 신고]"를 포함해주세요.
      </div>
    </main>
  );
}
