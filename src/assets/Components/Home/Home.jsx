import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Email Password Authentication</h1>
          <p className="mb-5">
          This is a practice project to learn firebase authentication with email and password.
          </p>
          <NavLink className='btn mr-2' to='/signUp'>Sign Up</NavLink>
          <NavLink className='btn mr-' to='/signIn'>Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
