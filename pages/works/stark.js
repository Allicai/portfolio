import {
  //Link,
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Projects = () => (
  <Layout title="Vinny Stark">
    <Container>
      <Title>
        Vinny Stark <Badge>Computer Vision</Badge> <Badge></Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>PyAutoGUI, OpenCV, CV2, mediapipe</span>
        </ListItem>
        <ListItem>
          <Meta>Progress</Meta>
          <span>In Progress</span>
        </ListItem>
      </List>

      <P>
        This project is a set of computer vision scripts that are activated via
        different gestures, toggling between a mode where I can control settings
        such as brightness, volume, playback, etc. and one where I can control
        the mouse, dragging and clicking as needed.
      </P>

      <Center my={6}>
        <Image src="/images/works/vin_cook.png" alt="banner" boxSize="200px" />
      </Center>

      <P>
        The scripts use PyAutoGUI to simulate keyboard and mouse inputs, and
        OpenCV through mediapipe to detect gestures.
      </P>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
