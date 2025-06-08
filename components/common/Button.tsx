import Image from 'next/image'

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'btn_dark_green'
type ButtonSizes = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
  loading?: boolean
  title: string
  icon?: string
  type: 'button' | 'submit'
}

export default function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  title,
  type,
  icon,
  ...props
}: ButtonProps) {
  const baseStyle =
    ' px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offfset-2 '

  const sizeStyles: Record<ButtonSizes, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  }

  const variants: Record<ButtonVariants, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    btn_dark_green: 'btn_dark_green',
  }

  const previosStyle = `${baseStyle}  ${variants[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variants[variant]}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap" htmlFor="">
        {title}
      </label>
    </button>
  )
}
