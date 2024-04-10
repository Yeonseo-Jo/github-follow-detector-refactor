import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetMutate = (
  queryKey: QueryKey,
  mutationFn: (...args: string[]) => Promise<AxiosResponse<unknown, unknown>>,
  options = {}
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey, ...options });
    },
  });

  return mutation.mutate;
};
