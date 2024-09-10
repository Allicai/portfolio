import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const rotatingTexts = [
  "an undergrad computer science student!",
  "a growing data scientist!",
  "a budding software engineer!"
]

const Home = () => {
  const [currentText, setCurrentText] = useState(rotatingTexts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = rotatingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % rotatingTexts.length;
        return rotatingTexts[nextIndex];
      });
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          I&apos;m {currentText}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Vinit Patel
            </Heading>
            <p>Aspiring SWE ( Artist | Designer | NLP Enthusiast )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/chibi.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Vinit (Vin) is an undergraduate student based in Boston, MA with a passion 
            for the constantly growing applications of machine learning. His academic
            and professional journey have been driven by a deep interest in NLP and data
            science, and he constantly strives to blend technology with his own creativity.{' '}
            <Link as={NextLink} href="https://www.youtube.com/devaslife" passHref target="_blank">
              Dev as Life
            </Link>
            &quot; has more than 100k subscribers.
          </Paragraph>
          <Paragraph>
            He has worked at companies such as Beats by Dre, Mobalytics, and GBCS in roles and teams involving
            software engineering, data science, and AI/ML. He's currently serving as a software
            specialist at Forge, a product development lab. 
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Projects
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in New York.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began attending Northeastern University.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Software Engineer at AerospaceNU's drone team.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            AI Engineering Intern at GBCS.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analytics & Market Research Extern at Mobalytics.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analytics Extern at Beats by Dre.
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>
            Software Specialist at Forge, a product development club.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Tennis, Soccer, Drawing, Reading, Gaming, Cooking, and Cats!
          </Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Currently on Repeat:
        </Heading>
        <Box borderRadius="12px" overflow="hidden" width="100%" height="152px">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1GVkrFVc94CTjm9bdSmGjp?utm_source=generator"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>
      </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Allicai" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Allicai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @inkdrop_app (English)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @craftzdog (日本語)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
          </List>

          {/*<SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel (&gt;200k subs)
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>

          <Heading as="h3" variant="section-title">
            Newsletter
          </Heading>
          <p>
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects, tutorials, and videos
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://www.devas.life/"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Sign up my newsletter here
            </Button>
          </Box> */}
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
