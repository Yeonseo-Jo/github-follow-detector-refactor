import { getUserFollowInfo } from "@/apis/user/getUserFollowInfo";
import { getUserProfileInfo } from "@/apis/user/getUserProfileInfo";
import { UserProfileInfoTypes, UserTypes } from "@/types/user/UserTypes";
import { useQueries } from "@tanstack/react-query";

export const useGetCombinedUserInfo = () => {
  return useQueries({
    queries: [
      { queryKey: ["userProfileInfo"], queryFn: () => getUserProfileInfo() },
      { queryKey: ["userFollowInfo"], queryFn: () => getUserFollowInfo() },
    ],
    combine: (results) => {
      return {
        isLoading: results.some((result) => result.isLoading),
        error: results.some((result) => result.isError),
        data: results.map((result) => result.data) as [
          UserProfileInfoTypes,
          {
            followingData: UserTypes[];
            followersData: UserTypes[];
          }
        ],
      };
    },
  });
};
