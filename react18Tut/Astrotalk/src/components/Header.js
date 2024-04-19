import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assests/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { SetUserData } from "../store/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.authUser);

  const LogOut = () => {
    dispatch(SetUserData({}));
    navigate("/");
    toast.success("User Loged Out Successfully!!");
  };
  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
      {(data && data?.data) || (data && data?.data?._id) ? (
        <button onClick={() => LogOut()}>Logout</button>
      ) : (
        <button onClick={() => navigate(props.login ? "/" : "/signup")}>
          {props.login ? "Log In" : "Sign Up"}
        </button>
      )}
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
