import { ColorModeScript } from "@chakra-ui/react"
import Document, { Html, Head, Main, NextScript } from "next/document"

import colorMode from "../components/theme/colorMode"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={colorMode.config.initialColorMode}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
