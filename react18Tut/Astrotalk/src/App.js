import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AstroPage from "./pages/AstroPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyOTP from "./pages/VerifyOTP";
import NewPassword from "./pages/NewPassword";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LiveStream from "./components/LiveStream";
import Astrologers from "./pages/Astrologers";
import AstroDetails from "./pages/AstroDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  SetAstroCatgory,
  SetAstroData,
  SetAstroSubCatgory,
} from "./store/reducer";
import Categories from "./pages/Categories";
import FutureForcast from "./pages/FutureForcast";
import BirthCart from "./pages/BirthCart";
import ScriptureQuery from "./pages/ScriptureQuery";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.authUser);
  console.log("data?.token", data?.data);
  useEffect(() => {
    dispatch(SetAstroCatgory());
    dispatch(SetAstroData());
    dispatch(SetAstroSubCatgory());
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        drag
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {data?.data ? (
            <>
              <Route exact path="/signup" element={<Signup />} />\
              <Route
                exact
                path="/changePassword"
                element={<ChangePassword />}
              />
              <Route
                exact
                path="/forgetPassword"
                element={<ForgetPassword />}
              />
              <Route exact path="/verifyOtp" element={<VerifyOTP />} />
              <Route exact path="/newPassword" element={<NewPassword />} />
              <Route exact path="/AstroPage" element={<AstroPage />} />
              <Route exact path="/Astrologers" element={<Astrologers />} />
              <Route exact path="/astroDetail/:id" element={<AstroDetails />} />
              <Route
                exact
                path="/categories/:name/:id"
                element={<Categories />}
              />
              {/* <Route exact path="/LiveStream" element={<LiveStream />} /> */}
              <Route
                exact
                path="/futureForcasting"
                element={<FutureForcast />}
              />
              <Route exact path="/birthcart" element={<BirthCart />} />
              <Route
                exact
                path="/scripturequery"
                element={<ScriptureQuery />}
              />
            </>
          ) : (
            <Route exact path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
