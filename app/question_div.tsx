import React from 'react';
import clsx from 'clsx'

interface QuestionDivProps {
  children: React.ReactNode;
  className?: string;
}

const QuestionDiv: React.FC<QuestionDivProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white my-5 mx-5 pt-3 pb-4 px-4 flex items-center justify-between", 
    className)}>
      {children}
    </div>
  );
};

export default QuestionDiv;
