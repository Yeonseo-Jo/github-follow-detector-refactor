import Image from "next/image";

import { UserProfileInfoTypes } from "@/types/user/UserTypes";
import * as styles from "../../styles/follow-list/UserProfileStyle.css";

const UserProfile = ({
  userProfile,
}: {
  userProfile: UserProfileInfoTypes;
}) => {
  const { login, avatar_url, bio, followers, following } = userProfile;

  return (
    <article className={styles.UserProfileWrapper}>
      {avatar_url && (
        <Image
          src={avatar_url}
          width={100}
          height={100}
          alt="유저-프로필-이미지"
          priority
        />
      )}

      <div className={styles.UserInfoContainer}>
        <h2 className={styles.UserNameTxt}>{login}</h2>
        <p className={styles.UserBioTxt}>{bio}</p>
        <div className={styles.CurrentFollowContainer}>
          <p className={styles.FollowTxt}>
            ﹒ <span className={styles.FollowCntTxt}>{followers}</span>{" "}
            followers
          </p>
          <p className={styles.FollowTxt}>
            ﹒ <span className={styles.FollowCntTxt}>{following}</span>{" "}
            following
          </p>
        </div>
      </div>
    </article>
  );
};

export default UserProfile;
