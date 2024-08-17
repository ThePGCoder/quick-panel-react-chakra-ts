import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    dialog: {
        
        _dark: {
          bg: "#161616",
          
        },
      },
})

export const drawerTheme = defineMultiStyleConfig({
  baseStyle,
})