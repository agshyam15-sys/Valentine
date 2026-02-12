import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const handleClick = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(55, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);

      osc.start();

      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);
  }, []);

  const moveButton = (e) => {
    const button = e.target;
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  const sayYes = () => {
    alert("You escaped the Upside Down with me ❤️");
  };

  return (
    <div className="container">
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
