import React from 'react';
import { cssColors, tailwindThemeClasses } from '../themes';

interface TextInputProps {
  label: string;
  description: string;
  error: string;
  errorColor: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | undefined;
  placeholder: string;
  disabled: boolean;
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  textcolor?:'light'|'dark'|undefined;  

}

const TextInput: React.FC<TextInputProps> = ({
  label,
  description,
  error,
  errorColor = 'text-red-500',
  size = 'md',
  color = 'primary',
  placeholder = 'This is placeholder',
  disabled = false,
  radius = 'none',
  textcolor = 'light',

}) => {
  return (
    <div className="flex flex-col items-start">
      {label && <label className="text-gray-700">{label}</label>}
      {description && <span className="text-gray-500 text-sm">{description}</span>}
      <input
        style={{ border: `1px solid ${cssColors.colors[color]}`, 
                 backgroundColor: cssColors.colors[color],}}
        type="text"
        className={`py-3 px-4 border  ${tailwindThemeClasses.radius[radius ]} text-sm focus:border-blue-500 focus:ring-blue-500 ${disabled ? 'opacity-50 pointer-events-none' : ''
          } dark:bg-slate-900 dark:border-gray-700 ${tailwindThemeClasses.textcolor[textcolor]} dark:focus:ring-gray-600`}
        placeholder={placeholder}
        disabled={disabled}
      />

      {error && <span className={`${errorColor} text-sm`}>{error}</span>}
    </div>
  );
};

export default TextInput;