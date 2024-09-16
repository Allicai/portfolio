import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
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
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const rotatingTexts = [
  "an undergraduate student at Northeastern University.",
  "a creative artist!",
  "a passionate sports fan!",
  "an avid reader!",
  "a growing software engineer.",
  "a self-motivated learner!"
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

    <Box display="flex" flexDirection="column" alignItems="center">
      {/* Text area above the profile photo */}
      <Box textAlign="center" mb={4}>
        <Heading as="h2" variant="page-title">
          Vinit Patel
        </Heading>
        <p>Aspiring SWE | Student | Artist | Designer | NLP Enthusiast </p>
      </Box>

      {/* Profile photo */}
      <Box
        borderColor="pink.500"
        borderWidth={3}
        borderStyle="solid"
        w="140px"
        h="140px"
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <Image
          src="/images/al4.png"
          alt="Profile image"
          width="140"
          height="140"
        />
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
            His most recent experience was as a data analytics extern at Beats by Dre, and he currently serves as a software and hardware programming
            specialist at Forge, Northeastern&apos;s product dev lab.
          </Paragraph>
          <Paragraph>
            In his free time, Vin likes to sketch while enjoying coffee at a local café, 
            play soccer or tennis around Northeastern&apos;s Carter Field, and explore Massachusetts with his friends. 
            He&apos;s also involved in various clubs and organizations, from the space drone team to
            the volunteers behind the community fridges, as well as mentoring programs.
          </Paragraph>
          <Paragraph>
            His completed projects include various implementations of NLP, machine learning, algorithms, and object-oriented
            design, and he is always looking to learn and apply himself. His latest interest is in computer vision to pursue
            his long time desire to be Tony Stark.
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
            <BioYear>2014</BioYear>
            Began playing tennis competitively and training at a club.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Invited to attend the <Link href="https://www.usta.com/content/dam/usta/sections/eastern/pdfs/regions/li_march_2017.pdf#page=4"> presidential inauguration</Link> and
            met Malala Yousafzai and members of Congress.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed 3 years of ballboying at the <Link href="https://www.usopen.org/index.html">US Open</Link>.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated high school and began attending Northeastern.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Software Engineer for AerospaceNU&apos;s drone team.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Ran a service drawing <Link href="/images/pfps.jpg" target="_blank" colorScheme={'teal'}>profile photos</Link> for students at NU.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Helped a friend establish her <Link href="https://hoosky.store/" target="_blank" colorScheme={'teal'}>NU student clothing store</Link>.
            </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Began designing clothing and working on a personal brand.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Mechanical engineer for Northeastern Electric Racing.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            AI Engineering Intern at GBCS.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analytics & Market Research Extern at Mobalytics.
          </BioSection>
           <BioSection>
            <BioYear>2024</BioYear>
            Data Analyst Extern at Beats by Dre.
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
          <Link href="https://www.goodreads.com/book/show/15839976-red-rising" target="_blank" colorScheme={'teal'}>
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
            src="https://open.spotify.com/embed/track/0o73cSWmV0YJeHvzDbJDdn?utm_source=generator"
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
