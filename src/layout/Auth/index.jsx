import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export function LoginContainer({ children }) {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log(1);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
}

export function LoginAdmContainer({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log(2);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
}

export function LogOff({ children }) {
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");

  if (!token) {
    return children;
  } else {
    if (type) {
      return <Navigate to="/Adm/Home" />;
    } else {
      return <Navigate to="/Aluno/Home" />;
    }
  }
}
