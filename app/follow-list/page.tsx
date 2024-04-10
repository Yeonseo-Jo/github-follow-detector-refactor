"use client";

import FollowList from "@/components/follow-list/FollowList";
import UserProfile from "@/components/follow-list/UserProfile";
import { useGetCombinedUserInfo } from "@/hooks/user/useGetCombinedUserInfo";
import * as styles from "../../styles/follow-list/FollowListPageContainerStyle.css";

const FollowListPage = () => {
  const { isLoading, error, data } = useGetCombinedUserInfo();

  const userProfileData = data[0];
  const followData = data[1];

  console.log(isLoading, error, data);

  return (
    <section className={styles.FollowListPageWrapper}>
      {isLoading && <div>로딩중..</div>}
      {error && <div>에러 발생!</div>}
      {!isLoading && !error && (
        <UserProfile
          userProfile={userProfileData}
          followCnt={{
            following: followData.followingData.length,
            followers: followData.followersData.length,
          }}
        />
      )}
      {followData && <FollowList followData={followData} />}
    </section>
  );
};

export default FollowListPage;
