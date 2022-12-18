// this is out post component wher we display the post that are found in the db.json. We got this to work quite easily and it was very fun! 


import React, { useEffect, useState } from "react";

const Post = () => {

  // The state varibles post and like 
  const [post, setPost] = useState([]);

  // We attempted to get a like button to work correctly but for some reason it wouldnt update correctly at all 

  const [like, setLike] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();

      setPost(postsFromServer);
    };

    getPosts();
  }, []);
// this function fetches the post data from the db.json and then it allows us to map through all the individual things that we need 
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");

    const post = await res.json();

    return post;
  };

  // THIS IS WHERE WE ATTEMPTED TO SET UP A LIKE BUTTON BUT IT WOULDNT WORK AT ALL 

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



//  This is where we map through all the data from the posts data and then displays it to the user on the screen 
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
