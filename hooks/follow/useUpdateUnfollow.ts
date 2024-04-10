import { deleteFollower } from "@/apis/follow/deleteFollower";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUnfollow = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (username: string) => {
      return deleteFollower(username);
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
