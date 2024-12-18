import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseLoginContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // console.log(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setUser({ ...user, country: selectedOption });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hello bro !");

      const formData = new FormData();
      formData.append("fullname", user.fullname);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("country", user.country);
      formData.append("img", user.img);
      formData.append("username", user.username)
      formData.append("desc", user.desc);

      const res = await axios.post("http://localhost:5000/app/register", formData);
      // setUser(res.data);
      console.log("hhhhhhhhh", formData);

      console.log("response", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const UserLoginData = {
    handleSubmit,
    handleInputChange,
    handleCountryChange,
    user, setUser
  };

  return (
    <UseLoginContext.Provider value={UserLoginData}>
      {children}
    </UseLoginContext.Provider>
  );
};
export const useLoginContext = () => {
  return useContext(UseLoginContext);
};
export default UserLoginProvider;
