import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './container/HomePage/HomePage';
import Login from './Components/Login/Login';
import NewPost from './Components/NewPost/NewPost';
import OtherProfile from './Components/OtherProfiles/OtherProfiles';
import Profile from './Components/ProfilePage/Profile';
import Settings from './Components/Settings/Settings';
import SignUp from './Components/Signup/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login-page" />} />
      <Route path="/signup-page" element={<SignUp />} />
      <Route path="/login-page" element={<Login />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/newPost-page" element={<NewPost />} />
      <Route path="/UserProfile-page" element={<Profile />} />
      <Route path="/other-profile" element={<OtherProfile />} />
      <Route path="/user-settings" element={<Settings />} />
    </Routes>
  );
};
export default App;
