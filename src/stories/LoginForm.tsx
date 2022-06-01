import './LoginForm.css';

interface LoginFormProps {
  backgroundColor?: string;
  logoUrl: string;
}

export const LoginForm = ({
  backgroundColor,
  logoUrl,
  ...props
}: LoginFormProps) => {
  return (
    <div className="right-container-login" style={{ backgroundColor }}>
      <div className="right-container-main">
        <img id="logo-login" alt="logo" src={logoUrl} />
        <form className="form-login">
          <input
            required
            placeholder="Phone number, username, or email"
            type="text"
            className="input-login"
          />
          <input
            required
            placeholder="Password"
            className="input-login"
            type="password"
          />
          <button className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

//   return (
//     <div className="main-container">
//       <img
//         src="https://images.unsplash.com/photo-1572096082124-9e8ac147b085?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
//         alt=""
//         className="left-img-login"
//       />
//       {loginSuccess && <Navigate to="/home-page" />}

//       <div className="right-container-login">
//         <div className="right-container-main">
//           <img
//             id="logo-login"
//             alt="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
//           />
//           <form className="form-login" onSubmit={loginHandler}>
//             <input
//               required
//               ref={usernameInputRef}
//               placeholder="Phone number, username, or email"
//               type="text"
//               className="input-login"
//             />
//             <input
//               required
//               ref={passwordInputRef}
//               placeholder="Password"
//               className="input-login"
//               type="password"
//             />
//             <button className="login-btn">Log In</button>
//           </form>
//           {loginFailed && (
//             <p className="warning-messages">Wrong username or password</p>
//           )}
//           <span>OR</span>

//           <span className="login-with-fb">
//             <img
//               src="https://image.similarpng.com/very-thumbnail/2020/04/Popular-facebook-Logo-png.png"
//               alt="facebook logo"
//               id="fb-logo"
//             />{' '}
//             <p>Log in with Facebook</p>{' '}
//           </span>
//           <p>Forgot Password?</p>
//         </div>

//         <div className="right-container-2">
//           <p>
//             Dont have an account?{' '}
//             <a className="sign-up" href="/signup-page">
//               Sign Up
//             </a>
//           </p>
//         </div>

//         <div className="right-store-container">
//           Get The App
//           <div className="store-icons-container">
//             <img
//               src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-6.jpg"
//               alt="App store"
//               className="store-icons"
//             />
//             <img
//               src="https://miro.medium.com/max/1400/1*OIIv4FEjJQMqh-zEPhtlYA.png"
//               alt="Play store"
//               className="store-icons"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
