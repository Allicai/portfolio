import {
  Link,
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
  <Layout title="Collage">
    <Container>
      <Title>
        Collage Image Processor
        <Badge>Java</Badge> 
        <Badge>Object-Oriented Design</Badge> 
      </Title>
      <Center my={6}>
        <Image src="/images/works/mvc_collage.png" alt="cm" />
      </Center>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>JUnit, Swing, JFrame, Maven</span>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/Allicai/CollageComplete">
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
        Collage uses the MVC (model-view-controller) design pattern. This image-processing program is based around a
        foundational &quot;pixel&quot; class, and its functions apply to various scopes, such as
        images, layers, and so on. There are features such as cropping, various filters, brighten and darken tools, blurring effects,
        layer creation and management, and more. The program was extensively tested using JUnit, and has a simple GUI for ease of use.
      </P>

      <Center my={6}>
        <Image src="/images/works/ood.png" alt="cm" />
      </Center>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'