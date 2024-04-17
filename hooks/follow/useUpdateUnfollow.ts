import { deleteFollower } from "@/apis/follow/deleteFollower";
import { QUERY_KEYS } from "@/constants/common/QUERY_KEYS";
import { useGetMutate } from "../common/useGetMutate";

export const useUpdateUnfollow = () => {
  const queryKey = QUERY_KEYS.user.followInfo;
  const mutationFn = (username: string) => {
    return deleteFollower(username);
  };

  return useGetMutate(queryKey, mutationFn, { exact: true });
};
