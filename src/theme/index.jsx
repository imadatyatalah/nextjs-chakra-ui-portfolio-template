import { extendTheme } from "@chakra-ui/react"

import { styles } from "./styles"

const theme = extendTheme({
  styles,
  fonts: {
    heading: "Poppins, -apple-system",
    body: "Poppins, -apple-system",
  },
})

export default theme
