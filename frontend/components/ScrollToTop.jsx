"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        title="Scroll to top"
        onClick={scrollToTop}
        className="fixed bottom-10 right-6 p-3 max-sm:hidden rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 "
      >
        <ArrowUp
          className="animate-bounce transition-all duration-300"
          size={20}
        />
      </button>
    )
  );
}
