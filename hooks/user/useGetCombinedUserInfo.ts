import { getUserFollowInfo } from "@/apis/user/getUserFollowInfo";
import { getUserProfileInfo } from "@/apis/user/getUserProfileInfo";
import { QUERY_KEYS } from "@/constants/common/QUERY_KEYS";
import { UserProfileInfoTypes, UserTypes } from "@/types/user/UserTypes";
import { useQueries } from "@tanstack/react-query";

export const useGetCombinedUserInfo = () => {
  return useQueries({
    queries: [
      {
        queryKey: QUERY_KEYS.user.profileInfo,
        queryFn: () => getUserProfileInfo(),
      },
      {
        queryKey: QUERY_KEYS.user.followInfo,
        queryFn: () => getUserFollowInfo(),
      },
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
