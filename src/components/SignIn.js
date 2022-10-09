import React, { useState } from "react";
import { signIn } from "../services/services";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSignIn = async (e) => {
    e.preventDefault();
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const isValidEmail = userName.match(pattern);
    if (!isValidEmail) {
      setErrMsg("Enter valid Email");
      return;
    }

    const url = "https://bundl.one/api/users/authenticate";
    const data = {
      email: userName,
      password: password,
    };
    const response = await signIn(url, data);

    if (response.success) {
      navigate("./home");
    } else {
      setErrMsg(response.message);
    }
  };

  return (
    <div className="signin-container">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="signin-box">
          <div>
            {errMsg && (
              <Alert key="danger" variant="danger">
                {errMsg}
              </Alert>
            )}

            <div className="signin-header">Signin</div>

            <form onSubmit={(e) => onSignIn(e)}>
              {" "}
              <div>
                <input
                  className="input-box"
                  type={"text"}
                  placeholder="Email"
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setErrMsg(null);
                  }}
                ></input>
              </div>
              <div>
                {" "}
                <input
                  className="input-box"
                  type={"password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassWord(e.target.value);
                    setErrMsg(null);
                  }}
                ></input>
              </div>
              <div>
                {" "}
                <button type="submit" className="input-box">
                  Signin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
