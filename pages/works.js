import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbML from '../public/images/works/distilbert.png'
import thumbPoker from '../public/images/works/poker.png'
import thumbSnake from '../public/images/works/snake.png'
import thumbStark from '../public/images/works/vini_stark.png'
import thumbRPS from '../public/images/works/rps.png'
import thumbCollage from '../public/images/works/mvc_collage.png'

// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="emotion" title="ML Model Evaluation" thumbnail={thumbML}>
            Comparing Logistic Regression, LSTM, and DistilBERT transformer models
            on an emotional classification task based around a Kaggle dataset.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="collage" title="Collage Image Processor" thumbnail={thumbCollage}>
            Imprage processing software in Java with features such as cropping,
            filtering, layer creation and management, etc.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="snake"
            title="CV Snake Game"
            thumbnail={thumbSnake}
          >
            An implementation of the classic Snake game using OpenCV and Python to add dimensionality.
          </WorkGridItem>
        </Section>


        <Section delay={0.1}>
          <WorkGridItem
            id="forge"
            title="'Vini' Stark"
            thumbnail={thumbStark}
          >
            [CURRENTLY IN PROGRESS] <br /> Set of scripts using cv2 and pyautogui to get me one step closer to
            my dream of being Tony Stark.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="rps"
            title="CV Rock-Paper-Scissors"
            thumbnail={thumbRPS}
          >
            Rock-paper-scissors using OpenCV, with a 
            "cheat mode" where the computer waits momentarily to choose the winning hand.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="poker"
            title="Computer Vision Poker"
            thumbnail={thumbPoker}
          >
            [CURRENTLY IN PROGRESS] <br /> Computer vision and OOP in C++, aiming to emphasize
            real-time game interactions.
          </WorkGridItem>
        </Section>


      </SimpleGrid>

      {/*
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Club Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="mbta" thumbnail={notAvailable} title="Swarm Drone Carrier">
            [CURRENTLY IN PROGRESS]
          </WorkGridItem>
        </Section> 
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> 
      </SimpleGrid> */}

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'