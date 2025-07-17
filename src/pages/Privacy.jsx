import React from "react";

export default function Privacy() {
  return (
     <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 className="text-2xl font-bold mb-4">개인정보처리방침</h1>

      <p className="mb-2">
        본 AI 교육 검색 플랫폼(이하 "서비스")은 사용자의 개인정보를 매우 중요하게 생각하며, 관련 법령을 준수합니다. 본 방침은 서비스 이용 시 수집되는 개인정보 및 그 처리 방법에 대해 설명합니다.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. 수집하는 개인정보 항목</h2>
      <ul className="list-disc list-inside mb-2">
        <li>이름, 이메일, 비밀번호 (회원가입 시)</li>
        <li>서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보 (자동 수집)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. 개인정보 수집 및 이용 목적</h2>
      <ul className="list-disc list-inside mb-2">
        <li>회원 관리 및 본인 인증</li>
        <li>서비스 제공 및 개선</li>
        <li>이용자 문의 및 민원 대응</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. 개인정보 보유 및 이용 기간</h2>
      <p className="mb-2">
        사용자의 개인정보는 수집 및 이용 목적이 달성된 후 지체 없이 파기합니다. 단, 관계법령에 의해 보존이 필요한 경우 해당 기간 동안 보관됩니다.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. 이용자의 권리</h2>
      <p className="mb-2">
        이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 삭제를 요청할 수 있습니다. 관련 요청은 관리자 이메일을 통해 처리됩니다.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. 개인정보 보호 책임자</h2>
      <p>
        책임자: 이선<br />
        이메일: info@ai-platform.com
      </p>

      <p className="mt-8 text-gray-600 text-xs">
        본 방침은 2025년 6월 1일부터 적용됩니다.
      </p>
    </div>
  );
}
