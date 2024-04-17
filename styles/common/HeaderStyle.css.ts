import { style } from "@vanilla-extract/css";

export const HeaderWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "7rem",
  padding: "1rem 2rem",
  backgroundColor: "#010409",
  borderBottom: "1px solid #30363d",
});

export const HeaderTitle = style({
  paddingLeft: "2rem",
  fontSize: "2rem",
  color: "#fafbfc",
});
