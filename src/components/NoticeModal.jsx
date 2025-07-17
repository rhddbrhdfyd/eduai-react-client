// src/components/NoticeModal.jsx
/*
import React from 'react';

const NoticeModal = ({ isOpen, onClose, notice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          aria-label="닫기"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-3">📢 공지사항</h2>
        <p className="text-gray-700 whitespace-pre-line">{notice}</p>
      </div>
    </div>
  );
};

export default NoticeModal;
*/

import React, { useState } from "react";

const NoticeModal = ({ isOpen, onClose, notice }) => {
  const [hideChecked, setHideChecked] = useState(false); // ✅ 체크박스 상태 저장

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
        <button onClick={() => onClose(hideChecked)} // ✅ 체크 여부를 부모로 전달
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          aria-label="닫기"
        >
          &times;
        </button>  {/* 우측위에  x표시 */}

        <h2 className="text-lg font-bold mb-3">📢 공지사항</h2>
        <p className="text-gray-700 whitespace-pre-line mb-4">{notice}</p>

        {/* ✅ 하루 동안 안 보기 체크박스 추가 */}
        <label className="flex items-center text-sm text-gray-600 mb-4">
          <input type="checkbox"
            className="mr-2"
            checked={hideChecked}
            onChange={(e) => setHideChecked(e.target.checked)}
          />
          하루 동안 이 창을 다시 보지 않기
        </label>

        <div className="flex justify-end">
          <button onClick={() => onClose(hideChecked)} // ✅ 닫기 클릭 시 체크 여부 확인
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;