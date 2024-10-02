export function BentoBoxCompartment ({ children, size }) {
  return (
    <div className={`bento-box-compartment ${size}`}>
      {children}
    </div>
  )
}
