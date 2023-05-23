import { MdAdminPanelSettings } from "react-icons/md";
import styled from "styled-components";
import { BiHide, BiShow } from "react-icons/bi";
import { useRef, useState } from "react";
import { passwordAuth } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<string>("idle");
  const [passwordValue, setPasswordValue] = useState<any>("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(null);
    setStatus("Checking");

    setTimeout(() => {
      passwordAuth(passwordValue)
        .then(() => {
           localStorage.setItem('loggedIn', "true")
           return navigate("../dashboard", { replace: true});
        })
        .catch((error) => {
         setError(error);
         localStorage.setItem('loggedIn', "false");
         return error.message
        })
        .finally(() => setStatus("idle"));
    }, 1000);
  };

  return (
    <Container>
      {searchParams && <p className="login-error">{searchParams}</p>}
      <div className="header">
        <h1>Login</h1>
        <MdAdminPanelSettings className="fa" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="password">Enter Password:</label>
          <div className="password">
            <input
              type={hide ? "password" : "text"}
              ref={passwordRef}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            {!hide && <BiShow className="fa" onClick={() => setHide(!hide)} />}
            {hide && <BiHide className="fa" onClick={() => setHide(!hide)} />}
          </div>
        </div>
        <button type="submit" role="submit" disabled={status === "Checking"}>
          Login
        </button>

        <p>{error?.message}</p>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  gap: calc(var(--flex-gap) * 2);
  user-select: none;

  div.header {
    display: flex;
    gap: 5px;
    align-items: center;
    .fa {
      font-size: 30px;
    }
  }
  h1 {
    color: var(--dark-blue);
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    label {
      margin-right: 20px;
      font-size: 23px;

      @media (max-width: 600px) {
        display: block;
      }
    }
    input {
      border: none;
      outline: none;
      user-select: none;
      font-size: 16px;
      padding: 4px 10px;
    }

    div.password {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      gap: 4px;
      border: 1px solid black;
      padding: 3px 10px;

      .fa {
        font-size: 22px;
        cursor: pointer;
      }
    }
  }
  div.container {
    display: flex;
  }
  button {
    width: min(100%, 200px);
    margin-top: 5px;
    padding: 5px 0;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
  }

  .login-error {
    font-size: 18px;
    color: var(--primary-pink)
  }
`;
export default Login;
