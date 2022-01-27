import NextLink from 'next/link';
import { 
  Container, 
  Box, 
  Heading, 
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} p={3} mb={6} align="center">
        Hello, I&apos;m a front-end developer based in India.
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
              Shreya
          </Heading>
          <p>Frontend Developer | Mobile App Developer</p>
          <Box 
            flexShrink={0} 
            mt={{base: 4, md:0}} 
            ml={{md: 6}} 
            align="center"
          >
            <Image 
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              src="/images/shreya_pic.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            About
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt et cum illo ipsam, soluta inventore eligendi tenetur. Esse nisi sit dolores tempora, architecto omnis! Autem neque ipsum maiores natus eius
          <NextLink href="/works/covid-19-tracker">
            <Link> Covid 19 Tracker</Link>
          </NextLink>
        .
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button 
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>Sept 2020 - Oct 2020</BioYear>
            FoodsGully - React Native Intern <br />
        </BioSection>
        <UnorderedList>
          <ListItem>
            Contributed to the design & development of a grocery mobileapplication (front-end) involving authentication flow, product items and cart.
          </ListItem>
          <ListItem>
            Play Store Link: 
          </ListItem>
        </UnorderedList>
        <br/>
        <BioSection>
          <BioYear>April 2020 - May 2020</BioYear>
            Caramel IT Services <br />
        </BioSection>
        <UnorderedList>
          <ListItem>
            Contributed to the development & maintenance of a working and responsive web application (front-end) involving authentication, interactive e-learning platform and consortium.
          </ListItem>
          <ListItem>
            Website Link: 
          </ListItem>
        </UnorderedList>
      </Section>
    </Container>
  )
}

export default Page;
