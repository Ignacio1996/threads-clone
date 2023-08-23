import styles from "./trending-topics.module.css";
const TrendingTopics = () => {
  return (
    <div className={styles.infos}>
      <div className={styles.infos1}>
        <div className={styles.title}>
          <h2 className={styles.trendingTopics}>Trending Topics</h2>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
        </div>
      </div>
      <div className={styles.treanding}>
        <div className={styles.topic}>
          <div className={styles.design}>Design</div>
          <div className={styles.threadsdesktop}>ThreadsDesktop</div>
          <div className={styles.kThreads}>123.9k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>movies and series</div>
          <div className={styles.threadsdesktop}>
            Spider-Man: Across the Spider-Verse
          </div>
          <div className={styles.kThreads}>93.4k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>tech</div>
          <div className={styles.threadsdesktop}>iPhone 15</div>
          <div className={styles.kThreads}>85.2k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>games</div>
          <div className={styles.threadsdesktop}>Riot Games</div>
          <div className={styles.kThreads}>71.9k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>Design</div>
          <div className={styles.threadsdesktop}>#Minimalism</div>
          <div className={styles.kThreads}>69.1k threads</div>
        </div>
      </div>
      <div className={styles.seeMore}>see more</div>
    </div>
  );
};

export default TrendingTopics;
