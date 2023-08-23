import Navbar from "../components/Navbar/navbar";
import UserInfo from "../components/UserInfoCol/user-info";
import Feed from "../components/Feed/feed";
import TrendingTopics from "../components/Trending/trending-topics";
import styles from "./index.module.css";
const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Navbar />
        <section className={styles.contentcontainer}>
          <UserInfo />
          <Feed />
          <TrendingTopics />
        </section>
      </main>
    </div>
  );
};

export default Content;
