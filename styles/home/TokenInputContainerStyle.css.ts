import { style } from "@vanilla-extract/css";

export const TokenInputBox = style({
  display: "flex",
  flexDirection: "column",

  gap: "2rem",
});

export const TokenInput = style({
  width: "100%",
  height: "5rem",
  padding: "2rem",

  border: "1px solid #30363d",
  borderRadius: "1rem",

  backgroundColor: "#161b22",
  color: "#e6edf3",

  fontSize: "1.4rem",

  "::placeholder": {
    fontSize: "1.4rem",
  },

  ":focus": {
    outline: "1px solid #1f6feb",
    color: "#e6edf3",
  },
});

export const TokenInputNextBtnBase = style({
  width: "100%",
  height: "4.5rem",

  color: "#C9D1D9",

  borderRadius: "10px",

  fontSize: "1.7rem",
});

export const ActiveTokenInputNextBtn = style([
  TokenInputNextBtnBase,
  { backgroundColor: "#238636" },
]);

export const InActiveTokenInputNextBtn = style([
  TokenInputNextBtnBase,
  { backgroundColor: "#292e36" },
]);
