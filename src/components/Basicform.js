import React, { useEffect, useState } from "react";

const Basicform = () => {
  const PASSWORD_ERROR_MESSAGE =
    "password should be between 6 to 20 characters and contains at least one numeric digit, one uppercase and one lowercase letter";
  const EMAIL_ERROR_MESSAGE = "please enter valid email address";
  const SUCCESS_MESSAGE = "form submitted successfully";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [message, setMessage] = useState({
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });

  const submitForm = () => {
    if (isValidEmail && isValidPassword) {
      alert(SUCCESS_MESSAGE);
    } else {
      if (!isValidEmail) {
        setMessage({ ...message, emailErrorMessage: EMAIL_ERROR_MESSAGE });
      }
      if (!isValidPassword) {
        setMessage({
          ...message,
          passwordErrorMessage: PASSWORD_ERROR_MESSAGE,
        });
      }
    }
  };

  const validateEmail = () => {
    const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegx.test(email)) {
      setIsValidEmail(false);
      setMessage({ ...message, emailErrorMessage: EMAIL_ERROR_MESSAGE });
    } else {
      setIsValidEmail(true);
      setMessage({ ...message, emailErrorMessage: "" });
    }
  };

  const validatePassword = () => {
    const passwordRegx = /^[A-Za-z]\w{7,14}$/;
    if (!passwordRegx.test(password)) {
      setIsValidPassword(false);
      setMessage({ ...message, passwordErrorMessage: PASSWORD_ERROR_MESSAGE });
    } else {
      setIsValidPassword(true);
      setMessage({ ...message, passwordErrorMessage: "" });
    }
  };

  return (
    <div className="body">
      <div className="login_box">
        <form action="">
          <h1 className="heaging">LOGIN FORM</h1>

          <label for="username">Email</label>
          <div class="input_userName-material">
            <div className ="validation-message">{message.emailErrorMessage}</div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              autocomplete="off"
              class="form-control-material"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
          <label for="password">Password</label>
          <div class="form-input-material">
            <div className="validation-message">{message.passwordErrorMessage}</div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autocomplete="off"
              class="form-control-material"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
          </div>

          <div className="login_button">
            <button type="button" class="btn" onClick={submitForm}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Basicform;
