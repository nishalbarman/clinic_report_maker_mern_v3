import React from "react";
import { useMatch } from "react-router-dom";

import HeaderAdmin from "./HeaderAdmin";
import HeaderNonAuth from "./HeaderNonAuth";
import { useAppSelector } from "../redux";

const Header: React.FC = () => {
  const matcher = useMatch("/auth/*");

  const token = useAppSelector((state) => state.auth.token);

  if (Boolean(matcher)) return null;
  if (token) {
    return <HeaderAdmin />;
  }
  return <HeaderNonAuth />;
};

export default Header;
