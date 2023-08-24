import styles from "./thread.module.css";
const Thread = ({
  authorImage,
  threadContent,
  likes,
  username,
  timeSpentSincePublished,
  id,
  getThreads,
}) => {
  const addLike = async () => {
    console.log("thread.js 10 | adding like");
    try {
      const request = await fetch(`/api/threads/${id}`, {
        method: "PUT",
        body: JSON.stringify({ type: "addLike", id }),
      });
      const data = await request.json();
      getThreads();
      console.log("thread.js 15 | data", data);
    } catch (error) {
      console.log("thread.js 17 | error", error);
    }
  };

  const deleteThread = async () => {
    try {
      const request = await fetch(`/api/threads/${id}`, {
        method: "DELETE",
      });
      const data = await request.json();
      getThreads();
      console.log("thread.js 31 | data", data);
    } catch (error) {
      console.log("thread.js 31 | error deleting", error.message);
    }
  };
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={authorImage} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.username}>{username}</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>{timeSpentSincePublished}</div>
                <div className={styles.dots} onClick={deleteThread}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContent}</div>
          </div>
          <div className={styles.actions} onClick={addLike}>
            <img className={styles.likeIcon} alt="" src="/like3.svg" />
          </div>
          <div className={styles.reactions}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
