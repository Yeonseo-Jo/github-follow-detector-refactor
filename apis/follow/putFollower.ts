import { instance } from "..";

export const putFollower = async (username: string) => {
  const response = await instance.put(`/user/following/${username}`);

  return response;
};
