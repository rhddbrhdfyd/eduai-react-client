//client\src\components\Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const footerStyle = {
  borderTop: "1px solid #ccc",
  padding: "20px",
  textAlign: "center",
  fontSize: "14px",
  color: "#666",
};

const copyrightStyle = {
  marginBottom: "10px",
};

const navStyle = {
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const contactStyle = {
  fontStyle: "italic",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={copyrightStyle}>
        ⓒ 2025 AI EduSearch. All rights reserved.
      </div>
      <nav style={navStyle}>
        <Link to="/about" className="hover:underline">서비스 소개</Link>
        {/* <a href="/about">서비스 소개</a> */}
        <Link to="/terms" className="hover:underline">이용약관</Link>
        <Link to="/privacy" className="hover:underline">개인정보처리방침</Link>
        <Link to="/contact" className="hover:underline">문의하기</Link>
      </nav>
      <div style={contactStyle}>
        Email: <a href="mailto:contact@edu-search.ai">contact@edu-search.ai</a>
      </div>
    </footer>
  );
}

export default Footer;