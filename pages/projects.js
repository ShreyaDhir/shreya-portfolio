import { Grid, Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section';
import WorkGridItem from '../components/grid-items'; 
// import GridItem } from '../components/grid-items'; 
// import GridItemStyle }  from '../components/grid-items'; 

// import forageThumb from '';
import markdownThumb from '../public/images/planetpurple.jpg';

const Projects = () => {
    return (
        <Container>
            <Heading
                as="h3"
                fontSize={32}
                mb={4}
            >
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem 
                        id="forage" 
                        title="Forage: Google Clone" 
                        thumbnail="/public/images/planetpurple.jpg"
                    >
                        Developed and deployed a modern search engine interface with the ability to search up-to-date results and fetch data in the form of links, images, video results in mere seconds.
                    </WorkGridItem>
                </Section>
                <Section>
                     <WorkGridItem 
                        id="markdown" 
                        title="Markdown Editor" 
                        thumbnail={markdownThumb}
                    >
                        Allows user to write headers, emphasized text and incorporate links and images for user to convert text-to-HTML easy to read.
                    </WorkGridItem> 
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects;