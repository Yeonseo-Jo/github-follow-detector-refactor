"use client";

import UserProfile from "@/components/follow-list/UserProfile";
import { useGetCombinedUserInfo } from "@/hooks/user/useGetCombinedUserInfo";

const FollowListPage = () => {
  const { isLoading, error, data } = useGetCombinedUserInfo();

  const userProfileData = data[0];

  console.log(isLoading, error, data);

  return (
    <>
      {isLoading && <div>로딩중..</div>}
      {error && <div>에러 발생!</div>}
      {!isLoading && !error && <UserProfile userProfile={userProfileData} />}
    </>
  );
};

export default FollowListPage;
