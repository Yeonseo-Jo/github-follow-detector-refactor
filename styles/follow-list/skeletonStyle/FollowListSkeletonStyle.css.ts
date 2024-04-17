import { keyframes, style } from "@vanilla-extract/css";

// 로딩 애니메이션 생성
const SkeletonAnimation = keyframes({
  "0%": {
    opacity: "0.2",
  },
  "50%": {
    opacity: "0.5",
  },
  "100%": {
    opacity: "0.2",
  },
});

export const FollowListSkeletonWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  gap: "2rem",
});

const SkeletonCommonStyle = style({
  alignSelf: "center",

  backgroundColor: "#30363d",
  animation: `${SkeletonAnimation} 1.5s infinite`,
});

export const UserProfileSkeleton = style([
  SkeletonCommonStyle,
  {
    width: "40rem",
    height: "25%",
    borderRadius: "10px",
  },
]);

export const FollowListSkeletonContainer = style({
  display: "flex",
  alignSelf: "center",

  height: "75%",
  width: "50%",

  paddingBottom: "2rem",
});

export const FollowListDetailBox = style({
  display: "flex",
  flexDirection: "column",

  width: "80%",
  height: "100%",
  gap: "1.5rem",
});

export const FollowListTitileSkeleton = style([
  SkeletonCommonStyle,
  {
    width: "50%",
    height: "4rem",

    borderRadius: "20px",
  },
]);

export const FollowListBoxSkeleton = style([
  SkeletonCommonStyle,
  {
    height: "100%",
    width: "60%",
  },
]);
