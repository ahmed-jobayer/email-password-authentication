import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import { useRef, useState } from "react";

const SignIn = () => {
  const [signUpError, setSignUpError] = useState();
  const [success, setSuccess] = useState();
  const emailRef = useRef(null)

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error or success
    setSignUpError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User signed in successfully");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const handleForgetPassword = () =>{
    const email = emailRef.current.value
    if(!email){
        console.log('Please enter an email', email)
        return
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        console.log("Enter an valid email")
        return
    }
    // send validation email
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Email sent successfully")
    })
    .catch((error) => {
      console.log(error)
    });

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center px-8 pb-4">
          {signUpError && <p className="text-red-500">{signUpError}</p>}
          {success && <p className="text-green-500 ">{success}</p>}
        </div>
        <div className="text-center mb-4">
          Do not have an account? <NavLink to="/signUp">Sign Up</NavLink>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
