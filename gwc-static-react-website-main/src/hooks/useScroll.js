import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScroll = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }, [location.hash]);

  return { location };
};

export default useScroll;
