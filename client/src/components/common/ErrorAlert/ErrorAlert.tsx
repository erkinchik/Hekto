import React, { FC } from "react";

interface ErrorAlertProps {
  errorMessage?: null | string | object;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ errorMessage }) => {
  return <div>{errorMessage}</div>;
};

export default ErrorAlert;
