export default function PrintingServicesSvg() {
  return (
    <svg
      viewBox="0 0 1400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title"
    >
      <title id="title">#Printing Services Gradient Outline</title>

      <defs>
        <linearGradient id="printingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cab006" />
          <stop offset="33%" stopColor="#ffb700" />
          <stop offset="66%" stopColor="#ff4d00" />
          <stop offset="100%" stopColor="#510000" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="40%"
        textAnchor="middle"
        fontSize="170"
        fontWeight="900"
        fontFamily="Poppins, 'Arial Black', Impact, system-ui, sans-serif"
        fill="none"
        stroke="url(#printingGradient)"
        strokeWidth="11"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        #Printing
        <tspan x="50%" dy="1em" /* pushes the next line down */>
          Services
        </tspan>
      </text>
    </svg>
  );
}
