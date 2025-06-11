export interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className = "" }: SpinnerProps) {
  return (
    <div
      className={`border-4 border-primary border-t-transparent rounded-full w-8 h-8 animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}
