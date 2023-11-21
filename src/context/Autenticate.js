import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [email, setEmail] = useState();

  const handleSubmit = ({ email }) => {
    // console.log("dados", email);

    setEmail(email);
  };

  return (
    <CustomerContext.Provider value={{ email, submit: handleSubmit }}>
      {children}
    </CustomerContext.Provider>
  );
};
