export default function Reveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
