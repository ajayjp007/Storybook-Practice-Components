import React, { useEffect, Fragment, useState, useRef } from 'react';
import './HomePage.css';
import Comments from '../../Components/Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
// import Card from '../Card/Card';
import '../Card/Card.css';
import { Card } from '../../stories/Card';
import Navbar from '../Navbar/Navbar';
import UserProfile from '../../Components/UserProfile/UserProfile';
import getPosts from '../../Store/thunk';

const HomePage = () => {
  const dispatch = useDispatch();
  const [liked, setIsLiked] = useState<boolean>(false);
  const [postSaved, setPostIsSaved] = useState<boolean>(false);
  const [moreOptions, setMoreOptions] = useState<boolean>(false);
  const [commentPosted, setCommentPosted] = useState<boolean>(false);
  const [openComments, setOpenComment] = useState<boolean>(false);
  const inputCommentRef = useRef<HTMLInputElement>(null);

  const closeModalHandler = () => {
    setMoreOptions(false);
  };
  const likeHandler = () => {
    setIsLiked(!liked);
    //  const myHeaders = new Headers();
    //  myHeaders.append('Content-Type', 'application/json');
    //  const raw = JSON.stringify({
    //    id: items.id,
    //    username: localStorage.getItem('userName'),
    //  });
    //  const requestOptions: any = {
    //    method: 'POST',
    //    headers: myHeaders,
    //    body: raw,
    //    redirect: 'follow',
    //  };
    //  fetch('http://localhost:5000/api/posts/add-likes', requestOptions)
    //    .then((response) => response.text())
    //    .then((result) => result)
    //    .catch((error) => error);
  };
  const savePostHandler = () => {
    setPostIsSaved(!postSaved);
  };
  const moreOptionsHandler = () => {
    setMoreOptions(true);
  };
  const postCommentsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputCommentRef.current?.value.trim().length === 0) {
      return;
    }
    //    setCommentPosted(true);
    //    const myHeaders = new Headers();
    //    myHeaders.append('Content-Type', 'application/json');
    //    const raw = JSON.stringify({
    //      id: items.id,
    //      comment: {
    //        username: localStorage.getItem('userName'),
    //        Comment: inputCommentRef.current?.value,
    //      },
    //    });
    //    const requestOptions: any = {
    //      method: 'POST',
    //      headers: myHeaders,
    //      body: raw,
    //      redirect: 'follow',
    //    };
    //    fetch('http://localhost:5000/api/posts/add-new-comments', requestOptions)
    //      .then((response) => response.text())
    //      .then((result) => result)
    //      .catch((error) => error);

    //    setTimeout(() => {
    //      inputCommentRef.current!.value = '';
    //      setCommentPosted(false);
    //    }, 3000);
    //  };
  };
  const openCommentsHandler = () => {
    setOpenComment(!openComments);
  };
  const posts = useSelector((state: any) => state.posts.posts);
  useEffect(() => {
    getPosts();
    // try {
    //   const myHeaders = new Headers();
    //   myHeaders.append('Content-Type', 'application/json');
    //   const requestOptions: any = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow',
    //   };
    //   const fetchData = async () => {
    //     await fetch(
    //       'http://localhost:5000/api/posts/get-all-posts',
    //       requestOptions,
    //     )
    //       .then((response) => response.json())
    //       .then((result) => {
    //         dispatch({ type: 'POST-LOADED', payload: result.posts });
    //       })
    //       .catch((error) => error);
    //   };
    //   fetchData().catch();
    // } catch (err) {
    //   // handle errors
    // }
  }, []);

  return (
    <Fragment key={Math.floor(Math.random() * 1000000000)}>
      <Navbar />
      <div className="main-content-container">
        <div className="story-posts-container">
          {/* <StoryBox />     */}
          {posts.map((items: any) => {
            return (
              <Card
                key={Math.floor(Math.random() * 1000000000)}
                imageUrl={items.imageURL}
                variant="centered"
                cardHeader={items.name}
                cardFooter={
                  <Fragment>
                    <div className="post-details">
                      <span className="save-like-posts-container">
                        <span className="like-share-comment">
                          <button
                            aria-label="like"
                            type="button"
                            onClick={likeHandler}
                            className={
                              !liked
                                ? 'like-icons-btn-card'
                                : 'liked-icon-btn-card'
                            }
                          />
                          <button
                            aria-label="comment"
                            type="button"
                            className="comment-icon-btn-card"
                            onClick={openCommentsHandler}
                          />
                          <button
                            type="button"
                            className="share-icon-btn-card"
                            aria-label="share"
                          />
                        </span>
                        <button
                          aria-label="save post"
                          type="button"
                          onClick={savePostHandler}
                          className={
                            !postSaved
                              ? 'save-posts-icon-btn'
                              : 'saved-posts-icon-btn'
                          }
                        />
                      </span>
                      <div className="card-footer">
                        <p className="usernames-card-footer">
                          Likes
                          {` ${items.like.length}`}
                        </p>
                        <p>
                          <span className="usernames-card-footer">
                            {items.name}
                          </span>
                          {` ${items.caption}`}
                        </p>
                        <button
                          type="button"
                          className="grey-color-text-card-bottom"
                          onClick={openCommentsHandler}
                        >
                          View all comments
                        </button>
                        <p className="grey-color-text-card-bottom">
                          Posted on
                          {` ${items.uploadedDate}`}
                        </p>
                      </div>
                      {openComments && <Comments comments={items.comment} />}
                    </div>
                    <form
                      className="add-comments-container"
                      onSubmit={postCommentsHandler}
                    >
                      <input
                        type="text"
                        className="comments-input"
                        placeholder="Add a comment..."
                        ref={inputCommentRef}
                      />
                      <button className="post-btn" type="submit">
                        {commentPosted ? 'Posting...' : 'Post'}
                      </button>
                    </form>
                  </Fragment>
                }
              />
            );
            // return <Card data={items} key={Math.floor(Math.random() * 100)} />;
          })}
        </div>
        <UserProfile />
      </div>
    </Fragment>
  );
};

export default HomePage;
