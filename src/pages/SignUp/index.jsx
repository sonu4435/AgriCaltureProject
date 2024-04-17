import { auth, gitProvider, provider } from "Server/FireBase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const navigate = useNavigate();

  const [values, setVaues] = useState({
    email: "",
    password: ""
  });

  const [buttonDisable, setButtonDisable] = useState(false);


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidEmail = validateEmail(values.email);


  // Validate using email validation
  const handleSubmit = () => {
    if (values.email === "" || values.password === "") {
      toast.error("Please fill all the fields", {
        position: "top-right",
      });
      return;
    }

    if (!isValidEmail) {
      toast.error("Invalid Email", {
        position: "top-right",
      });
      return;
    }

    if (values.password.length < 8) {
      toast.error("Password should be minimum 8 characters", {
        position: "top-right",
      });
      return;
    }

    setButtonDisable(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.email.split("@")[0],
        });
        setVaues({ email: "", password: "" });
        toast.success("User created successfully");
        setTimeout(() => {
          navigate(`/${user.uid}/home`);
        }, 1000);
      })
      .catch((err) => {
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email already in use");
        }
      })
      .finally(() => {
        setButtonDisable(false);
      });
  };


  // Validate using OAuth (google) validation
  const handleGoogleSubmit = () => {
    signInWithPopup(auth, provider).then((res) => {
      const user = res.user;
      setTimeout(() => {
        toast.success("user Successfully registered");
      }, 1000);
      navigate(`/${user.uid}/home`);
    }).catch((err) => {
      toast.error(err.message);
    })
  }


  // Validate using OAuth (Github) validation
  const handleGithubSubmit = () => {
    signInWithPopup(auth, gitProvider).then((res) => {
      const user = res.user;
      setTimeout(() => {
        toast.success("user Successfully registered");
      }, 1000);
      navigate(`/${user.uid}/home`);
    }).catch((err) => {
      toast.error(err.message);
    })
  }

  return (
    <>
      <div className="min-h-screen bg-gray-500/30 text-gray-900 flex items-center justify-center h-screen w-screen">
        <ToastContainer />
        <div className="max-w-screen w-full h-full  m-0 sm:m-20 bg-white sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-indigo-100 text-center flex lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')]"></div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 py-20 sm:p-12 bg-white-A700 px-52 h-full relative">
          <div className="flex items-center justify-start mb-8 absolute top-14 left-20 -translate-x-1/2 -translate-y-1/2">
            <button className="flex items-center justify-center text-gray-800 font-bold bg-transparent border-none focus:outline-none">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M29 12H5M12 19l-7-7 7-7" />
              </svg>
              <Link to={"/"}>Go Back</Link>
            </button>
          </div>
          <div className="mt-12 relative flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold py-10">
              Sign up for Krishi setu
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button onClick={handleGoogleSubmit} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>

                <button onClick={handleGithubSubmit} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                  </div>
                  <span className="ml-4">Sign Up with FaceBook</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full h-12 px-8 py-4  rounded-lg font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  onChange={(event) =>
                    setVaues((prevousValue) => ({ ...prevousValue, email: event.target.value }))
                  }
                  value={values.email}
                />
                <input
                  className="w-full h-12 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  onChange={(event) =>
                    setVaues((prevousValue) => ({ ...prevousValue, password: event.target.value }))
                  }
                  value={values.password}
                />
                <button disabled={buttonDisable} className="mt-5 disabled:bg-indigo-300 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={handleSubmit}>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-lg text-gray-600 text-center space-y-3  py-4">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted py-2"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted capitalize py-4 pt-1"
                    >
                    and its
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
