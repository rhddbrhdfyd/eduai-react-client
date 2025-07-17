// client/src/services/course.js
import axiosInstance from './axiosInstance';

// 강의 전체 목록 가져오기
export const fetchCourses = async () => {
  const response = await axiosInstance.get('/courses');
  return response.data;
};

// 특정 강의 상세 정보 가져오기
export const fetchCourseById = async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}`);
  return response.data;
};

// 강의 찜하기
export const addFavoriteCourse = async (courseId) => {
  const response = await axiosInstance.post(`/favorites`, { courseId });
  return response.data;
};

// 찜한 강의 목록 가져오기
export const fetchFavoriteCourses = async () => {
  const response = await axiosInstance.get('/favorites');
  return response.data;
};
