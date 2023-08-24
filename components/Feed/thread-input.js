import { useState } from "react";
import styles from "./thread-input.module.css";
const ThreadInput = ({ getThreads }) => {
  const [input, setInput] = useState("");

  const postThread = async () => {
    try {
      const request = await fetch("/api/threads", {
        method: "POST",
        body: JSON.stringify({ content: input, user: "Nico from CLIENT POST" }),
      });
      const data = await request.json();
      getThreads();
      setInput("");
      console.log("thread-input.js 12 | data", data);
    } catch (error) {
      console.log("thread-input.js 14 | error", error.message);
    }
  };
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <img className={styles.paperclipIcon} alt="" src="/paperclip.svg" />
          </div>
          <button className={styles.actions2} onClick={postThread}>
            <img className={styles.sendIcon} alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadInput;
