import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  // List,
  // ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoSave, IoLibrary, IoArrowUpCircle } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PokemonCard from '../components/pokemoncard.jsx'
import Icon from '@mdi/react'
import { mdiPokeball } from '@mdi/js'
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
            Northeastern University! Recently, I interned as a Software Engineer
            at Snowflake, where I worked on AI and machine learning. Currently,
            I&apos;m an SDE co-op at Amazon and a researcher at NEU!
          </Paragraph>
          <br></br>
          <Paragraph>
            In my free time I enjoy playing soccer and tennis, sketching at
            local cafés, and exploring Boston with friends! I&apos;m always
            interested in creating new things, whether it&apos;s through code or
            art. You can check out some of my software projects below, and if
            you&apos;re working on something interesting, I&apos;d love to hear
            about it!{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              leftIcon={<IoLibrary />}
              iconSpacing={1}
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
            Won my first official L1 USTA tennis tournament!
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Invited to attend the presidential inauguration in D.C.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Finished 3 years of ballboying the U.S. Open! (met Federer)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began attending Northeastern University in Boston, MA.
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
            <span style={{ color: '#9063C7' }}>🕹️Mobalytics</span> - NLP and
            market strategies.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Machine Learning Engineer Intern at{' '}
            <span style={{ color: '#79C3FF' }}>❄️Snowflake</span>.
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>
            Software Development Engineer Co-Op at{' '}
            <span style={{ color: '#FF9900' }}>📦Amazon</span>!
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
              leftIcon={<IoSave />}
              iconSpacing={1}
              colorScheme="blue"
            >
              Saves
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
          📻 Now Playing:
          </Heading>
          <Box
            borderRadius="12px"
            overflow="hidden"
            width="100%"
            height="152px"
          >
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/7FbULqbni8CxToPAs2otk5?utm_source=generator"
              width="100%"
              height="152"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture, transparency"
              loading="lazy"
            ></iframe>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            display="flex"
            alignItems="center"
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Icon path={mdiPokeball} size={1} style={{ marginRight: '8px' }} />
              My Pokémon:{' '}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '5px',
                  backgroundColor: 'grey'
                }}
              />
            </span>
          </Heading>
          <Box align="center" my={1} mb={0}>
            <PokemonCard />
          </Box>
        </Section>

        <Box align="center" my={2} mb={2}>
          <Button
            colorScheme="blue"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            leftIcon={<IoArrowUpCircle />}
            iconSpacing={1}
          >
            Back to Top
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
