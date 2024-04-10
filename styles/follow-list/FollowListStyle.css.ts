import { style } from "@vanilla-extract/css";

export const FollowListWrapper = style({
  display: "flex",
  justifyContent: "center",

  height: "75%",
  gap: "5rem",
  paddingBottom: "2rem",

  textAlign: "center",
});

export const ListDetailWrapper = style({
  display: "flex",
  flexDirection: "column",

  height: "100%",
  gap: "1.5rem",

  fontSize: "2rem",
});

export const ListUserontainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  height: "100%",
  padding: "0.5rem 0",
  overflowY: "scroll",
  scrollbarWidth: "thin",
  scrollbarColor: "#30363d #161b22",
});

export const ListTitle = style({
  width: "60%",
  alignSelf: "center",

  padding: "1rem 2rem",
  borderRadius: "20px",

  backgroundColor: "#238636",
  color: "white",
});
