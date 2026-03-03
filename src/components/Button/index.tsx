import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: ButtonType;
}

const variantStyles: Record<ButtonType, string> = {
  primary: 'bg-primary text-white disabled:bg-gray-400 disabled:text-gray-300',
  secondary: '',
  tertiary: '',
};

export default function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'border-[1.5px] border-transparent rounded-[5px] px-4 py-3 cursor-pointer focus:border-fuchsia',
        variantStyles[type],
      )}
    >
      {children}
    </button>
  );
}