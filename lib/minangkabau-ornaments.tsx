export function GonjongRoofline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} preserveAspectRatio="none">
      {/* Curved roofline inspired by Rumah Gadang's distinctive shape */}
      <path
        d="M 0 80 Q 100 20, 200 20 Q 300 20, 400 80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function BuffaloHornAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className}>
      {/* Subtle buffalo horn shape used in Minangkabau headdresses and rooflines */}
      <path d="M 30 35 Q 20 15, 10 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 30 35 Q 40 15, 50 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function TraditionalFlowerMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className}>
      {/* Stylized floral pattern inspired by Rumah Gadang wall carvings */}
      <circle cx="40" cy="40" r="8" fill="currentColor" />
      <circle cx="40" cy="25" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="55" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="25" cy="40" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="55" cy="40" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="28" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="28" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="52" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="52" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function MatriarchalSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      {/* Circle representing matriarchal center - women as keeper of home and lineage */}
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="30" cy="30" r="2" fill="currentColor" />
    </svg>
  )
}
