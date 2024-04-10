import { UserFollowInfoDataTypes } from "@/types/user/UserTypes";
import Image from "next/image";
import * as styles from "../../styles/follow-list/FollowListStyle.css";

const FollowList = ({
  followData,
}: {
  followData: UserFollowInfoDataTypes;
}) => {
  const { followingData, followersData } = followData;

  // 맞팔 중인 사람들 리스트
  const matchedList = followersData.filter((follower) => {
    return followingData.some(
      (following) => following.login === follower.login
    );
  });

  // 나를 팔로우 한 사람들 중 내가 팔로우 하지 않은 사람들 리스트
  const unMatchedList = followersData.filter((follower) => {
    return !matchedList.includes(follower);
  });

  return (
    <article className={styles.FollowListWrapper}>
      <div className={styles.ListDetailWrapper}>
        <p className={styles.ListTitle}>맞팔 아닌 사람</p>
        <div className={styles.ListUserontainer}>
          {unMatchedList.map(({ login, bio, avatar_url }) => {
            return (
              <div key={login} className={styles.ListUserCard}>
                {avatar_url && (
                  <Image
                    src={avatar_url}
                    width={80}
                    height={80}
                    alt="unMatched-user-img"
                  />
                )}
                <p className={styles.LoginId}>{login}</p>
                <p>{bio}</p>
                <button id={login} className={styles.FollowUnFollowBtn}>
                  팔로우
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.ListDetailWrapper}>
        <p className={styles.ListTitle}>맞팔 중인 사람</p>
        <div className={styles.ListUserontainer}>
          {matchedList.map(({ login, bio, avatar_url }) => {
            return (
              <div key={login} className={styles.ListUserCard}>
                {avatar_url && (
                  <Image
                    src={avatar_url}
                    width={80}
                    height={80}
                    alt="matched-user-img"
                  />
                )}
                <p className={styles.LoginId}>{login}</p>
                <p>{bio}</p>
                <button id={login} className={styles.FollowUnFollowBtn}>
                  언팔로우
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default FollowList;
