import { LIST_TYPE } from "@/constants/follow-list/LIST_TYPE";
import { useUpdateFollow } from "@/hooks/follow/useUpdateFollow";
import { useUpdateUnfollow } from "@/hooks/follow/useUpdateUnfollow";
import * as styles from "@/styles/follow-list/ListUserCardStyle.css";
import { UserTypes } from "@/types/user/UserTypes";
import Image from "next/image";
import React from "react";

interface ListUserCardProps {
  listType: string;
  targetUserInfo: UserTypes;
}

const ListUserCard = ({ listType, targetUserInfo }: ListUserCardProps) => {
  const updateUnfollow = useUpdateUnfollow();
  const updateFollow = useUpdateFollow();

  const targetUpdate =
    listType === LIST_TYPE.matched
      ? { action: updateUnfollow, btnTxt: "언팔로우" }
      : { action: updateFollow, btnTxt: "팔로우" };

  const { login, bio, avatar_url } = targetUserInfo;
  return (
    <div key={login} className={styles.ListUserCard}>
      {avatar_url && (
        <Image
          src={avatar_url}
          width={80}
          height={80}
          alt="unMatched-user-img"
        />
      )}
      <p className={styles.LoginId}>{login}</p>
      <p>{bio}</p>
      <button
        id={login}
        className={styles.FollowUnFollowBtn}
        onClick={(e: React.MouseEvent) => {
          targetUpdate.action(e.currentTarget.id);
        }}
      >
        {targetUpdate.btnTxt}
      </button>
    </div>
  );
};

export default ListUserCard;
