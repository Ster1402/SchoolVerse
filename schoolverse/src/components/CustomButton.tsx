import React from 'react';

const CustomButton = ({
  icon,
  title,
  className,
  onClick,
}: {
  icon?: any;
  title: string;
  className: string;
  onClick: () => {};
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-primary w-full flex rounded px-8 py-2 items-center justify-center text-center border-2 border-secondary hover:text-secondary hover:bg-transparent ${className}`}>
      {icon}
      {title}
    </button>
  );
};

export default CustomButton;
