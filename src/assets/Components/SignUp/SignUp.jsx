import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState();
  const [success, setSuccess] = useState();
  const [togglePass, setTogglePass] = useState(false)
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password);

    // reset error or success
    setSignUpError("");
    setSuccess("");

    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters or longer");
      return;
    }

    else if(!/[A-Z]/.test(password)){
        setSignUpError('Your password should have at lest one uppercase characters')
        return
    }
    
    else if(!accepted){
        setSignUpError('Please accept our terms and conditions!')
        return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
           <div className="relative">
           <input
              type={ togglePass? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
              />
              <span 
              className="absolute top-1/3 right-2 cursor-pointer"
              onClick={()=> setTogglePass(!togglePass)}>
                {
                    togglePass? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>
                }
              </span>
           </div>
          </div>
          <div className="mt-2">
            <input type="checkbox" name="terms" id="termsAndC" />
            <label className="ml-2" htmlFor="termsAndC">Accept our Terms & Conditions</label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        <div className="text-center px-8 pb-4">
          {signUpError && (
            <p className="text-red-500">{signUpError}</p>
          )}
          {success && <p className="text-green-500 ">{success}</p>}
        </div>
        <div className="text-center mb-4">
          Already have an account? <NavLink to="/signIn">Sign In</NavLink>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
