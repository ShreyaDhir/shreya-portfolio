import { Container, Box, Heading } from "@chakra-ui/layout";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a front-end developer based in India.
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
              Shreya
          </Heading>
          <p>Frontend Developer | Mobile App Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page;
