import React, { FC } from "react";
import { useLocation } from "react-router-dom";

export const WelcomePage: FC = () => {
  const location = useLocation();
  const state = location.state as { message?: string };

  return (
    <div>
      <h1>Welcome Page</h1>
      {state?.message ? (
        <p>{state.message}</p>
      ) : (
        <p>Uspješno ste se prijavili!</p>
      )}
    </div>
  );
};
