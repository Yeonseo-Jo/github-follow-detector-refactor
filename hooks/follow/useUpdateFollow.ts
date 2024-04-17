import { putFollower } from "@/apis/follow/putFollower";
import { QUERY_KEYS } from "@/constants/common/QUERY_KEYS";
import { useGetMutate } from "../common/useGetMutate";

export const useUpdateFollow = () => {
  const queryKey = QUERY_KEYS.user.followInfo;
  const mutationFn = (username: string) => {
    return putFollower(username);
  };

  return useGetMutate(queryKey, mutationFn, { exact: true });
};
