"use client"
import styles from '../../styles/main.module.scss';


const FavoritePosts = () => {
  const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];

  const reversedLikedPosts = likedPosts.slice().reverse();

  return (
    <div className={styles.favoritesContainer}>
      <h2 className={styles.favorite}>Favorite Posts</h2>
      {reversedLikedPosts.length > 0 ? (
        <div className={styles.favoritePostsGrid}>
          {reversedLikedPosts.map((post) => (
  <div key={post.id}>
    <section>
      
      <div className={styles.post}>
        <div className={styles.user}>
        <img className={styles.userIcon} src={post.userimg} alt="User" />
          <p className={styles.name}>{post.name}</p>
        </div>
        <img className={styles.img} src={post.img} alt="" />
        <div className={styles.info}>
          <div className={styles.likes}>
            <span> &nbsp;{post.likes} likes</span>
          </div>
        </div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.hashtags}>{post.hashtags}</div>
        <div className={styles.comments}>
          <span className={styles.icon}>💬</span>
          <span>{post.comments}</span>
        </div>
      </div>
    </section>
  </div>
))}

        </div>
      ) : (
        <p>No favorite posts found.</p>
      )}
    </div>
  );
};

export default FavoritePosts;
