import { Box, Button, useClipboard, useColorMode } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import darkTheme from "prism-react-renderer/themes/nightOwl";

import styles from "./styles/codeBlock.module.css";

const CodeBlock = ({ children, className }) => {
  const { colorMode } = useColorMode();
  const { hasCopied, onCopy } = useClipboard(children);

  const language = className.replace(/language-/, "");

  return (
    <Box pos="relative">
      <Button
        fontFamily="Poppins"
        colorScheme="twitter"
        pos="absolute"
        right="2"
        top="2"
        size="sm"
        onClick={onCopy}
      >
        {hasCopied ? "Copied" : "Copy"}
      </Button>

      <Highlight
        {...defaultProps}
        theme={colorMode === "dark" ? darkTheme : lightTheme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${styles.wrapper}`}
            style={{ ...style }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className={styles.lineNo}>{i + 1}</span>

                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;
