// client/src/services/admin.js
import axiosInstance from './axiosInstance';

// ✅ 관리자 유저 목록
export const getAllUsers = async () => {
  const res = await axiosInstance.get('/admin/users');
  return res.data;
};

// ✅ 이미지 업로드 (Cloudinary용)
export const uploadImage = async (formData) => {
  const res = await axiosInstance.post('/admin/upload-image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

// ✅ 이미지 리스트 가져오기
export const getImages = async () => {
  const res = await axiosInstance.get('/admin/images');
  return res.data;
};
