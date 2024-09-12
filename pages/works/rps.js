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
    <Layout title="CV RPS">
      <Container>
        <Title>
          CV Rock-Paper-Scissors {' '}
          <Badge>Computer Vision</Badge> {' '}
          <Badge>AI</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/cip.png" alt="banner" />
        </Center>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>OpenCV, CV2, mediapipe</span>
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
         {/*}         
        <P>
          This project was completed under the supervision of NLP experts at Northeastern University.
          The goal was to compare the performance of three different models on a Kaggle dataset that
          provided text data and emotional labels.
        </P>
        <P>
          The models used in the experiment were Logistic Regression, LSTM, and a 
          DistilBERT transformer model. I prepared the data and created training, testing, 
          and validation dataset. The three models performed well, resulting in accuracies of 87%, 92%, and 93% respectively, with
          the DistilBERT model showing the most promise (likely due to its self-attention mechanism).
        </P>
        <Center my={6}>
          <Image src="/images/works/distilbert.png" alt="cm" />
        </Center>
        */}
      </Container>
    </Layout>
  )
  
  export default Projects
  export { getServerSideProps } from '../../components/chakra'