'use client';

import React from "react";
import { useFormik } from "formik";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import * as Yup from "yup";

// Validation schema for form
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Required"),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-red-500">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full"
      >
        <div className="flex flex-col items-center mb-8">
          <img src="/nepseai.png" alt="Stock Logo" width={240} height={120} className="rounded mb-6" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative">
            <Input
              isRequired
              type="email"
              placeholder="Enter your Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full border-2 border-blue-500 rounded-md px-4 py-3 bg-gray-100"
              autoComplete="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="relative">
            <Input
              isRequired
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full border-2 border-blue-500 rounded-md px-4 py-3 bg-gray-100"
              autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <p className="text-center text-green-600 mt-4">
          <Link href="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
        </p>

        <Button type="submit" className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 mt-4">
          Login
        </Button>

        <div className="relative flex py-4 items-center mt-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Button className="w-full bg-white border border-gray-300 py-3 rounded-xl flex items-center justify-center mt-2 hover:bg-gray-100">
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign Up with Google
        </Button>

        <Button className="w-full bg-white border border-gray-300 py-3 rounded-xl flex items-center justify-center mt-2 hover:bg-gray-100">
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff5722"
              d="M6 6H22V22H6z"
              transform="rotate(-180 14 14)"
            ></path>
            <path
              fill="#4caf50"
              d="M26 6H42V22H26z"
              transform="rotate(-180 34 14)"
            ></path>
            <path
              fill="#ffc107"
              d="M26 26H42V42H26z"
              transform="rotate(-180 34 34)"
            ></path>
            <path
              fill="#03a9f4"
              d="M6 26H22V42H6z"
              transform="rotate(-180 14 34)"
            ></path>
          </svg>
          Sign Up with Microsoft
        </Button>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account yet?{" "}
          <span className="text-green-600 hover:underline">
            <Link href="/register">Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
