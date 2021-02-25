import { useState } from "react"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const HamburgerMenu = dynamic(() => import("../../UI/header/hamburgerMenu"))

import Links from "./links"
import ColorModeToggle from "../../UI/header/colorModeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("gray.200", "gray.300")
  const color = useColorModeValue("black", "white")

  return (
    <>
      <Box
        as="nav"
        display="flex"
        flexDir={{ base: "row-reverse", lg: "row" }}
        alignItems="center"
        fontWeight="500"
      >
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
        <Box
          as="ul"
          bg={{ base: bg, lg: "transparent" }}
          color={{ base: "black", lg: color }}
          display={{
            base: isOpen ? "block" : "none",
            lg: "flex",
          }}
          position={{ base: "absolute", lg: "static" }}
          top="5rem"
          left="5%"
          right="5%"
          rounded={{ base: "lg", lg: "none" }}
          py={{ base: "2", lg: "0" }}
          px={{ base: "4", lg: "0" }}
          alignItems={{ lg: "center" }}
          boxShadow={{ base: "xl", lg: "none" }}
          zIndex="2"
        >
          <Links onClick={() => setIsOpen(false)} />
        </Box>

        <ColorModeToggle onClick={toggleColorMode} colorMode={colorMode} />
      </Box>
    </>
  )
}

export default Navbar
