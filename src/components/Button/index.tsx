import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
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
  type = 'button',
  variant,
  fullWidth = false,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'subtitle-s rounded-[5px] px-4 py-3 cursor-pointer outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] flex h-12 justify-center transition-colors disabled:cursor-not-allowed',
        fullWidth ? 'w-full' : 'w-auto',
        variantStyles[variant],
      )}
    >
      {children}
    </button>
  );
}
