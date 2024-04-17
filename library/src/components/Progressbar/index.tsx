import React from 'react';
import { cssColors, tailwindThemeClasses,  } from '../../themes/themes';

interface ProgressBarProps {
  value: number;
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'| undefined;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light'| undefined;
  size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'| undefined;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, radius='md', color='primary', size='md' }) => {
  const tooltipText = `Progress: ${value}%`;

  
  const progressValue = Math.min(value, 100);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white dark:text-gray-800 bg-blue-500 dark:bg-blue-300">
            {tooltipText}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-500 dark:text-blue-300">
            {progressValue}%
          </span>
        </div>
      </div>
      <div style={{ width: `${progressValue}%`, backgroundColor: cssColors.colors[color] }} className={`overflow-hidden h-2 mb-4 text-xs flex dark:bg-blue-500 ${tailwindThemeClasses.radius[radius]}  ${tailwindThemeClasses.sizes[size]}`}>
        <div className={`shadow-none w-full flex flex-col text-center whitespace-nowrap text-white justify-center `}></div>
      </div>
    </div>
  );
};



export default ProgressBar;