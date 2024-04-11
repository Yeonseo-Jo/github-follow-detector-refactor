"use client";

import * as styles from "@/styles/common/ErrorStyle.css";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();

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
