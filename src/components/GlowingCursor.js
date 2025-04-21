import React, { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_20px_10px_rgba(253,224,71,0.5)]"></div>
      </div>
    </>
  );
};

export default GlowingCursor;
