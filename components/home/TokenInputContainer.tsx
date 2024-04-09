"use client";

import { setInstanceToken } from "@/apis";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "../../styles/home/TokenInputContainerStyle.css";

const TokenInputContainer = () => {
  const router = useRouter();

  const [token, setToken] = useState("");

  const handleOnChangeTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickConfirmFollowBtn = () => {
    if (!token) return;
    setInstanceToken(token);

    router.push("/follow-list");
  };

  return (
    <div className={styles.TokenInputBox}>
      <input
        type="text"
        placeholder="Github Token을 입력해주세요"
        className={styles.TokenInput}
        onChange={handleOnChangeTokenInput}
      />
      <button
        type="button"
        className={styles.TokenInputNextBtn}
        onClick={handleClickConfirmFollowBtn}
      >
        나의 맞팔 확인하기
      </button>
    </div>
  );
};

export default TokenInputContainer;
