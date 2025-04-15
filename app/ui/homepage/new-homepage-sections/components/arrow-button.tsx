import React from "react";

const ArrowButton = ({ href = "/products", ariaLabel = "Products" }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      data-clone="true"
      className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b3b3b] hover:scale-110 transition-transform duration-300 ease-in-out overflow-hidden"
    >
      <ArrowIcon />
      <ArrowIcon />
    </a>
  );
};

const ArrowIcon = () => (
  <svg
    className="icon-arrow"
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
      fill="white"
    />
  </svg>
);

export default ArrowButton;
