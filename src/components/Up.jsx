import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@radix-ui/themes";
import { FaArrowUp } from "react-icons/fa6";

const Up = () => {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-blue-50 border border-blue-500 rounded-full text-blue-500"
      >
        <FaArrowUp className="m-2" />
      </button>
    </div>,
    document.body
  );
};

export default Up;
