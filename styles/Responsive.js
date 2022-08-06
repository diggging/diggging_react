import React from "react";
import { useMediaQuery } from "react-responsive";

export const DEVICE_QUERY = {
  mobile: "(max-width: 550px)",
  desktop: "(min-width: 551px)",
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: DEVICE_QUERY.mobile,
  });

  return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: DEVICE_QUERY.desktop,
  });

  return <>{isPc && children}</>;
};
