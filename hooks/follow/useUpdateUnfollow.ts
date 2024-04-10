import { deleteFollower } from "@/apis/follow/deleteFollower";
import { useGetMutate } from "../common/useGetMutate";

export const useUpdateUnfollow = () => {
  const queryKey = ["userFollowInfo"];
  const mutationFn = (username: string) => {
    return deleteFollower(username);
  };

  return useGetMutate(queryKey, mutationFn, { exact: true });
};
