import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import theme from '../libs/theme';

const Website = ({ Component, pageProps, router, theme }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.router} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website;
