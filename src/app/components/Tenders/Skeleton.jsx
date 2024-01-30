import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = ({id}) => (
  <ContentLoader 
    speed={2}
    width={360}
    height={318}
    viewBox="0 0 360 318"
    backgroundColor="#afaaaa"
    foregroundColor="#eee2e2"
    uniqueKey={id}
  >
    <rect x="258" y="41" rx="0" ry="0" width="1" height="0" /> 
    <rect x="239" y="31" rx="0" ry="0" width="2" height="0" /> 
    <rect x="98" y="192" rx="0" ry="0" width="9" height="3" /> 
    <rect x="90" y="187" rx="0" ry="0" width="2" height="3" /> 
    <rect x="24" y="72" rx="0" ry="0" width="312" height="219" /> 
    <rect x="24" y="24" rx="0" ry="0" width="76" height="27" /> 
    <rect x="260" y="24" rx="0" ry="0" width="76" height="27" />
  </ContentLoader>
)
export default Skeleton;