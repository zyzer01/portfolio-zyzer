"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  // State to control visibility of the scroll button
  const [isVisible, setIsVisible] = useState(false);

  // Ref to track scroll position
  const scrollRef = useRef(null);

  // Effect to add and remove scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled down more than 300 pixels
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          ref={scrollRef}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 bg-secondary"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
