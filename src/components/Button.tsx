import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline_primary';
  className?: string;
  target?: string;
  download?: string; 
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  variant = 'primary',
  target,
  download, 
  ...rest
}) => {
  const baseStyles = 'relative flex btn cursor-pointer py-3 px-6 rounded-full transition duration-300';

  const variantStyles = {
    primary: 'bg-red-600  text-white border border-red-600 hover:border-red-400',
    outline_primary: 'border border-red-600 text-red-600 hover:bg-red-100',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  };

  const combined = classNames(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={combined}
        target={target}
        rel={rest.rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
      >
        <span className="hover-span bg-red-400"></span>
        <span className="btn-text flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={combined}
      {...rest}
    >
      <span className="hover-span bg-red-400 "></span>
      <span className="btn-text flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
