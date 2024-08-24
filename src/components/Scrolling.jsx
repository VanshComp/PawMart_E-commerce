import React from 'react';

export default function Scrolling() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
      <div className="Scrolling" onClick={scrollToTop}>
        <i className="fa-solid fa-angles-up fa-2xl" style={{ color: "#ffffff" }}></i>
      </div>
    </>
  );
}
