type ButtonVariants = 'primary' | 'secondary' | 'outline'
type ButtonSizes = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
  loading?: boolean
}

export default function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    'px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offfset-2 '

  const sizeStyles: Record<ButtonSizes, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  }

  const variants: Record<ButtonVariants, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  }

  return (
    <button
      className={`${baseStyle}  ${variants[variant]} ${sizeStyles[size]} ${className} `}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
