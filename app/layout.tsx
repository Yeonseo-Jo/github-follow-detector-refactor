import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../components/common/ReactQueryProvider";
import "../styles/common/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "github 맞팔 탐지기",
  description: "github 팔로우 상태를 보여주는 맞팔 탐지기입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
