import TokenInputContainer from "@/components/home/TokenInputContainer.tsx";
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
        <TokenInputContainer />
      </article>
    </section>
  );
};

export default HomePage;
