import React from 'react'
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="w-4 h-4 text-foreground bg-background border-border rounded focus:ring-2 focus:ring-primary"
        {...props}
      />
      <label htmlFor={id} className="text-foreground select-none">
        {label}
      </label>
    </div>
  )
}
