import styles from "./thread-input.module.css";
const ThreadInput = () => {
  return (
    <div className={styles.threadinput}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <input
            className={styles.shareSomethingCool}
            type="text"
            placeholder="Share something cool today"
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <img className={styles.paperclipIcon} alt="" src="/paperclip.svg" />
          </div>
          <button className={styles.actions2}>
            <img className={styles.sendIcon} alt="" src="/send1.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadInput;
