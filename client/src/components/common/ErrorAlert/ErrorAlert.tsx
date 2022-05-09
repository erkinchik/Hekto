import React, { FC, useEffect, useState } from "react";
import { strict } from "assert";

interface ErrorAlertProps {
  errorMessage?: null | string | object;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ errorMessage }) => {
  return <div>{errorMessage}</div>;
};

export default ErrorAlert;
