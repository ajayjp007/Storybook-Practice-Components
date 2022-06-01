import './Navbar.css';
import React, { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [addPost, setAddPost] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openHome, setOpenHome] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const allUsers = useSelector((state: any) => state.users.users); // get all usernames here
  // const allUsernames: any = [];
  // const storeUsers = users.users;

  useEffect(() => {}, []);
  // storeUsers.map((item: any) => allUsernames.push(item.username));
  // const searchUsersHandler = () => {
  //   const searchResult = allUsernames.filter((element: string) => {
  //     return element.includes(searchInputRef.current!.value);
  //   });
  //   (searchResult);
  // };
  const AddNewPostHandler = () => {
    setAddPost(true);
    setOpenProfile(false);
    setOpenHome(false);
  };
  const openProfileHandler = () => {
    setOpenProfile(true);
    setAddPost(false);
    setOpenHome(false);
  };
  const homeHandler = () => {
    setAddPost(false);
    setOpenHome(true);
    setOpenProfile(false);
  };

  return (
    <div className="header-home">
      {addPost && <Navigate to="/newPost-page" />}
      {openProfile && <Navigate to="/UserProfile-page" />}
      {openHome && <Navigate to="/home-page" />}
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        id="logo-home"
      />
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        ref={searchInputRef}
        // onChange={searchUsersHandler}
      />
      <div className="icons-container-navbar">
        <button
          type="button"
          className="home-btn"
          onClick={homeHandler}
          aria-label="Home"
        />
        <button
          type="button"
          className="messages-btn"
          title="Feature will be added soon."
          aria-label="Messages"
        />
        <button
          type="button"
          className="addNewPost-btn"
          onClick={AddNewPostHandler}
          aria-label="Add new post"
        />
        <button
          type="button"
          className="navigation-btn"
          title="Feature will be added soon."
          aria-label="Navigation"
        />
        <button
          type="button"
          className="heart-btn"
          title="Feature will be added soon."
          aria-label="Heart"
        />
        <button
          type="button"
          className="profile-btn"
          onClick={openProfileHandler}
          aria-label="Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
