import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import image from "../assests/future.jpg";
import Header from "../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/NavBar";
import { API } from "../apiwrapper";
import apiURl from "../store/Action/api-url";
import Spinner from "react-bootstrap/Spinner";

function ScriptureQuery() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    user_input: "",
  });
  const navigate = useNavigate();
  const [prediction, setPrediction] = useState([]);
  const [Loading, setLoading] = useState(false);

  const handleForcast = async () => {
    try {
      setLoading(true);
      const payload = {
        user_input: formValues.user_input,
      };
      //   const Forgetdata = await API({
      //     url: `${apiURl.scriptures}`,

      //     method: "POST",
      //     body: payload,
      //   });
      const ForcastData = await fetch("http://192.168.2.171:7000/scriptures", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await ForcastData.json();
      console.log("response", response);
      toast.success(response?.message);
      setPrediction(response?.response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("prediction", prediction);
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Navbar />
        <div className="container">
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1
                className="text-white"
                style={{ fontFamily: "Fantasy", fontWeight: 50 }}
              >
                Future Forcasting
              </h1>
            </div>
            <div className="form">
              <textarea
                className="textarea"
                type="textarea"
                placeholder="Enter your Query"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="user_input"
                value={formValues.user_input}
              />

              {Loading ? (
                <button>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </button>
              ) : (
                <button onClick={handleForcast}>Get Started</button>
              )}
            </div>

            {prediction && prediction?.length > 0 ? (
              <div className="w-100">
                <div className="text flex column">
                  <h1
                    className="text-white"
                    style={{ fontFamily: "Fantasy", fontWeight: 50 }}
                  >
                    Prediction
                  </h1>
                </div>
                <div className="form form2">
                  <textarea
                    className="textarea"
                    type="textarea"
                    placeholder="enter you details"
                    name="user_input"
                    value={prediction}
                    rows={16}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
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
      .form.form2 {
        grid-template-columns: 1fr;
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 100%;
        input {
          color: black;

          padding: 1.5rem;
          font-size: 1.2rem;
        }
        textarea {
          margin: 2px;
          font-weight: 29%;
          font-family: Georgia, serif;
          min-height: 100px;
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

export default ScriptureQuery;
