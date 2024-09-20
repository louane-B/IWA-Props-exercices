import LightSaberColor from "@types/LightSaberColor"

interface LightSaberProps {
  color: LightSaberColor
}

const ALightSaber = ({ color }: LightSaberProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
      <rect className="svg-blade" x="90" y="45" width="300" height="10" rx="5" ry="5" fill={color} filter={`drop-shadow(0 0 10px ${color})`} />
      <rect x="10" y="40" width="80" height="20" fill="#808080" />
      <rect x="75" y="38" width="10" height="24" fill="#606060" />
      <rect x="35" y="38" width="15" height="24" fill="#606060" />
    </svg>
  )
}

export default ALightSaber