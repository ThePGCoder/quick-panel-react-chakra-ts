import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { drawerTheme } from "./drawerTheme";

export const theme = extendTheme({
    fonts: {
      heading: "Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    config: {
      initialColorMode: "light",
    },
    components: { Drawer: drawerTheme

    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bg: mode("#e9e9e9","#121212")(props),
        }
      })
    },
  });