'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Card, Image, Input, Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link'; // Import Link component

const SignupForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNo: Yup.string()
      .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
      .required('Phone Number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    gender: Yup.string().required('Gender is required'),
    role: Yup.string().required('Role is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNo: '',
      fullName: '',
      gender: '',
      role: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      await registerUser(values);
    },
  });

  const registerUser = async (values) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values);
      if (response.data) alert("Registered successfully");
    } catch (error) {
      console.error("Error registering user", error);
      alert("Registration failed: " + error.response?.data?.message || "Unknown error");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <Card className='w-full max-w-md sm:max-w-sm p-4 bg-white rounded-md shadow-sm'>
        <div className="flex justify-center mb-4">
          <Image
            src="./nepseai.png"
            style={{ width: '100%', height: 'auto', maxWidth: '150px' }} 
          />
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="w-full p-2 text-sm border border-gray-300 rounded-md"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 text-sm border border-gray-300 rounded-md"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="phoneNo" className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <Input
              id="phoneNo"
              name="phoneNo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNo}
              className="w-full p-2 text-sm border border-gray-300 rounded-md"
            />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.phoneNo}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="gender" className="block text-xs font-medium text-gray-700 mb-1">Gender</label>
            <div className="relative">
              <Select
                id="gender"
                name="gender"
                onChange={(e) => formik.setFieldValue('gender', e.target.value)}
                onBlur={formik.handleBlur}
                className="w-full p-2 text-sm border border-gray-300 rounded-md"
                placeholder="Select Gender"
                aria-label="Gender"
              >
                <SelectItem key="Male" value="Male">Male</SelectItem>
                <SelectItem key="Female" value="Female">Female</SelectItem>
                <SelectItem key="Others" value="Others">Others</SelectItem>
              </Select>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.gender}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-2 text-sm border border-gray-300 rounded-md"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-medium text-gray-700 mb-1">Role</label>
            <div className="relative">
              <Select
                id="role"
                name="role"
                onChange={(e) => formik.setFieldValue('role', e.target.value)}
                onBlur={formik.handleBlur}
                className="w-full p-2 text-sm border border-gray-300 rounded-md"
                placeholder="Select Role"
                aria-label="Role"
              >
                <SelectItem key="User" value="User">User</SelectItem>
                <SelectItem key="Admin" value="Admin">Admin</SelectItem>
              </Select>
            </div>
            {formik.touched.role && formik.errors.role ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.role}</div>
            ) : null}
          </div>

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm">Submit</Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-xs">Already have an account? <Link href="/home" className="text-blue-600 hover:underline">Login</Link></p>
        </div>
      </Card>
    </div>
  );
};

export default SignupForm;
