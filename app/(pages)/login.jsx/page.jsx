import React, { useState } from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import { FcGoogle } from "react-icons/fc";
import { HiEye } from "react-icons/hi";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  let [eye, setEye] = useState(false);

  return (
    <div className="bg-purple-100 py-10">
      <Container>
        <Flex className="items-center justify-between px-10 py-5 bg-white m-auto rounded-md w-[400px] h-[450px] shadow-sm border border-gray-300 flex-col">
          <h1 className="text-lg font-mont font-semibold">
            Login to your account
          </h1>
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer hover:border-black w-full h-[60px] px-4 pt-5 rounded-md border border-gray-400 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 
                   peer-placeholder-shown:text-base
                   peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-blue-500 bg-white px-1"
            >
              Email Id
            </label>
          </div>
          <div className="relative w-full">
            <input
              type={eye ? "text" : "password"}
              id="password"
              placeholder=" "
              className="peer w-full h-[60px] px-4 pt-5 rounded-md border border-gray-400 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
            />

            <label
              htmlFor="password"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 
                   peer-placeholder-shown:text-base
                   peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-blue-500 bg-white px-1"
            >
              Password
            </label>
            <button
              onClick={() => setEye(!eye)}
              className="absolute right-2 top-1/3 -translate-y-1/3 text-gray-500  w-8 h-8 rounded-full hover:bg-gray-200 duration-150 cursor-pointer flex justify-center items-center"
            >
              {eye ? <IoMdEyeOff /> : <HiEye />}
            </button>
          </div>
          <h1 className="text-md pr-42 hover:text-red duration-200 cursor-pointer font-mont font-semibold">
            Forgot Password?
          </h1>
          <button
            className="font-semibold rounded-md w-full py-3 bg-red text-white uppercase text-sm cursor-pointer duration-300"
            type="submit"
          >
            LOGIN
          </button>
          <p className="text-sm text-gray-800">
            Not Registered?{" "}
            <span className="text-red font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>
          <p className="text-sm text-gray-950">
            Or continue with social account
          </p>
          <button
            className="font-semibold flex items-center justify-center gap-4 rounded-md w-full py-3 text-black uppercase text-sm cursor-pointer duration-300 bg-gray-100"
            type="submit"
          >
            <FcGoogle size={23} />
            LOGIN WITH GOOGLE
          </button>
        </Flex>
      </Container>
    </div>
  );
};

export default Login;