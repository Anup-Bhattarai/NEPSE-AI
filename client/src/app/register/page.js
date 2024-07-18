'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Card, Image, Input, Select, SelectItem } from '@nextui-org/react';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className='w-full max-w-lg p-8 m-4 bg-white rounded-lg shadow-md'>
        <div className="flex justify-center mb-6">
          <Image
            src="./nepseai.png"
            style={{ width: '100%', height: 'auto', maxWidth: '250px' }} 
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <Input
              id="phoneNo"
              name="phoneNo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNo}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
              <div className="text-red-500 text-sm">{formik.errors.phoneNo}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="relative">
              <Select
                id="gender"
                name="gender"
                onChange={(e) => formik.setFieldValue('gender', e.target.value)}
                onBlur={formik.handleBlur}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Select Gender"
                aria-label="Gender"
              >
                <SelectItem key="Male" value="Male">Male</SelectItem>
                <SelectItem key="Female" value="Female">Female</SelectItem>
                <SelectItem key="Others" value="Others">Others</SelectItem>
              </Select>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <div className="relative">
              <Select
                id="role"
                name="role"
                onChange={(e) => formik.setFieldValue('role', e.target.value)}
                onBlur={formik.handleBlur}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Select Role"
                aria-label="Role"
              >
                <SelectItem key="User" value="User">User</SelectItem>
                <SelectItem key="Admin" value="Admin">Admin</SelectItem>
              </Select>
            </div>
            {formik.touched.role && formik.errors.role ? (
              <div className="text-red-500 text-sm">{formik.errors.role}</div>
            ) : null}
          </div>

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignupForm;
