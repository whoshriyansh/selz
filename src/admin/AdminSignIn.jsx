import { useState } from "react";
import { TextInput } from "../helpers/FormComponents";
import { NavLink } from "react-router-dom";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {/* <div className="hidden md:flex flex-col justify-center items-center w-1/2">
        <div className="w-72">
          <img alt="Background" src="./public/icon.png" className="" />
        </div>
        <p className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent font-black text-4xl md:text-5xl text-center w-full mb-5">
          Sign In to Selz
        </p>
      </div> */}

      <div className="w-full md:w-3/4 lg:w-2/4 xl:w-1/4 flex flex-col justify-center items-center bg-base-100 px-4 rounded-lg">
        <div className="w-40">
          <img src="./public/icon.png" alt="Selz-logo" />
        </div>
        <p className=" bg-gradient-to-r from-primary to-white bg-clip-text text-transparent font-black text-4xl md:text-5xl text-center w-full mb-5">
          Admin Console
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {/* Email Field */}
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your Admin Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Password Field */}
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your Admin Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-lg btn-square btn-gradient btn-primary waves waves-light w-full"
          >
            <span className="">Sign In</span>
            <span className="icon-[line-md--login] size-5"></span>
          </button>
          <h6 className="text-base-content text-base text-start">
            Admin Email :{" "}
            <NavLink className="text-primary cursor-pointer" to={"/signup"}>
              adminselz@gmail.com
            </NavLink>
          </h6>
          <h6 className="text-base-content text-base text-start">
            Admin Password :{" "}
            <NavLink className="text-primary cursor-pointer" to={"/signup"}>
              adminselz@2025
            </NavLink>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
