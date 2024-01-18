"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value })); 
  };

  const handleSubmit = () => {
    alert(`Failed login for ${loginData.email}. User data not captured. Work still in progress.`)
  }

  return (
    <>
      <section className="overscroll-none flex min-h-full w-full flex-1 flex-col sm:flex-row justify-center pt-0 md:pt-[6.5rem]">
        <section
          className="hidden md:flex pt-[19rem] pl-[3rem] lg:pt-[19rem] lg:pl-[8.25rem] w-1/2 h-screen"
          style={{
            background: `lightgray url('/assets/auth_bg_img.jpeg') 50% / cover no-repeat`,
            filter: "brightness(70%) grayscale(10%)",
          }}
        >
          <section className="text-white flex flex-col gap-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Onile</h2>
            <p className="text-base lg:text-xl font-medium">
              Bringing Homes and Hearts Together.
            </p>
          </section>
        </section>

        {/* Form section */}
        <section className="sm:w-1/2 h-screen flex justify-center items-center">
          <section className="border-2 rounded-2xl px-10 py-8 mx-2 md:mx-0 max-w-md">
            <section className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-[#344054] text-2xl font-semibold leading-[1.65rem] tracking-tight">
                Sign In
              </h2>
            </section>

            <section className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <section className="space-y-4">
                <section>
                  <section className="mt-2">
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email address"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                    />
                  </section>
                </section>

                <section>
                  <section className="mt-2 flex items-center">
                    <input
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                    />
                    {passwordVisible ? (
                      <span
                        onClick={() => setPasswordVisible(false)}
                        className="-m-7 text-[#344054B2] cursor-pointer"
                      >
                        <FaEyeSlash />
                      </span>
                    ) : (
                      <span
                        onClick={() => setPasswordVisible(true)}
                        className="-m-7 text-[#344054B2] cursor-pointer"
                      >
                        <FaEye />
                      </span>
                    )}
                  </section>
                </section>

                <section className="flex items-center justify-between">
                  <section className="flex items-center gap-0.5">
                    <input
                      id="check"
                      name="check"
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                      className=""
                    />
                    <label
                      htmlFor="check"
                      className="text-sm font-medium leading-6 text-[#344054B2]"
                    >
                      Remember me
                    </label>
                  </section>
                  <section className="text-sm">
                    <Link
                      href="#"
                      className="font-semibold text-[#FF7F50] hover:text-[#fc6832] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </section>
                </section>

                <section>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-[#FF7F50] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fc6832] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fc6832]"
                  >
                    Sign in
                  </button>
                </section>

                <section>
                  <button
                    type="submit"
                    className="flex w-full justify-evenly items-center rounded-md border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-[#344054] shadow-sm hover:bg-[#CECECEEE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fc6832]"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M15.3958 6.6092L8.86939 6.60889C8.5812 6.60889 8.3476 6.84245 8.3476 7.13063V9.21545C8.3476 9.50357 8.5812 9.73719 8.86936 9.73719H12.5447C12.1422 10.7816 11.3911 11.6562 10.4327 12.212L11.9999 14.9247C14.5137 13.4709 16 10.92 16 8.06449C16 7.65791 15.97 7.36725 15.9101 7.03998C15.8645 6.79132 15.6486 6.6092 15.3958 6.6092Z"
                          fill="#167EE6"
                        />
                        <path
                          d="M7.99843 12.8699C6.19982 12.8699 4.62965 11.8872 3.78634 10.4331L1.07358 11.9967C2.45409 14.3892 5.04022 16.0003 7.99843 16.0003C9.44963 16.0003 10.819 15.6096 11.9985 14.9287V14.925L10.4314 12.2122C9.71458 12.628 8.88505 12.8699 7.99843 12.8699Z"
                          fill="#12B347"
                        />
                        <path
                          d="M12.0003 14.9279V14.9242L10.4332 12.2114C9.71633 12.6271 8.88686 12.8691 8.00018 12.8691V15.9995C9.45138 15.9995 10.8208 15.6088 12.0003 14.9279Z"
                          fill="#0F993E"
                        />
                        <path
                          d="M3.13053 7.99984C3.13053 7.11332 3.37247 6.28392 3.78814 5.56715L1.07537 4.0036C0.390699 5.17943 0 6.54498 0 7.99984C0 9.45469 0.390699 10.8202 1.07537 11.9961L3.78814 10.4325C3.37247 9.71575 3.13053 8.88636 3.13053 7.99984Z"
                          fill="#FFD500"
                        />
                        <path
                          d="M7.99843 3.1304C9.17131 3.1304 10.2487 3.54715 11.0901 4.24036C11.2977 4.41135 11.5995 4.39901 11.7896 4.20886L13.2669 2.73169C13.4826 2.51594 13.4672 2.16279 13.2368 1.96285C11.8269 0.739773 9.99246 0 7.99843 0C5.04022 0 2.45409 1.61114 1.07358 4.00367L3.78634 5.56722C4.62965 4.11308 6.19982 3.1304 7.99843 3.1304Z"
                          fill="#FF4B26"
                        />
                        <path
                          d="M11.0919 4.24036C11.2995 4.41136 11.6013 4.39901 11.7914 4.20886L13.2686 2.73169C13.4844 2.51594 13.469 2.16279 13.2386 1.96285C11.8287 0.739742 9.99424 0 8.00021 0V3.1304C9.17306 3.1304 10.2504 3.54715 11.0919 4.24036Z"
                          fill="#D93F21"
                        />
                      </svg>
                    </span>
                    <span>Sign in with Google</span>
                  </button>
                </section>
              </section>

              <p className="mt-6 text-center text-sm font-normal text-gray-500">
                Don’t have an account,{" "}
                <Link
                  href="/register"
                  className="font-semibold leading-6 text-[#FF7F50] hover:text-[#fc6832] hover:underline"
                >
                  create account
                </Link>{" "}
                now.
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
