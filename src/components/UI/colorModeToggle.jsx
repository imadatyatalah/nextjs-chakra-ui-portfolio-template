import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
      }
      ml={{ lg: "6" }}
      variant="ghost"
      _hover={{ color: "black", bgColor: "white" }}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? (
        <MoonIcon name="moon-icon" />
      ) : (
        <SunIcon name="sun-icon" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
