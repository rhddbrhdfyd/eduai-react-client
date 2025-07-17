jsx
복사편집
// client/src/admin/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import ImageUpload from "../components/ImageUpload.jsx";
import ImageList from '../components/ImageList'; // 있다면 같이 사용

export default function AdminDashboard() {
  const [refresh, setRefresh] = useState(false);

  const handleUploadSuccess = () => {
    setRefresh(prev => !prev); // 이미지 리스트 새로고침 트리거
  };

  return (
    <div className="p-4 max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-lg font-semibold mb-4">관리자 대시보드</h2>
      <p className="mb-6">이곳에서 이미지를 업로드하고 관리하세요.</p>

      <ImageUpload onUploadSuccess={handleUploadSuccess} />
      <ImageList key={refresh} />
    </div>
  );
}

