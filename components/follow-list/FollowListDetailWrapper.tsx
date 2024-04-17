import { LIST_TYPE } from "@/constants/follow-list/LIST_TYPE";
import * as styles from "@/styles/follow-list/FollowListDetailWrapperStyle.css";
import { UserTypes } from "@/types/user/UserTypes";
import ListUserCard from "./ListUserCard";

interface FollowListDetailWrapperProps {
  listType: string;
  targetMatchList: UserTypes[];
}

const FollowListDetailWrapper = ({
  listType,
  targetMatchList,
}: FollowListDetailWrapperProps) => {
  const targetListTitle =
    listType === LIST_TYPE.matched ? "맞팔 중인 사람" : "맞팔 아닌 사람";
  return (
    <div className={styles.ListDetailWrapper}>
      <p className={styles.ListTitle}>{targetListTitle}</p>
      <div className={styles.ListUserontainer}>
        {targetMatchList.map((targetUserInfo) => {
          return (
            <ListUserCard
              key={listType}
              listType={listType}
              targetUserInfo={targetUserInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FollowListDetailWrapper;
