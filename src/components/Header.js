import React from "react";
import Box from "@material-ui/core/Box";
import puppyLogo from "../assets/alldogs.png";

const Header = () => {
  return (
    <Box className="header">
      <img src={puppyLogo} alt="puppy cartoon" width={250} height={250} />
    </Box>
  );
};

export default Header;
