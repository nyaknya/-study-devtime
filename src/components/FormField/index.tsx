import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  helperType?: 'success' | 'error';
  className?: string;
  children?: ReactNode;
}

export default function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  helperText,
  helperType,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <label htmlFor={id} className="label-m text-gray-600">
        {label}
      </label>
      <div className="relative">
        <div className="flex gap-3">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-4 py-3 flex-1 bg-gray-50 rounded-[5px] outline-none placeholder:text-gray-300 focus:text-gray-800 [&:not(:placeholder-shown):not(:focus)]:text-gray-600 focus:[outline:1.5px_solid_var(--color-fuchsia)] ${helperType === 'error' ? '[outline:1.5px_solid_var(--color-negative)]' : ''}`}
          />
          {children}
        </div>
        {helperText && (
          <p className={`absolute top-full mt-2 caption-m ${helperType === 'success' ? 'text-positive' : 'text-negative'}`}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}