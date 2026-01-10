import { useEffect, useRef } from "react";

// 1. Fixed "children" spelling
export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // 2. Destructure the first entry from the array [entry]
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 3. Fixed "visible" spelling to match your CSS
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); // 4. Added empty dependency array

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};