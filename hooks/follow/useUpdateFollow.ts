import { putFollower } from "@/apis/follow/putFollower";
import { useGetMutate } from "../common/useGetMutate";

export const useUpdateFollow = () => {
  const queryKey = ["userFollowInfo"];
  const mutationFn = (username: string) => {
    return putFollower(username);
  };

  return useGetMutate(queryKey, mutationFn, { exact: true });
};
