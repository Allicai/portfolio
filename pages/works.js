import { Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbML from '../public/images/works/distilbert.png'
import thumbPoker from '../public/images/works/poker.png'
// import thumbSnake from '../public/images/works/snake.png'
import thumbStark from '../public/images/works/vini_stark.png'
import thumbRPS from '../public/images/works/rps.png'
import thumbCollage from '../public/images/works/mvc_collage.png'
import thumbHSR from '../public/images/works/hsr.png'
import Image from 'next/image'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} color={'green.300'}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="emotion"
            title="NLP Model Evaluation"
            thumbnail={thumbML}
          >
            Comparing Logistic Regression, LSTM, and DistilBERT transformer
            models on a sentiment analysis classification task based around a
            Kaggle dataset.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="hsr" title="Optimized HS Rail" thumbnail={thumbHSR}>
            Introducing and optimizing high speed rail systems in the United
            States based on emissions, cost, and passengers served.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="collage"
            title="Collage Image Processor"
            thumbnail={thumbCollage}
          >
            Image processing software in Java with features such as cropping,
            filtering, layer creation and management, etc.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="rps"
            title="CV Rock-Paper-Scissors"
            thumbnail={thumbRPS}
          >
            Rock-paper-scissors using OpenCV, with a &quot;cheat mode&quot;
            where the computer waits momentarily to choose the winning hand.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="stark" title="Vinny Stark" thumbnail={thumbStark}>
            [CURRENTLY IN PROGRESS] <br /> Set of scripts using cv2 and
            pyautogui to get me one step closer to being Tony Stark by enabling
            me to control my computer via gestures.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="poker"
            title="Computer Vision Poker"
            thumbnail={thumbPoker}
          >
            [CURRENTLY IN PROGRESS] <br /> Computer vision and OOP in C++,
            aiming to emphasize real-time game interactions.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    <Center>More coming soon!</Center>
    <Center>
      <Image
        src="/images/vin_salute.png"
        alt="Profile image"
        width="140"
        height="140"
      />
    </Center>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
