"use client";

import * as styles from "@/styles/common/ErrorStyle.css";
import { getSessionStorageHandler } from "@/utils/getSessionStorageHandler";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    // 에러 시 sessionStorage에 있는 token 정보 삭제
    if (typeof window === undefined) return;
    if (!getSessionStorageHandler().hasItem) return;

    getSessionStorageHandler().removeItem("token");
  }, []);

  return (
    <section className={styles.ErrorWrapper}>
      <div className={styles.ErrorTxtContainer}>
        <h2 className={styles.ErrorTitleTxt}>🥺 Error 🥺</h2>
        <p className={styles.ErrorDescribTxt}>
          ﹒올바른 token 값인지 확인해주세요
        </p>
      </div>
      <button
        className={styles.ErrorBackBtn}
        type="button"
        onClick={() => router.back()}
      >
        이전으로
      </button>
    </section>
  );
};

export default Error;
