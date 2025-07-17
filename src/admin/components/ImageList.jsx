// client/src/admin/components/ImageList.jsx
import { useEffect, useState } from 'react';
import { getImages } from '../../services/admin';

function ImageList() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const data = await getImages();
      setImages(data);
    } catch {
      alert('이미지 불러오기 실패');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>이미지 리스트</h2>
      <ul>
        {images.map((img) => (
          <li key={img._id}>
            <img src={img.url} alt="preview" style={{ width: 150 }} />
            <br />
            <a href={img.url} download target="_blank" rel="noopener noreferrer">
              다운로드
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageList;
