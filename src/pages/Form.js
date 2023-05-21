import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserInfo } from "../redux/actions/productActions";

function Form() {
  //initalizing state

  const initialState = { name: "", password: "", email: "" };

  const [isLogin, setIsLogin] = useState(false);

  //getting data form redux

  const userInfo = useSelector((state) => state?.userInfo?.userInfo);
  // console.log("user information", userInfo);

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  // function for sending form data

  const onSubmit = () => {
    localStorage.setItem("userInformation", JSON.stringify(formData));
    dispatch(createUserInfo(formData));
    setIsLogin(!isLogin);
  };

  //getting data from localstorage

  const userDetails = JSON.parse(localStorage.getItem("userInformation"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Amresh singh"
        value={formData.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        placeholder="between 1-6"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="name">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Amreshsingh@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={onSubmit}>Submit</button>
      {isLogin ? (
        <div>
          <h4 style={{ textAlign: "center" }}>{userInfo.name}</h4>
          <h4 style={{ textAlign: "center" }}>{userInfo.password}</h4>
          <h4 style={{ textAlign: "center" }}>{userInfo.email}</h4>
        </div>
      ) : (
        <div>
          <h4 style={{ textAlign: "center" }}>{userDetails.name}</h4>
          <h4 style={{ textAlign: "center" }}>{userDetails.password}</h4>
          <h4 style={{ textAlign: "center" }}>{userDetails.email}</h4>
        </div>
      )}
    </div>
  );
}

export default Form;
