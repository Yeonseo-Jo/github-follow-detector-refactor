"use client";

import { setInstanceToken } from "@/apis";
import Error from "@/components/common/Error";
import FollowList from "@/components/follow-list/FollowList";
import UserProfile from "@/components/follow-list/UserProfile";
import FollowListSkeleton from "@/components/follow-list/skeletonUi/FollowListSkeleton";
import { useGetCombinedUserInfo } from "@/hooks/user/useGetCombinedUserInfo";
import { getSessionStorageHandler } from "@/utils/getSessionStorageHandler";
import * as styles from "../../styles/follow-list/FollowListPageContainerStyle.css";

const FollowListPage = () => {
  const token: string | null =
    typeof window !== "undefined"
      ? getSessionStorageHandler().getItem("token")
      : null;
  const isHasToken =
    typeof window !== "undefined"
      ? getSessionStorageHandler().hasItem("token")
      : false;
  const { isLoading, error, data } = useGetCombinedUserInfo();

  if (!isHasToken || !token) return <Error />;
  setInstanceToken(token);

  const userProfileData = data[0];
  const followData = data[1];

  return (
    <section className={styles.FollowListPageWrapper}>
      {isLoading && <FollowListSkeleton />}
      {error && <Error />}
      {!isLoading && !error && (
        <UserProfile
          userProfile={userProfileData}
          followCnt={{
            following: followData.followingData.length,
            followers: followData.followersData.length,
          }}
        />
      )}
      {!isLoading && !error && <FollowList followData={followData} />}
    </section>
  );
};

export default FollowListPage;
