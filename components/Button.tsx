import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  outline?: boolean;
  classNames?: string;
  // Other HTML button element attributes
}

const Button: React.FC<ButtonProps> = ({ children, primary, outline, ...rest }) => {
  const classes = classNames(
    rest.classNames,
    'text-sm md:text-[16px] py-[14px] md:py-[16px] px-[28px] md:px-[32px] text-white font-medium flex justify-center items-center',
    {
      'bg-primary hover:bg-white border border-primary hover:border hover:text-primary hover:transition-all':
        primary && !outline,
      'border border-primary hover:bg-secondary hover:text-white hover:transition-all hover:border-secondary ':
        outline,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
