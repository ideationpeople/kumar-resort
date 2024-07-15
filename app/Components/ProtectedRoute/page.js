// src/components/ProtectedRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../Components/contexts/page";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
