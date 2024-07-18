'use client';

import React from 'react';
import { Badge, Avatar, Input, Radio, RadioGroup } from '@nextui-org/react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {Select, SelectItem} from "@nextui-org/react";

const Register = () => {
  const LoginSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNo: Yup.string()
      .min(9, 'Too Short!')
      .max(11, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    gender: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      phoneNo: '',
      email: '',
      password: '',
      confirm_password: '',
      gender: '',
      role: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      registerUser(values)
     },
    });
    const registerUser =async (values)=>{
      const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values)
      if(data)
        { alert("registered successfully")
        }

  return (
    <form onSubmit={formik.handleSubmit} className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-teal-600 mb-4">Welcome</h1>
        <div className="flex justify-center mb-6">
          <img src="/download.png" alt="Logo" width={100} height={40} className="rounded-lg"/>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Register</h2>
        <div>
          <Input
            id="fullname"
            name="fullname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            clearable 
            bordered 
            placeholder="Enter your Full Name" 
            fullWidth 
          />
          {formik.errors.fullname}
        </div>
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            clearable 
            bordered 
            placeholder="Enter Email ID" 
            fullWidth 
          />
          {formik.errors.email}
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password} 
            clearable 
            bordered 
            placeholder="Enter your password"
            fullWidth 
          />
          {formik.errors.password}
        </div>
        <div>
          <Input
            id="confirm_password"
            name="confirm_password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password} 
            clearable 
            bordered 
            placeholder="Confirm your password"
            fullWidth 
          />
          {formik.errors.confirm_password}
        </div>
        <div>
          <Input 
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            clearable 
            bordered 
            placeholder="Enter your phone number" 
            fullWidth 
          />
          {formik.errors.phone}
        </div>
        <div className="mt-4">
          <RadioGroup 
            label="Select your gender" 
            orientation="horizontal" 
            className="mt-2"
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="Others">Others</Radio>
            
          </RadioGroup>
          {formik.errors.gender}
          <Select name="role" onChange={(e)=>formik.setFieldValue('role', e.target.value)}>
            <SelectItem key="User">Recruiter</SelectItem>
            <SelectItem key="Admin">Freelancer</SelectItem>
        </Select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-teal-700 p-2 text-white rounded-lg mt-4 hover:bg-teal-600 transition-colors"
        >
          Register
        </button>
        <div className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link href="/" className="text-teal-700 font-semibold hover:underline">
            Sign In
          </Link>{' '}
          instead.
        </div>
      </div>
    </form>
  );
}

export default Register;