import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetAuthUserData, SetUserData } from "../store/reducer";
import { useDispatch } from "react-redux";

function NewPassword() {
  const [formValues, setFormValues] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const payload = {
        email_id: formValues.email,

        new_password: formValues.newPassword,
        confirm_new_password: formValues.confirmPassword,
      };

      const LoginData = await fetch(
        "http://192.168.2.171:5000/newchangepassword",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await LoginData.json();
      console.log("response", response);
      if (response?.status && response?.status === "true") {
        dispatch(SetUserData(response));
        toast.success(response?.message);
        navigate("/");
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log("test123", error);
    }
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Change Password</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formValues.email}
              />

              <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formValues.newPassword}
              />
              <input
                type="password"
                placeholder=" Confirm Password"
                name="confirmPassword"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formValues.confirmPassword}
              />
              <button className="btn" onClick={handleLogin}>
                Change Password
              </button>
            </div>
          </div>
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
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
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
    }
  }
`;

export default NewPassword;
