import Link from "next/link";
import * as styles from "../../styles/home/HomeContainerStyle.css.ts";

const HomePage = () => {
  return (
    <section className={styles.HomeWrapper}>
      <article className={styles.TokenBoxContainer}>
        <div className={styles.TokenLinkBox}>
          <Link
            href={"https://github.com/settings/tokens"}
            className={styles.TokenLinkBtn}
          >
            Github Token 만들러 가기
          </Link>
          <p className={styles.TokenInfoText}>
            ﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!
          </p>
        </div>
        <div className={styles.TokenInputBox}>
          <input
            type="text"
            placeholder="Github Token을 입력해주세요"
            className={styles.TokenInput}
          />
          <button type="button" className={styles.TokenInputNextBtn}>
            나의 맞팔 확인하기
          </button>
        </div>
      </article>
    </section>
  );
};

export default HomePage;
