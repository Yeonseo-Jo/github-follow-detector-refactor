import img_github_logo_white from "@/public/images/img_github_logo_white.png";
import Image from "next/image";
import Link from "next/link";
import * as styles from "../../styles/common/HeaderStyle.css";

const Header = () => {
  return (
    <header className={styles.HeaderWrapper}>
      <Link href="/">
        <Image
          src={img_github_logo_white}
          alt="깃허브-로고"
          width={30}
          height={30}
        />
      </Link>
      <h1 className={styles.HeaderTitle}>깃허브 팔로우 탐지기</h1>
    </header>
  );
};

export default Header;
