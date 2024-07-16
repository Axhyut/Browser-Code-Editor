import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        userSystemColorMode: false,
    },
});

export default theme;