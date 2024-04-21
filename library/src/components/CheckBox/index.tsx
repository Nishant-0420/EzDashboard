import React from 'react';

interface CheckboxProps {
  options: {
    label: string;
    value: string;
    defaultChecked?: boolean;
  }[];
  color?: string;
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'outline';
}

const Checkbox: React.FC<CheckboxProps> = ({
  options,
  color = 'bg-blue-500',
  radius = 'md',
  size = 'md',
  variant = 'filled',
}) => {
  return (
    <div className="w-max">
      {options.map((option, index) => (
        <label key={index} className="block text-gray-700 my-1 flex items-center">
          <input
            type="checkbox"
            name="checkbox-example"
            className={`mr-2 w-${size} h-${size} appearance-none checked:${variant === 'filled' ? 'bg-' : 'border-'}${color} border border-gray-300 rounded-${radius} cursor-pointer focus:ring-2 focus:ring-${color} focus:ring-opacity-50`}
            value={option.value}
            defaultChecked={option.defaultChecked}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;