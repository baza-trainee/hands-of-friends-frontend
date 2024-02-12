import React from "react";
import ContentLoader from "react-content-loader";
import { skeletonConfig } from "../helpers/helperSceleton";

const UniversalSkeleton = ({ id, type }) => {
  const config = skeletonConfig[type] || skeletonConfig.team;
  
  return (
    <ContentLoader
      speed={config.speed}
      width={config.width}
      height={config.height}
      viewBox={config.viewBox}
      backgroundColor="#F1F5F9"
      foregroundColor="#D9D9D9"
      uniqueKey={id}
    >
      {config.shapes.map((shape, index) => (
        <rect key={index} {...shape} />
      ))}
    </ContentLoader>
  );
};

export default UniversalSkeleton;
