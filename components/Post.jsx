"use client"
import { useState, useEffect } from 'react';
import styles from '../styles/main.module.scss';

const Post = ({ postItem }) => {
  const [isClient, setIsClient] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (postItem) {
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
      const isPostLiked = likedPosts.some((post) => post.id === postItem.id);

      setIsLiked(isPostLiked);

      const likedPost = likedPosts.find((post) => post.id === postItem.id);
      if (likedPost) {
        setLikes(likedPost.likes);
      } else {
        setLikes(postItem.likes);
      }
    }
  }, [postItem]);


  if (!isClient || !postItem) {
    return null;
  }

  const { id, description, name, img, comments, userimg, hashtags, } = postItem;

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
  
    if (!isLiked) {
      const updatedLikedPosts = [
        ...likedPosts,
        {
          id,
          name,
          description,
          likes: likes + 1,
          img,
          comments,
          userimg: postItem.userimg, 
          hashtags: postItem.hashtags, 
        },
      ];
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      const updatedLikedPosts = likedPosts.filter((post) => post.id !== id);
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };
  


  return (
    <section className={styles.container}>
      <div className={styles.post}>
        <div className={styles.user}>
          <img className={styles.userIcon} src={userimg} />
          <p className={styles.name}>{name}</p>
        </div>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.info}>
          <button className={styles.button} onClick={handleLike}>
            {isLiked ? '❤' : '♡'}
          </button>
          <div className={styles.likes}>
            <span>{likes} likes</span>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.hashtags}>{hashtags}</div>
        <div className={styles.comments}>
          <span className={styles.icon}>💬</span>
          <span>{comments}</span>
        </div>
      </div>
    </section>
  );
};

export default Post;
