import { instance } from "..";

export const deleteFollower = async (username: string) => {
  const response = await instance.delete(`/user/following/${username}`);

  return response;
};
