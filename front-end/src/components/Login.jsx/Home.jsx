import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();
  useEffect(() => {
    const Userdata = localStorage.getItem("user");
    const res = axios.post("http://localhost:5000/app/login", {
      withCredentials: true,
    });
    console.log(res.data);

    if (!Userdata) {
      navigator("/login");
    }
  });
  return <div className="text-3xl">Hello</div>;
}

export default Home;
