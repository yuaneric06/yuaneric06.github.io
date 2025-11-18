export default function PixelStar(props) {
  return (
    <div className={`inline-block ${props.className}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="6" y="0" width="4" height="2" />
        <rect x="4" y="2" width="2" height="2" />
        <rect x="6" y="2" width="4" height="2" />
        <rect x="10" y="2" width="2" height="2" />
        <rect x="2" y="4" width="2" height="2" />
        <rect x="4" y="4" width="8" height="2" />
        <rect x="12" y="4" width="2" height="2" />
        <rect x="0" y="6" width="16" height="2" />
        <rect x="2" y="8" width="12" height="2" />
        <rect x="4" y="10" width="2" height="2" />
        <rect x="6" y="10" width="4" height="2" />
        <rect x="10" y="10" width="2" height="2" />
        <rect x="6" y="12" width="4" height="2" />
        <rect x="6" y="14" width="4" height="2" />
      </svg>
    </div>
  );
}