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
      {login}
      {avatar_url && (
        <Image
          src={avatar_url}
          width={200}
          height={200}
          alt="유저-프로필-이미지"
          priority
        />
      )}

      {bio}
      <div className={styles.CurrentFollowInfo}>
        <p>
          <span>팔로워 : </span>
          <span>{followers}</span>
        </p>
        <p>
          <span>팔로잉 : </span>
          <span>{following}</span>
        </p>
      </div>
    </article>
  );
};

export default UserProfile;
