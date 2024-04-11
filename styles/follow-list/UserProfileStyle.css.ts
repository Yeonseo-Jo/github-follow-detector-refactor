import { style } from "@vanilla-extract/css";

export const UserProfileWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",

  width: "40rem",
  height: "25%",
  padding: "3rem 7rem",

  gap: "2rem",

  border: "1px solid #30363d",
  borderRadius: "10px",
});

export const UserInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1rem",
});

export const UserNameTxt = style({
  fontSize: "2.2rem",
});

export const UserBioTxt = style({
  fontSize: "1.6rem",
});

export const CurrentFollowContainer = style({
  display: "flex",
  flexDirection: "column",

  gap: "0.5rem",
});

export const FollowTxt = style({
  fontSize: "1.3rem",

  color: "#848d97",
});

export const FollowCntTxt = style({
  fontSize: "1.4rem",

  color: "#4493f8",
});
