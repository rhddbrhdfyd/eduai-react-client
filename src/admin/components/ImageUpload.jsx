// client/src/admin/components/ImageUpload.jsx
import React from 'react';
import { useState } from 'react';
import { uploadImage } from '../../services/admin';

function ImageUpload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const res = await uploadImage(formData);
      onUploadSuccess(); // 업로드 성공 시 이미지 리스트 리로드
    } catch (err) {
      alert('업로드 실패');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? '업로드 중...' : '업로드'}
      </button>
    </div>
  );
}

export default ImageUpload;
