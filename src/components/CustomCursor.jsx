import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform = `translate3d(
        ${mouseX}px,
        ${mouseY}px,
        0
      )`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      follower.style.transform = `translate3d(
        ${followerX}px,
        ${followerY}px,
        0
      )`;

      requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        "button, a, .interactive, .potential-card, .gallery-item, .activity-card, .summary-card",
      );

      if (target) {
        follower.classList.add("cursor-active");
        cursor.classList.add("cursor-dot-active");
      }
    };

    const handleMouseOut = (event) => {
      const target = event.target.closest(
        "button, a, .interactive, .potential-card, .gallery-item, .activity-card, .summary-card",
      );

      if (target) {
        follower.classList.remove("cursor-active");
        cursor.classList.remove("cursor-dot-active");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animateFollower();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={cursorRef}></div>

      <div className="custom-cursor-follower" ref={followerRef}></div>
    </>
  );
}

export default CustomCursor;
