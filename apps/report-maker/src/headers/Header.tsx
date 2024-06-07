import React from "react";
import { useMatch } from "react-router-dom";

import HeaderAdmin from "./HeaderAdmin";
import HeaderNonAuth from "./HeaderNonAuth";

type HeaderProps = {
  token: string | null;
};

const Header: React.FC<HeaderProps> = ({ token }) => {
  const matcher = useMatch("/auth/*");

  if (Boolean(matcher)) return null;
  if (token) {
    return <HeaderAdmin />;
  }
  return <HeaderNonAuth />;
};

export default Header;
