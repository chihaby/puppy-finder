import React from "react";
import Box from "@material-ui/core/Box";
import puppyLogo from "../assets/alldogs.png";

const Header = () => {
  return (
    <Box className="header">
      <img src={puppyLogo} alt="puppy cartoon" width={200} height={200} />
    </Box>
  );
};

export default Header;
