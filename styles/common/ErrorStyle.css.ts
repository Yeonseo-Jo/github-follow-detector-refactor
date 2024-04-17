import { style } from "@vanilla-extract/css";

export const ErrorWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  gap: "8rem",
});

export const ErrorTxtContainer = style({
  display: "flex",
  flexDirection: "column",

  gap: "2rem",
  textAlign: "center",
});

export const ErrorTitleTxt = style({
  fontSize: "3.5rem",
});

export const ErrorDescribTxt = style({
  fontSize: "2rem",
});

export const ErrorBackBtn = style({
  width: "30rem",
  height: "4.5rem",

  color: "#C9D1D9",

  borderRadius: "10px",

  fontSize: "1.7rem",
  backgroundColor: "#238636",
});
