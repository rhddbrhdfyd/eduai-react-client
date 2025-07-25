import React from 'react';

const Terms = () => {
  return (
   <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>이용약관</h2>

      <section>
        <h3>제1조 목적</h3>
        <p>
          이 약관은 당사가 제공하는 AI 교육 관련 검색, 비교, 추천 등의 서비스를 회원이 이용함에 있어 필요한 권리와 의무 및 책임사항을 규정합니다.
        </p>
      </section>

      <section>
        <h3>제2조 정의</h3>
        <ul>
          <li><strong>서비스</strong>: 당사가 제공하는 AI 교육 프로그램 검색, 정보 조회, 비교 및 관련 콘텐츠 제공 서비스 일체</li>
          <li><strong>회원</strong>: 본 약관에 동의하고 서비스를 이용하는 자</li>
          <li><strong>제휴기관</strong>: 당사와 제휴 계약을 체결하고 콘텐츠 또는 정보를 제공하는 교육기관, 기업 등</li>
        </ul>
      </section>

      <section>
        <h3>제3조 약관의 효력 및 변경</h3>
        <ol>
          <li>본 약관은 서비스 초기 화면 또는 연결화면에 게시함으로써 효력을 발생합니다.</li>
          <li>당사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 사전 공지를 합니다.</li>
          <li>변경된 약관은 공지 후 효력이 발생하며, 회원이 이의 제기를 하지 않고 서비스를 계속 이용할 경우 동의한 것으로 간주됩니다.</li>
        </ol>
      </section>

      <section>
        <h3>제4조 서비스 내용</h3>
        <ol>
          <li>
            당사가 제공하는 서비스는 다음과 같습니다:
            <ul>
              <li>AI 관련 교육 콘텐츠 검색 및 추천</li>
              <li>교육기관 및 과정 비교 정보 제공</li>
              <li>교육 트렌드 및 콘텐츠 큐레이션</li>
              <li>사용자 맞춤형 교육 정보 제공</li>
            </ul>
          </li>
          <li>
            서비스의 일부는 제휴기관에서 제공한 정보를 기반으로 하며, 당사는 해당 정보의 정확성을 보장하지 않습니다.
          </li>
        </ol>
      </section>

      <section>
        <h3>제5조 이용자의 의무</h3>
        <ul>
          <li>허위 정보 등록 또는 타인의 정보 도용</li>
          <li>플랫폼 내 제공되는 정보를 무단 복제, 배포, 상업적 활용</li>
          <li>서비스 운영을 방해하거나 고의로 오류를 유발하는 행위</li>
        </ul>
      </section>

      <section>
        <h3>제6조 개인정보보호</h3>
        <p>
          회원의 개인정보는 관련 법령에 따라 보호되며, 개인정보 수집 및 이용에 관한 사항은 개인정보처리방침에 따릅니다.
        </p>
      </section>

      <section>
        <h3>제7조 책임의 한계</h3>
        <ol>
          <li>당사는 회원 간 또는 회원과 제휴기관 간에 발생한 분쟁에 개입하지 않으며, 이에 따른 손해에 대해 책임지지 않습니다.</li>
          <li>당사는 서비스 제공을 위한 시스템 유지 관리에 노력하지만, 천재지변, 기술적 장애 등 불가항력적인 사유로 인한 서비스 중단 시 책임을 지지 않습니다.</li>
        </ol>
      </section>

      <section>
        <h3>제8조 지식재산권</h3>
        <p>
          서비스에 포함된 모든 콘텐츠, UI/UX, 디자인, 데이터베이스는 당사 또는 제휴기관에 저작권이 있으며, 무단 복제 및 사용을 금합니다.
        </p>
      </section>

      <section>
        <h3>제9조 분쟁해결 및 관할</h3>
        <p>
          본 약관에 따른 분쟁은 당사 소재지를 관할하는 법원을 제1심 전속 관할법원으로 합니다.
        </p>
      </section>
    </div>
  );
};

export default Terms;
