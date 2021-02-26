import { chakra } from "@chakra-ui/react"

export const UnorderedList = (props) => (
  <>
    <chakra.ul
      style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
      {...props}
    />
  </>
)

export const OrderedList = (props) => (
  <>
    <chakra.ol
      style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
      {...props}
    />
  </>
)

export const ListItem = (props) => (
  <>
    <chakra.li style={{ paddingBottom: "0.25rem" }} {...props} />
  </>
)
