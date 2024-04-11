"use client";

import { setInstanceToken } from "@/apis";
import FollowList from "@/components/follow-list/FollowList";
import UserProfile from "@/components/follow-list/UserProfile";
import { useGetCombinedUserInfo } from "@/hooks/user/useGetCombinedUserInfo";
import { getSessionStorageHandler } from "@/utils/getSessionStorageHandler";
import * as styles from "../../styles/follow-list/FollowListPageContainerStyle.css";

const FollowListPage = () => {
  const token: string | null = getSessionStorageHandler().getItem("token");
  const isHasToken = getSessionStorageHandler().hasItem("token");
  const { isLoading, error, data } = useGetCombinedUserInfo();

  if (!isHasToken || !token) return <div>에러 발생!</div>;
  setInstanceToken(token);

  const userProfileData = data[0];
  const followData = data[1];

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
