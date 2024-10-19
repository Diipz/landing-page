import { useEffect } from 'react';
import "../styles/loader.css" 

export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const letter = document.getElementById('D');
      if (letter) {
        letter.classList.add('visible');
      }
    }, 2500); // Delay to show the "D" after most of the stroke animation

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="container">
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g
            id="D"
            transform="translate(36, 33)"
            fill="#64FFDA"
            className="hidden" // Initially hidden
            fontFamily="system-ui, Calibre-Medium, Calibre, sans-serif"
            fontSize="50"
            fontWeight="400"
            letterSpacing="4.16666603"
          >
            <text>
              <tspan x="-3" y="33">D</tspan>
            </text>
          </g>
          <path
            stroke="#64FFDA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
            className="stroke-animation"
          />
        </g>
      </svg>
    </div>
  );
}



