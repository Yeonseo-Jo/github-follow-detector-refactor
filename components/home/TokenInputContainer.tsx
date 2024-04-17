"use client";

import { getSessionStorageHandler } from "@/utils/getSessionStorageHandler";
import Link from "next/link";
import React, { useState } from "react";
import * as styles from "../../styles/home/TokenInputContainerStyle.css";

const TokenInputContainer = () => {
  const [token, setToken] = useState("");

  const handleOnChangeTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickConfirmFollowBtn = () => {
    getSessionStorageHandler().setItem("token", token);
  };

  return (
    <div className={styles.TokenInputBox}>
      <input
        type="text"
        placeholder="Github Token을 입력해주세요"
        className={styles.TokenInput}
        onChange={handleOnChangeTokenInput}
      />
      <Link href={"/follow-list"}>
        <button
          type="button"
          className={
            token
              ? styles.ActiveTokenInputNextBtn
              : styles.InActiveTokenInputNextBtn
          }
          onClick={handleClickConfirmFollowBtn}
          disabled={!token}
        >
          나의 맞팔 확인하기
        </button>
      </Link>
    </div>
  );
};

export default TokenInputContainer;
