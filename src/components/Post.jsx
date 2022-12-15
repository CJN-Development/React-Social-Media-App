import React, { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);

  const [like, setLike] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();

      setPost(postsFromServer);
    };

    getPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");

    const post = await res.json();

    return post;
  };

  // const [Like, setLike] = useState(post.like);

  // const [isLiked, setIsLiked] = useState(false);

  // const likeHandler = () => {
  //   setLike(isLiked ? Like - 1 : Like + 1);

  //   setIsLiked(!isLiked);
  // };

  // const GG = () => {
  //   setLike(post.Like + 1);
  //   setIsLiked(!isLiked);
  // };

  return (
    <div id="postsSize">
      {post.map((item) => (
        <div id="Posts">
          <div id="PostsPic">
            <img src={item.profilepic} width="75" height="75" />

            <h3 className="PostId">{item.PostId}</h3>
          </div>
          <div id="postBody">
            <p className="PostsText">{item.PostText}</p>
            <div className="Posts">
              <img src={item.PostPic} width="500" height="250" />
            </div>
          </div>
          <div>
            <h2 id="PostLikes" onClick={() => setLike((prevLike) => !prevLike)}>
              {like ? "❤️" : "♡"}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
