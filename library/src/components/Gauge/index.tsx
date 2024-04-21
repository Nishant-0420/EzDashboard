import React from 'react';

interface GaugeProps {
  value: number; // Value between 0 and 100 for the gauge
  label: string; // Label for the gauge
}

const Gauge: React.FC<GaugeProps> = ({ value, label }) => {
  const gaugeStyle: string = `
    inline-block
    relative
    w-32 h-32
    rounded-full
    bg-gray-200
  `;

  const fillStyle: string = `
    fill-current
    text-xs
    font-bold
  `;

  const progress: number = Math.min(Math.max(value, 0), 100); // Clamp value between 0 and 100

  const circlePath: string = `
    M 16,16 
    A 16,16 0 0 1 ${progress > 50 ? '28.84' : '3.16'},16
    L 16,16
  `;

  const maskPath: string = `
    M 0,0 
    h 32 
    v 32 
    h -32 
    z
  `;

  return (
    <div className={gaugeStyle}>
      <svg viewBox="0 0 32 32">
        <defs>
          <mask id="mask">
            <path d={maskPath} fill="white" />
          </mask>
        </defs>
        <circle cx="16" cy="16" r="16" />
        <path d={circlePath} className={fillStyle} mask="url(#mask)" />
        <text x="16" y="20" dominantBaseline="central" textAnchor="middle">
          {value}%
        </text>
        <text x="16" y="28" dominantBaseline="central" textAnchor="middle">
          {label}
        </text>
      </svg>
    </div>
  );
};

export default Gauge;