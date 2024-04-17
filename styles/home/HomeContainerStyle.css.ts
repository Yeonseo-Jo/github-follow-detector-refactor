import { style } from "@vanilla-extract/css";

export const HomeWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  padding: "0 15rem",
});

export const TokenBoxContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "100%",
  height: "30rem",
  padding: "2rem",
  gap: "3rem",

  borderRadius: "10px",
  border: "1.5px solid #30363d",

  backgroundColor: "#0D1117",
});

export const TokenLinkBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.4rem",
});

export const TokenLinkBtn = style({
  width: "fit-content",
  padding: "1rem",

  backgroundColor: "#292e36",
  color: "#C9D1D9",

  borderRadius: "10px",
  border: "1px solid #30363d",

  fontSize: "1.5rem",
  textDecoration: "none",

  ":hover": {
    backgroundColor: "#4493f8",
    color: "#30363d",
    border: "1px solid #30363d",
  },
});

export const TokenInfoText = style({
  color: "#4493f8",
  fontSize: "1.2rem",
});
