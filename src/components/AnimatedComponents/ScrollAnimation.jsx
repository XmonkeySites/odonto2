import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function ScrollAnimation({ children, type = "fade", id }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica no início
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animations = {
    fade: { opacity: isVisible ? 1 : 0, transition: { duration: 0.8 } },
    slideLeft: {
      x: isVisible ? 0 : -50,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
    slideRight: {
      x: isVisible ? 0 : 50,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
    zoomIn: {
      scale: isVisible ? 1 : 0.8,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
    rotate: {
      rotate: isVisible ? 0 : 180,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
    scaleUp: {
      scale: isVisible ? 1 : 0.5,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
    slideUp: {
      y: isVisible ? 0 : 50,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={elementRef}
      id={id}
      initial={{ opacity: 0 }}
      animate={animations[type]}
      className="w-full justify-center mx-auto flex"
    >
      {children}
    </motion.div>
  );
}
