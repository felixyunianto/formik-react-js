import React from "react";
import { useFormik } from "formik";

const InputForm = () => {

    const formik = useFormik({
        initialValues : {
            username : '',
            email : '',
            fullname : ''
        }
    })

    console.log("Formik values ", formik.values);

  return (
    <div className="h-screen flex bg-gray-100 justify-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fullname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:output-none focus:shadow-outline"
              type="text"
              id="fullname"
              placeholder="Fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
