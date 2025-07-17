//client\src\store\store.jsx
import React from "react";
import { createContext, useContext, useReducer } from 'react';

// 1. 초기 상태 정의
const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
};

// 2. 액션에 따라 상태를 업데이트하는 reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: null, isLoggedIn: false };
    case 'LOADING_START':
      return { ...state, loading: true };
    case 'LOADING_END':
      return { ...state, loading: false };
    default:
      return state;
  }
};

// 3. Context 생성
const StoreContext = createContext();

// 4. Provider 컴포넌트 정의
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// 5. 쉽게 사용하기 위한 커스텀 훅
export const useStore = () => useContext(StoreContext);
