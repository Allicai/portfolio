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
    <Layout title="HSR Algo">
      <Container>
        <Title>
          High Speed Rail Algorithm {' '}
          <Badge>Algorithms </Badge> {' '} 
          <Badge>API </Badge> {' '}
          <Badge>Optimization </Badge> 
        </Title>
        <Center my={6}>
          <Image src="/images/works/hsr_train.png" alt="banner" />
        </Center>
        <P>
          This project was inspired by my experience of various public transportation systems in Europe, Asia, and New York itself
          as well as my personal struggle with commuting between Boston and New York during holidays. Using the 
          knowledge I had gained about algorithms and search spaces, and with the information I gathered regarding the infrastructure
          of the United States, particularly this <Link href="https://www.scientificamerican.com/article/why-high-speed-bullet-trains-wont-work-in-the-u-s-right-now/#:~:text=High-speed%20rail%20could%20reduce,or%20faster%20than%20air%20travel."> article</Link>,
          I set out to design an algorithm to optimize the placement of high speed rail systems across the continent.
        </P>
        <P>
          The models used in the experiment were Logistic Regression, LSTM, and a 
          DistilBERT transformer model. I prepared the data and created training, testing, 
          and validation dataset. The three models performed well, resulting in accuracies of 87%, 92%, and 93% respectively, with
          the DistilBERT model showing the most promise (likely due to its self-attention mechanism).
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>PyTorch, Keras, Scikit-learn, TensorFlow, Seaborn, NLTK</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/Allicai/EmotionClassification">
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
        <Center my={6}>
          <Image src="/images/works/distilbert.png" alt="cm" />
        </Center>
      </Container>
    </Layout>
  )
  
  export default Projects
  export { getServerSideProps } from '../../components/chakra'