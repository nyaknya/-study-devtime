import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
}

const variantStyles: Record<ButtonType, string> = {
  primary:
    'bg-primary text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_90%,black)] disabled:bg-gray-400 disabled:text-gray-300',
  secondary:
    'bg-primary-10 text-primary hover:bg-[color-mix(in_srgb,var(--color-primary-10)_90%,black)] disabled:bg-gray-200 disabled:text-gray-400',
  tertiary:
    'bg-gray-50 text-primary hover:bg-[color-mix(in_srgb,var(--color-gray-50)_90%,black)] disabled:bg-gray-200 disabled:text-gray-400',
};

export default function Button({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'subtitle-s rounded-[5px] px-4 py-3 cursor-pointer outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] inline-flex h-12 transition-colors duration-200 disabled:cursor-not-allowed',
        variantStyles[type],
      )}
    >
      {children}
    </button>
  );
}
