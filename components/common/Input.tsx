export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function TextInput({ className = '', label, error, ...props }: TextInputProps) {
  const baseStyle = `
    w-full rounded border border-input bg-background px-3 py-2
    text-gray-900 placeholder-muted-foreground 
    shadow-sm focus:outline-none focus:ring-2 
    ${className}
    ${error ? 'border-red-500 focus:ring-red-500 ' : 'border-input focus:ring-ring'}
    `

  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input className={baseStyle} {...props} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
