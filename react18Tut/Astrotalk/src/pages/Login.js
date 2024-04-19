import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetAuthUserData, SetUserData } from "../store/reducer";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";
import { API } from "../apiwrapper";
import apiURl from "../store/Action/api-url";

const clientId =
  "490941507389-9lrrnui6p66tq9m9rhc9j9akd19ngleg.apps.googleusercontent.com";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const payload = {
        email_id: formValues?.email,
        password: formValues?.password,
      };

      // const LoginData = await fetch("http://192.168.2.171:5000/Signin", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const LoginData = await API({
        url: `${apiURl.login}`,

        method: "POST",
        body: payload,
      });

      // const response = await LoginData.json();
      // console.log("response", response);

      if (LoginData?.status && LoginData?.status === "true") {
        dispatch(SetUserData(LoginData));
        toast.success(LoginData?.message);
        navigate("/AstroPage");
      } else {
        toast.error(LoginData?.message);
      }
    } catch (error) {
      console.log(error.code);
    }
  };

  const onSuccess = async (res) => {
    console.log("res.profileobj", res);
    const payload = {
      email_id: res?.profileObj?.email,
      name: res?.profileObj?.givenName,
      image: res?.profileObj?.imageUrl,
      method: "GOOGLE",
    };
    try {
      // const googleLogin = await fetch("http://192.168.2.171:5000/sociallogin", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(payload),
      // });
      const LoginData = await API({
        url: `${apiURl.login}`,
        method: "POST",
        body: payload,
      });
      // const response = await googleLogin.json();
      console.log("response", LoginData);
      if (LoginData?.status && LoginData?.status === "true") {
        dispatch(SetUserData(LoginData));
        toast.success(LoginData?.message);
        navigate("/AstroPage");
      } else {
        toast.error(LoginData?.message);
      }
    } catch {}
  };

  const onFailure = (res) => {
    console.log("res.profileobj", res);
  };

  const responseFacebook = async (response) => {
    console.log(response, "facebook data");

    const payload = {
      name: response?.name,
      email_id: response?.email,
      // SocialId: response?.id,
      Method: "FACEBOOK",
    };

    const resp = await API({
      url: apiURl.sociallogin,
      method: "POST",
      body: payload,
      formData: false,
    });

    if (resp?.status) {
      dispatch(SetUserData(resp));
      toast.success(resp?.message);
      navigate("/AstroPage");
    } else {
      toast.error(resp?.message);
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
              <h3>Login</h3>
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
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formValues.password}
              />
              <button onClick={handleLogin}>Login to your account</button>

              <button
                className="btn"
                onClick={() => navigate("/changePassword")}
              >
                Change Password
              </button>

              <button
                className="btn"
                onClick={() => navigate("/forgetPassword")}
              >
                Forget Password
              </button>

              <GoogleLogin
                clientId={clientId}
                buttonText="Login With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
              />

              <ReactFacebookLogin
                appId="415692071070334"
                autoLoad={false}
                fields="id,name,email"
                callback={responseFacebook}
                scope="email,pages_read_engagement,pages_manage_posts,pages_manage_metadata,pages_read_user_content,business_management,instagram_basic,instagram_content_publish"
                cssClass="faBtn"
                icon={<FaFacebookF />}
                textButton=" Continue with Facebook"
              />
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

export default Login;
