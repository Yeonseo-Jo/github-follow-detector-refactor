import { UserProfileInfoTypes } from "@/types/user/UserTypes";
import { instance } from "..";

export const getUserProfileInfo = async () => {
  const { data } = await instance.get<UserProfileInfoTypes>("/user");
  return data;
};
