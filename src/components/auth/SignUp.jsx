import electrologo from "/electrolog.png";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5555/usersignup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("sign-up successful. User data ", response.data);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <>
      <h1>SignUp page</h1>

      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
            <img
              className="w-40 h-25 mr-2"
              src={electrologo}
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border  border-amber-400 md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Sign Up
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-amber-400 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-400 focus:border-amber-900 block w-full p-2.5  dark:border-primary-600 dark:placeholder-gray-400  "
                    placeholder="Your name"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-amber-400 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-400 focus:border-amber-900 block w-full p-2.5  dark:border-primary-600 dark:placeholder-gray-400  "
                    placeholder="name@email.com"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-amber-400 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-400 focus:border-amber-900 block w-full p-2.5  dark:border-primary-600 dark:placeholder-gray-400  "
                    placeholder="Phone number"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className=" border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-amber-400 block w-full p-2.5  dark:border-amber-400 dark:placeholder-gray-400    "
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className=" border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-amber-400 block w-full p-2.5  dark:border-amber-400 dark:placeholder-gray-400    "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between"></div>
                <button
                  type="submit"
                  className="bg-transparent w-full hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                >
                  Sign Up
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-amber-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
