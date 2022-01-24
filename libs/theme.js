import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const style = {
    global:
        props => ({
            body: {
                bg: {
                    bg: mode('#f0e7db', '#202023')(props)
                }
            }
        })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: module('#3d7aed', '#ff63c3')(props),
            textUnderlinedOffset: 3
        })
    }
}

const fonts = {
    heading: " 'M PLUS Rounded 1c' ",
}

const color = {
    glassTeal: '#88ccca',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    style,
    components,
    color,
    fonts
})

export default theme;

