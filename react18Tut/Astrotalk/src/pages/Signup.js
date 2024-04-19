import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../apiwrapper";
import apiURl from "../store/Action/api-url";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const payload = {
        name: formValues?.name,
        email_id: formValues?.email,
        password: formValues?.password,
        confirm_password: formValues?.confirmpassword,
      };

      // const SignupData = await fetch("http:192.168.2.171:5000/Signup", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const SignupData = await API({
        url: `${apiURl.signup}`,

        method: "POST",
        body: payload,
      });

      // const response = await SignupData.json();
      console.log("response", SignupData);
      if (SignupData?.status === "true") {
        toast.success(SignupData?.message);
        navigate("/");
      } else {
        toast.error(SignupData?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            {/* <h1>Unlimited movies, TV shows and more.</h1> */}
            <h1>AstroStar</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="name"
              value={formValues.name}
            />
            {/* <input
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="LastName"
              value={formValues.LastName}
            /> */}
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="password"
              value={formValues.password}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="confirmpassword"
              value={formValues.confirmpassword}
            />
          </div>

          <button
            className="btn"
            style={{ width: "200px", padding: "20px" }}
            onClick={handleSignIn}
          >
            Get Started
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "1fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
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
    }
  }
`;

export default Signup;
