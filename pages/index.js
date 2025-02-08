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
  Text,
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
// import Script from 'next/script'

const rotatingTexts = [
  ' am a student at Northeastern University!',
  ' am a creative artist!',
  "'m a passionate sports fan! Visca el Barça!",
  "'m an avid reader!",
  ' am aiming to be a software engineer!',
  "'m a competitive tennis player!"
]

const Home = () => {
  const [currentText, setCurrentText] = useState(rotatingTexts[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = rotatingTexts.indexOf(prevText)
        const nextIndex = (currentIndex + 1) % rotatingTexts.length
        return rotatingTexts[nextIndex]
      })
    }, 3000) // 1000 = 1 second

    return () => clearInterval(intervalId)
  }, [])

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
          I{currentText}
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Text area above the profile photo */}
          <Box textAlign="center" mb={4}>
            <Heading as="h2" variant="page-title">
              Vinit Patel
            </Heading>
            <p>Aspiring Polymath ( Artist / Engineer / Tennis Player )</p>
          </Box>

          {/* Profile photo */}
          <Box
            borderColor="blue.100"
            borderWidth={2}
            borderStyle="solid"
            w="140px"
            h="140px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/al1.png"
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
            I&apos;m a dynamic software engineer/computer scientist pursuing a
            Bachelor of Science in Computer Science concentrated in AI and ML at
            Northeastern University! I entered college with the intention of
            becoming an electrical/computer engineer but quickly fell in love
            with algorithms, AI, and machine learning along with their vast
            applications to real world use cases. Recently, I was a Software
            Engineer intern at Snowflake, and I&apos;m now an SDE co-op at
            Amazon!
          </Paragraph>
          <Paragraph>
            In my free time I enjoy playing soccer and tennis, sketching at
            local cafés, and exploring Boston with friends! I&apos;m always
            looking for new opportunities to learn; my current focus is to grow
            personally and professionally as I begin to aim for full-time
            positions. I&apos;m excited to see where my journey takes me!
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="blue"
            >
              Projects
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            Invited to attend the presidential inauguration in person.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed 3 years of ballboying at the U.S. Open.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began attending 🏫Northeastern University in Boston, MA.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Software Engineer for AerospaceNU - computer vision.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Teaching assistant for NEU&apos;s Algorithms & OOD courses.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Data Analyst for{' '}
            <span style={{ color: '#9063C7' }}>🕹️Mobalytics</span> - NLP for
            market strategies.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Software Specialist for{' '}
            <span style={{ color: '#FF5722' }}>💡Forge</span> - NEU&apos;s product
            dev lab.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Software Engineer Intern at{' '}
            <span style={{ color: '#79C3FF' }}>❄️Snowflake</span> - AI/ML
            solutions.
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>
            Software Development Engineer Co-Op at{' '}
            <span style={{ color: '#FF9900' }}>📦Amazon</span>!
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>
            Seeking full-time job offers in software, AI and ML!
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I♥
          </Heading>
          <Box align="center" my={4}>
            <Text>
              <Link
                href="/images/collage.jpg"
                target="_blank"
                colorScheme="teal"
              >
                Tennis🎾
              </Link>{' '}
              <Link
                href="/images/soccer.png"
                target="_blank"
                colorScheme="teal"
              >
                Soccer⚽
              </Link>{' '}
              <Link
                href="https://www.goodreads.com/book/show/15839976-red-rising"
                target="_blank"
                colorScheme="teal"
              >
                Reading📖
              </Link>{' '}
              <Link
                href="/images/niagara.jpeg"
                target="_blank"
                colorScheme="teal"
              >
                Photography📷
              </Link>{' '}
              <br></br>
              Drawing/Design✏️ Gaming🎮 Traveling🗺️
            </Text>
          </Box>
          <Box align="center" my={4}>
            <Text>
              You can read about more of my interests and reflections on my
              experiences in my occasional blog posts below!
            </Text>
          </Box>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/saves"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="blue"
            >
              Save Files
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Now Playing 📻:
          </Heading>
          <Box
            borderRadius="12px"
            overflow="hidden"
            width="100%"
            height="152px"
          >
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/2LwsunYgfRoqyIsNtgOCQx?utm_source=generator"
              width="100%"
              height="152"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture, transparency"
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
                  colorScheme="blue"
                  leftIcon={<IoLogoGithub />}
                >
                  Allicai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/vinit-patel-873514204/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={'blue'}
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
                  colorScheme="blue"
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
