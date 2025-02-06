"use client";
import React from "react";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import shoppingman from "../../public/shoppingman.webp";
import { useState,useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(6, "First name must be at least 5 characters")
    .max(20, "First name must be at most 20 characters")
    .required("First name is required"),
  lastname: Yup.string()
    .min(6, "Last name must be at least 5 characters")
    .max(20, "Last name must be at most 20 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be between 8 and 15 characters")
    .max(15, "Password must be between 8 and 15 characters")
    .matches(/[!@#$%^&*()_+><]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const User = () => {

  const [todoList,setTodoList] = useState([])
  useEffect(()=>{
    const storedtodos = JSON.parse(localStorage.getItem("todoList"))|| []; 
    setTodoList(storedtodos)
  },[])

const handleDelete = (index)=>{
  const deletetodos = todoList.filter((_, i) => i !== index);
  setTodoList(deletetodos)
  localStorage.setItem("todoList",JSON.stringify(deletetodos))
};

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    enableReinitialize:true,
    onSubmit: (values , {resetForm}) => {
      // console.log("Form Submitted", values);
      const newtodos = [...todoList , values];
      setTodoList(newtodos);
      localStorage.setItem("todoList" ,JSON.stringify(newtodos));
      resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <div className=" flex justify-center items-center  w-[95%] mx-auto bg-gray-400 p-4 text-white">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
        <div>
          <Image
            className="h-92 w-80 rounded-lg object-cover hover:opacity-50 hover:scale-110 duration-150"
            src={shoppingman}
            quality={75}
            priority={true}
            loading="eager"
            alt="Shopping Image"
          />
        </div>

        
        <div className="flex flex-col  mx-auto bg-red-400 w-full bg-opacity-80 p-4 rounded-lg">
        <h1 className="text-3xl text-black text-center font-semibold py-5">USER REGISTER</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 mx-auto rounded-2xl w-full text-black"
            />
            {touched.firstname && errors.firstname && <div className="text-yellow-300 mx-auto">{errors.firstname}</div>}

            
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 mx-auto rounded-2xl w-full text-black"
            />
            {touched.lastname && errors.lastname && <div className="text-yellow-300 mx-auto">{errors.lastname}</div>}

            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 mx-auto rounded-2xl w-full text-black"
            />
            {touched.email && errors.email && <div className="text-yellow-300 mx-auto">{errors.email}</div>}

           
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 mx-auto rounded-2xl w-full text-black"
            />
            {touched.password && errors.password && <div className="text-yellow-300 mx-auto">{errors.password}</div>}

            
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 mx-auto rounded-2xl w-full text-black"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="text-yellow-300 mx-auto">{errors.confirmPassword}</div>
            )}

         
            <button
              className="bg-black text-white p-2 my-2 w-full mx-auto rounded-lg font-semibold hover:bg-gray-800"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-center space-y-5">
          <h1 className="text-2xl font-bold">User Details</h1>
          <table className="border-collapse border border-gray-400 w-full text-center">
  <thead>
    <tr className="bg-gray-200 text-black flex-col sm:flex-row">
      <th className="border border-gray-400 p-2">First Name</th>
      <th className="border border-gray-400 p-2">Last Name</th>
      <th className="border border-gray-400 p-2">Email ID</th>
      <th className="border border-gray-400 p-2">Delete</th>
      <th className="border border-gray-400 p-2">Updated</th>
    </tr>
  </thead>
  <tbody>
    {todoList.map((todo, index) => (
      <tr key={index} className="bg-white text-black">
        <td className="border border-gray-400 p-2">{todo.firstname}</td>
        <td className="border border-gray-400 p-2">{todo.lastname}</td>
        <td className="border border-gray-400 p-2">{todo.email}</td>
        <td className="border border-gray-400 p-2">
  <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
    <MdDelete />
  </button>
</td>

        <td className="border border-gray-400 p-2"><FaEdit /></td>

      </tr>
    ))}
  </tbody>
</table>
        
        </div>
      </div>
      
    </div>
  );
};

export default User;
