import { Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbML from '../public/images/works/distilbert.png'
import thumbMM from '../public/images/works/marketmind.jpg'
// import thumbSnake from '../public/images/works/snake.png'
import thumbStark from '../public/images/works/vini_stark.png'
import thumbRPS from '../public/images/works/rps.png'
import thumbCollage from '../public/images/works/mvc_collage.png'
import thumbHSR from '../public/images/works/hsr.png'
import Image from 'next/image'
const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={25} mb={4} color={'blue.300'}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="emotion"
            title="NLP Model Evaluation"
            thumbnail={thumbML}
          >
            Comparing and benchmarking Logistic Regression, LSTM, and DistilBERT
            transformer models on a classification task.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="hsr" title="Optimized HS Rail" thumbnail={thumbHSR}>
            Algorithm to optimize high speed rail in the U.S. based on
            emissions, cost, passengers served, etc.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="collage"
            title="Collage Image Processor"
            thumbnail={thumbCollage}
          >
            Image processing software with cropping, filtering, layers, etc.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="rps"
            title="CV Rock-Paper-Scissors"
            thumbnail={thumbRPS}
          >
            Rock-paper-scissors using OpenCV.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="stark" title="Vinny Stark" thumbnail={thumbStark}>
            [IN DEVELOPMENT] <br /> Using computer vision to become Tony Stark
            by enabling gesture control of my desktop.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="marketmind" title="MarketMind" thumbnail={thumbMM}>
            [IN DEVELOPMENT] <br /> Agentic AI for the stock market...
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
