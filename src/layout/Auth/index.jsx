import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginContainer({ children }) {
  const token = localStorage.getItem("token");
  const type = JSON.parse(localStorage.getItem("type"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [navigate, token, type]);

  if (token) {
    if (type.type === "aluno") {
      return children;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function LoginAdmContainer({ children }) {
  const token = localStorage.getItem("token");
  const type = JSON.parse(localStorage.getItem("type"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [navigate, token, type]);

  if (token) {
    if (type.type === "adm") {
      return children;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function LogOff({ children }) {
  const token = localStorage.getItem("token");
  const type = JSON.parse(localStorage.getItem("type"));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (type.type === "adm") {
        setTimeout(() => {
          navigate("/Adm/Home");
        }, 500);
      } else {
        setTimeout(() => {
          navigate("/Aluno/Home");
        }, 500);
      }
    }
  }, [navigate, token, type]);

  if (!token) {
    return children;
  } else {
    return null;
  }
}
