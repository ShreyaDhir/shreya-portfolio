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
                textDecoration: ''
            }
        }
    }
}