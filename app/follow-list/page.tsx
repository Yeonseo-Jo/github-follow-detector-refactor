"use client";

import { useGetCombinedUserInfo } from "@/hooks/user/useGetCombinedUserInfo";

const FollowListPage = () => {
  const { isLoading, error, data } = useGetCombinedUserInfo();

  console.log(isLoading, error, data);
  return <div>follow-list</div>;
};

export default FollowListPage;
