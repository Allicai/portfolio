import {
    //Link,
    Container,
    Badge,
    List,
    ListItem,
    Center,
    Image,
    Link,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  // import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Projects = () => (
    <Layout title="CV RPS">
      <Container>
        <Title>
          CV Rock-Paper-Scissors {' '}
          <Badge>Computer Vision</Badge> {' '}
          <Badge>AI</Badge>
        </Title>

      <Center my={6}>
        <Image src="/images/works/rps.png" alt="banner" />
      </Center>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>OpenCV, CV2, mediapipe</span>
          </ListItem>
          <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/Allicai/RPS_CV">
            GitHub Link
          </Link>
          </ListItem>
          <ListItem>
            <Meta>Progress</Meta>
            <span>Completed</span>
          </ListItem>
          {/*<ListItem>
            <Meta>When</Meta>
            <span>Spring 2023</span>
          </ListItem>
           <ListItem>
            <Meta>Manual</Meta>
            <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
          </ListItem> */}
        </List>
          <P>
            This project was my first foray into computer vision. It is a simple rock-paper-scissors game that uses your webcame to detect
            your hand gestures. The recognition relies on the gestures being made vertically, with the palm facing the camera. The script detects
            raised fingers to determine the player&apos;s choice, i.e. a peace sign for scissors. The computer&apos;s choice is randomly generated.
          </P>
          <P>
            The game can be started by launching the script and clicking &quot;s&quot;, at which point a countdown begins and the player must make their gesture before it ends.
            There is also a &quot;cheat mode&quot; that can be activated by pressing &quot;d&quot; in which the computer waits an imperceptible amount of time
            to always pick the winning move.
          </P>
      </Container>
    </Layout>
  )
  
  export default Projects
  export { getServerSideProps } from '../../components/chakra'