const getPosts = () => {
  return (dispatch: any) => {
    //nameless functions
    // Initial action dispatched
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const requestOptions: any = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const fetchData = async () => {
        await fetch(
          'http://localhost:5000/api/posts/get-all-posts',
          requestOptions,
        )
          .then((response) => response.json())
          .then((result) => {
            dispatch({ type: 'POST-LOADED', payload: result.posts });
          })
          .catch((error) => error);
      };
      fetchData().catch();
    } catch (err) {
      // handle errors
    }
  };
};
export default getPosts;
// dispatch({ type: 'POST-LOADED', payload: result.posts });
// Return promise with success and failure actions
// return axios.get('/api/auth/user').then(
//   (user) => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
//   (err) => dispatch({ type: GET_CURRENT_USER_FAILURE, err }),
//     );
//   };
// };
