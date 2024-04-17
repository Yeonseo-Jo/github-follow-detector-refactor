import type { Metadata } from "next";

import Layout from "@/components/Layout";
import "../styles/globalStyle.css";

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
      <Layout>{children}</Layout>
    </html>
  );
}
