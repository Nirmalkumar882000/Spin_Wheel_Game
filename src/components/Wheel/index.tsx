import { useState } from 'react';

const Wheel = ({ segments }: { segments: number }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (!spinning) {
      const randomRotation = Math.floor(Math.random() * 360) + 360 * 5; // 5 full spins
      setRotation(randomRotation);
      setSpinning(true);

      setTimeout(() => {
        setRotation(0);
        setSpinning(false);
      }, 3000); // Adjust the duration of the spin
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div
          className={`wheel ${spinning ? 'spinning' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {Array.from({ length: segments }).map((_, index) => (
            <div key={index} className={`segment segment-${index + 1}`} />
          ))}
        </div>
        <button onClick={spinWheel} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Spin
        </button>
      </div>
    </div>
  );
};

export default Wheel;
