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
  <Layout title="FinScript">
    <Container>
      <Title>
        FinScript - Financial Event-Based Strategy Generation (Private)
        <br />
        <Badge>NLP</Badge> <Badge>LLMs</Badge> <Badge>Market Analysis</Badge>{' '}
        <Badge>Snowflake</Badge>
      </Title>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>
            HuggingFace Transformers (FinBERT), Snowflake, PyTorch, AWS Lambda,
            FastAPI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Progress</Meta>
          <span>In Progress</span>
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
        FinScript is a work-in-progress platform designed to help individual
        investors keep up with fast-moving market news and understand how major
        events like rate hikes or earnings surprises might affect their
        investment strategy.
      </P>

      <P>
        The platform uses transformer-based NLP models like FinBERT and
        DistilBERT to extract insights from financial news, investor bulletins,
        and macroeconomic updates. These models classify key events and
        sentiment, and suggest strategic takeaways based on historical patterns.
      </P>

      <P>
        Under the hood, an AWS-powered data pipeline pulls news from sources
        like Yahoo Finance using custom ingestion tools. Tasks run on AWS Lambda
        and are scheduled using CloudWatch, with cleaned data stored in
        Snowflake for easy querying and feature engineering.
      </P>

      <P>
        A FastAPI backend routes inputs through the NLP models and returns
        strategy suggestions. Metadata, intermediate outputs, and user filters
        are stored in S3 to keep things simple, scalable, and low-cost as I
        prototype.
      </P>

      <Center my={6}>
        <Image
          src="/images/works/finscript_init.jpg"
          alt="banner"
          boxSize="400px"
        />
      </Center>
      <P>
        I originally started brainstorming FinScript after conversations with a
        few friends I made with experience in quantitative finance (mainly Finn
        Hulse and Diego Lopez). Based on their descriptions of the work being
        done at these firms, I wanted to explore how NLP models could surface
        relevant macro and market events that busy interns or analysts might not
        have time to dig into. What started as a fun ideation exercise quickly
        turned into a project that captured my interest and began developing.
        Above is a little easter egg: the whiteboard sketch I made on day one to
        map out the system’s architecture and data flow.
      </P>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
