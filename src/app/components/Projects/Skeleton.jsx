import React from "react";
import ContentLoader from "react-content-loader";


const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={360}
    height={860}
    viewBox="0 0 360 860"
    backgroundColor="#afaaaa"
    foregroundColor="#eee2e2"
    {...props}
  >
    <rect x="258" y="41" rx="0" ry="0" width="1" height="0" /> 
    <rect x="239" y="31" rx="0" ry="0" width="2" height="0" /> 
    <rect x="98" y="192" rx="0" ry="0" width="9" height="3" /> 
    <rect x="90" y="187" rx="0" ry="0" width="2" height="3" /> 
    <rect x="0" y="0" rx="0" ry="0" width="360" height="400" /> 
    <rect x="0" y="524" rx="0" ry="0" width="360" height="336" /> 
    <rect x="1" y="432" rx="0" ry="0" width="360" height="36" /> 
    <rect x="0" y="472" rx="0" ry="0" width="200" height="36" />
  </ContentLoader>
)
export default Skeleton;