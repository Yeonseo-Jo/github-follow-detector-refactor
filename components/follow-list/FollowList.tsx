import { LIST_TYPE } from "@/constants/follow-list/LIST_TYPE";
import { UserFollowInfoDataTypes } from "@/types/user/UserTypes";
import { useMemo } from "react";
import * as styles from "../../styles/follow-list/FollowListStyle.css";
import FollowListDetailWrapper from "./FollowListDetailWrapper";

const FollowList = ({
  followData,
}: {
  followData: UserFollowInfoDataTypes;
}) => {
  const { followingData, followersData } = followData;

  const getIsMatchInfo = useMemo(() => {
    // 맞팔 중인 사람들 리스트
    const matchedList = followersData.filter((follower) => {
      return followingData.some(
        (following) => following.login === follower.login
      );
    });

    // 나를 팔로우 한 사람들 중 내가 팔로우 하지 않은 사람들 리스트
    const unMatchedList = followersData.filter((follower) => {
      return !matchedList.includes(follower);
    });

    return [
      { type: LIST_TYPE.unMatched, list: unMatchedList },
      { type: LIST_TYPE.matched, list: matchedList },
    ];
  }, [followersData, followingData]);

  const matchListData = getIsMatchInfo;

  return (
    <article className={styles.FollowListWrapper}>
      {matchListData.map(({ type, list }) => {
        return (
          <FollowListDetailWrapper
            key={type}
            listType={type}
            targetMatchList={list}
          />
        );
      })}
    </article>
  );
};

export default FollowList;
