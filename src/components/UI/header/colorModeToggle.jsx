import { Button } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const DarkModeToggle = ({ onClick, colorMode }) => (
  <>
    <Button
      ml={{ lg: "6" }}
      onClick={onClick}
      variant="ghost"
      _hover={{ color: "black", bgColor: "white" }}
    >
      {colorMode === "light" ? (
        <MoonIcon name="moon-icon" />
      ) : (
        <SunIcon name="sun-icon" />
      )}
    </Button>
  </>
)

export default DarkModeToggle
