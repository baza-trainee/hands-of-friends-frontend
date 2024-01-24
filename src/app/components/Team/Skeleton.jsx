import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={3}
    width={243}
    height={430}
    viewBox="0 0 243 430"
    backgroundColor="#F1F5F9"
    foregroundColor="#D9D9D9"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="243" height="290" />
    <rect x="12" y="302" rx="0" ry="0" width="219" height="32" />
    <rect x="12" y="342" rx="0" ry="0" width="219" height="32" />
    <rect x="12" y="386" rx="0" ry="0" width="219" height="28" />
  </ContentLoader>
);
export default Skeleton;
