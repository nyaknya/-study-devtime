import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  helper?: { text?: string; type?: 'success' | 'error' };
  className?: string;
  children?: ReactNode;
}

export default function FormField({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  helper,
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
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`px-4 py-3 flex-1 bg-gray-50 rounded-[5px] placeholder:text-gray-300 focus:text-gray-800 [&:not(:placeholder-shown):not(:focus)]:text-gray-600 ${helper?.type === 'error' ? '[outline:1.5px_solid_var(--color-negative)]' : 'outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)]'}`}
          />
          {children}
        </div>
        {helper?.text && (
          <p className={`absolute top-full mt-2 caption-m ${helper.type === 'success' ? 'text-positive' : 'text-negative'}`}>
            {helper.text}
          </p>
        )}
      </div>
    </div>
  );
}