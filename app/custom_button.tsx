import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      className={`border-2 px-1.6 border-blue-800 rounded-md bg-blue-200 text-20px text-blue-800`}
      {...props}
    >

      {children}
    </button>
  );
};

export default CustomButton;
