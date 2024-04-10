import { putFollower } from "@/apis/follow/putFollower";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateFollow = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (username: string) => {
      return putFollower(username);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userFollowInfo"],
        exact: true,
      });
    },
  });

  return mutation.mutate;
};
