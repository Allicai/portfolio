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
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const rotatingTexts = [
  "an undergraduate student at Northeastern University.",
  "a creative artist.",
  "a passionate sports fan.",
  "an avid reader.",
  "a growing software engineer.",
  "an obsessive learner."
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
    }, 3000); // 1000 = 1 second

    return () => clearInterval(intervalId);
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
         I am {currentText}
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
                src="/vin.jpeg"
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
            for machine learning and a drive to continually expand his skillset.
            His academic and professional journey is shaped by a deep interest in NLP and software
            engineering, and he strives to blend technology with his own creativity.
          </Paragraph>
          <Paragraph>
            His most recent experience was at Beats by Dre as a Data Analyst, and he currently serves as a programming
            specialist at Forge, a product development lab that spans both hardware and software.
          </Paragraph>
          <Paragraph>
            In his free time, Vin likes to sketch while enjoying coffee at a local café, 
            playing soccer or tennis around Northeastern's Carter Field, or capturing Boston through
            his camera. He's also involved in various clubs and organizations, from the electric racing team to
            the volunteer team behind the community fridges in Boston.
          </Paragraph>
          <Paragraph>
            His completed projects include various implementations of machine learning, NLP, and object-oriented
            design, and he is always looking to learn. His latest interest is computer vision,
            and he's currently working on projects to gain proficiency and work towards real-world applications.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >Projects</Button>
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
            Software Engineer in AerospaceNU's drone team.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            AI Engineering Intern at GBCS.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analytics & Market Research at Mobalytics. (Extern)
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analyst at Beats by Dre. (Extern)
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
            {' '}
          <Link href="/images/nyo.png" target="_blank" colorScheme={'teal'}>
            Tennis
          </Link> 
          , {' '}
          <Link href="/images/soccer.png" target="_blank" colorScheme={'teal'}>
          Soccer
          </Link>
          , {' '}
          <Link href="https://www.goodreads.com/book/show/58416952-the-will-of-the-many" target="_blank" colorScheme={'teal'}>
          Reading
          </Link>
          , {' '}
          <Link href="/images/niagara.jpeg" target="_blank" colorScheme={'teal'}>
          Photography
          </Link>
          , Drawing/Design, Gaming.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Current Song Obsession :
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
              <Link href="https://www.linkedin.com/in/vinit-patel-873514204/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<IoLogoLinkedin />}
                >
                  Vinit Patel
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:vinitp0310@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  vinitp0310@gmail.com
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
