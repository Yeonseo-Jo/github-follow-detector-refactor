import { UserTypes } from "@/types/user/UserTypes";
import { instance } from "..";

const PER_PAGE = 100;

export const getUserFollowInfo = async () => {
  const { data: followingData } = await instance.get<Array<UserTypes>>(
    `/user/following?per_page=${PER_PAGE}`
  );

  const { data: followersData } = await instance.get<Array<UserTypes>>(
    `user/followers?per_page=${PER_PAGE}`
  );

  return { followingData, followersData };
};
