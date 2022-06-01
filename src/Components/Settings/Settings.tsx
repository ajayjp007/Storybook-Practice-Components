import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './Settings.css';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../Firebase/firebase';

const Settings = () => {
  const [changeProfilePicture, setChangeProfilePicture] = useState(true);
  const [imageUrl, setImageUrl] = useState<any>();
  const [preview, setPreview] = useState<string>(
    'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png',
  );
  const [failed, setFailed] = useState<boolean>(false);
  const closeProfileHandler = () => {
    setChangeProfilePicture(false);
  };
  const saveChangesHandler = (downloadURL: string) => {
    // send a backend api request to add avatar // update backend
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      email: localStorage.getItem('emailId'),
      avatar: downloadURL,
    });
    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch('http://localhost:5000/api/users/update-avatar', requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => error);
  };

  useEffect(() => {
    const objectUrl = URL.createObjectURL(imageUrl);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageUrl]);

  const uploadImageHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (imageUrl === null) {
      return;
    }
    const storageRef = ref(storage, `images/${imageUrl + v4()} `);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl);
    uploadTask.on(
      'state_changed',
      // (snapshot) => {
      //   const progress =
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   console.log('Upload is ' + progress + '% done');
      //   switch (snapshot.state) {
      //     case 'paused':
      //       console.log('Upload is paused');
      //       break;
      //     case 'running':
      //       console.log('Upload is running');
      //       break;
      //   }
      // },
      (error) => {
        // Handle unsuccessful uploads
        if (error) {
          setFailed(true);
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
          saveChangesHandler(downloadURL);
        });
      },
    );
  };

  return (
    <div className="settings-container">
      {failed && <p>Failed to upload image. Please try again.</p>}
      {!changeProfilePicture && <Navigate to="/UserProfile-page" />}
      <div className="left-container-settings">
        <div className="user-details-container-settings">
          <img className="user-avatar-settings" src={preview} alt="Profile" />
          <p className="username-settings">
            {localStorage.getItem('userName')}
          </p>
        </div>
        <div className="button-container-settings">
          <button className="left-options-btn-settings" type="button">
            Change Password
            <img
              src="https://www.svgrepo.com/show/40039/eye.svg"
              className="icons-settings"
              alt="passsword"
            />
          </button>
          <button className="left-options-btn-settings" type="button">
            Edit user details
            <img
              src="https://www.svgrepo.com/show/356992/view-details.svg"
              className="icons-settings"
              alt="view details"
            />
          </button>
          <button className="left-options-btn-settings" type="button">
            Change username
            <img
              src="https://www.svgrepo.com/show/128722/profile.svg"
              className="icons-settings"
              alt=""
            />
          </button>
          <button className="left-options-btn-settings" type="button">
            Security
            <img
              src="https://www.svgrepo.com/show/331248/security.svg"
              alt="security"
              className="icons-settings"
            />
          </button>
          <button
            className="left-options-btn-settings"
            onClick={closeProfileHandler}
            type="button"
          >
            Close
            <img
              src="https://www.svgrepo.com/show/273966/close.svg"
              alt="Close"
              className="icons-settings"
            />
          </button>
        </div>
      </div>
      <form onSubmit={uploadImageHandler} className="right-container-settings">
        <img src={preview} className="preview-image-settings" alt="preview" />
        <input
          type="file"
          className="custom-file-input-settings"
          accept=".png, .jpg, .jpeg video/mp4,video/x-m4v,video/*"
          onChange={(event: any) => {
            setImageUrl(event.target.files[0]);
          }}
        />
        <button className="save-changes-btn-settings" type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
