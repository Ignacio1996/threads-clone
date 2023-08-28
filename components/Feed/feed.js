import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread
        authorImage="/avatar2.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        authorImage="/avatar3.svg"
        threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        likes="2 Likes"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        authorImage="/avatar4.svg"
        threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        likes="16 Likes"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        authorImage="/avatar5.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        username="aura"
        timeSpentSincePublished="2min"
      />
    </div>
  );
};

export default Feed;
