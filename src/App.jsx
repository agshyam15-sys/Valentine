import { useEffect, useRef } from "react";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);
  }, []);

  const moveButton = (e) => {
    const button = e.target;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  const sayYes = () => {
    alert("You escaped the Upside Down with me ❤️");
  };

  return (
    <div className="container">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/stranger-things.mp3"
        loop
      />

      <div className="overlay"></div>
      <div className="lightning"></div>

      <h1 className="title">Will You Be My Valentine?</h1>

      <div className="buttons">
        <button className="yes" onClick={sayYes}>
          YES ❤️
        </button>

        <button className="no" onMouseEnter={moveButton}>
          NO 💔
        </button>
      </div>
    </div>
  );
}
