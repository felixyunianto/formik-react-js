import React from "react";
import { useFormik } from "formik";

const InputForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      fullname: "",
    },
    onSubmit: (values) => {
      console.log("Formik values ", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.fullname) {
        errors.fullname = "Required";
      }

      return errors;
    },
  });

  return (
    <div className="h-screen flex bg-gray-100 justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <span className="text-red-500 text-sm">
                {formik.errors.username}
              </span>
            ) : null}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            ) : null}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <span className="text-red-500 text-sm">
                {formik.errors.fullname}
              </span>
            ) : null}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
