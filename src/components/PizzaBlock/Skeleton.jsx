import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="NaN" cy="NaN" r="NaN" />
    <rect x="NaN" y="329" rx="0" ry="0" width="NaN" height="39" />
    <rect x="NaN" y="331" rx="0" ry="0" width="NaN" height="14" />
    <rect x="NaN" y="353" rx="0" ry="0" width="NaN" height="0" />
    <rect x="NaN" y="357" rx="0" ry="0" width="NaN" height="1" />
    <rect x="NaN" y="407" rx="0" ry="0" width="NaN" height="0" />
    <circle cx="138" cy="138" r="138" />
    <rect x="0" y="306" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="360" rx="10" ry="10" width="280" height="88" />
    <rect x="75" y="494" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="469" rx="8" ry="8" width="95" height="30" />
    <rect x="129" y="467" rx="25" ry="25" width="150" height="45" />
  </ContentLoader>
)

export default Skeleton