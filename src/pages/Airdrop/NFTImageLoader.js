import ContentLoader from "react-content-loader";

export const NFTImageLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={260}
    viewBox="0 0 220 260"
    backgroundColor="#1e1e1e"
    foregroundColor="#121212"
    {...props}
  >
    <rect x="10" y="50" rx="0" ry="0" width="200" height="200" />
  </ContentLoader>
)