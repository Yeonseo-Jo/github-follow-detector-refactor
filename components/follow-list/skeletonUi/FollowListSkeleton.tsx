/* eslint-disable react/jsx-key */
import * as styles from "@/styles/follow-list/skeletonStyle/FollowListSkeletonStyle.css";
const FollowListSkeleton = () => {
  return (
    <div className={styles.FollowListSkeletonWrapper}>
      <div className={styles.UserProfileSkeleton} />
      <div className={styles.FollowListSkeletonContainer}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div className={styles.FollowListDetailBox}>
            <div
              key={`title-skeleton-${idx}`}
              className={styles.FollowListTitileSkeleton}
            />
            <div
              key={`list-skeleton-${idx}`}
              className={styles.FollowListBoxSkeleton}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowListSkeleton;
