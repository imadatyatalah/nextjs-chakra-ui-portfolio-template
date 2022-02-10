import { Box } from "@chakra-ui/react";
import { Turn as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ toggled, toggle }) => {
  return (
    <Box display={{ lg: "none" }}>
      <Hamburger
        hideOutline={false}
        label="hamburger menu"
        size={25}
        toggled={toggled}
        toggle={toggle}
        direction="right"
      />
    </Box>
  );
};

export default HamburgerMenu;
