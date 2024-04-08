import { Inter } from "next/font/google";
import React from "react";
import * as styles from "../styles/common/LayoutStyle.css";
import ReactQueryProvider from "./ReactQueryProvider";
import Header from "./common/Header";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <body className={inter.className}>
      <ReactQueryProvider>
        <Header />
        <main className={styles.LayoutMainStyle}>{children}</main>
      </ReactQueryProvider>
    </body>
  );
};

export default Layout;
