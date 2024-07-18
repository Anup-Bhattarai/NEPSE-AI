'use client'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button, Card, Image, Input, Select, SelectItem } from '@nextui-org/react';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNo: '',
      fullName: '',
      gender: '',
      role: ''
    },
    onSubmit: values => {
     registerUser(values)
    },
  });

  const registerUser =async (values)=>{
  const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values)
  if(data) alert("registered successfully")
  }
  return (
    <Card className='flex justify-center m-12 p-12'>
    
      <Image src="./hustle_logo.jpg" width={100}
         height={100}/>

 <form  onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Email</label>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="lastName">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="email">Phone Number</label>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
   <label htmlFor="email">Full Name</label>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
         <label htmlFor="email">Gender</label>

<Select name="role" onChange={(e)=>formik.setFieldValue('role', e.target.value)}>
    <SelectItem key="Male">Male</SelectItem>
    <SelectItem key="Female">Female</SelectItem>
    <SelectItem key="Others">Others</SelectItem>

</Select>
            <label htmlFor="role">Role</label>

        <Select name="role" onChange={(e)=>formik.setFieldValue('role', e.target.value)}>
            <SelectItem key="User">Recruiter</SelectItem>
            <SelectItem key="Admin">Freelancer</SelectItem>
        </Select>

      <Button type="submit">Submit</Button>
    </form>
    </Card>
   
  );
};

export default SignupForm