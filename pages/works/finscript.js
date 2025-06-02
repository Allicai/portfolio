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
        investors stay informed and adapt their financial strategies based on
        real-time macroeconomic events and market-moving news.
      </P>

      <P>
        Users receive event-driven insights extracted from news sources like
        Yahoo Finance and investor bulletins, enriched using transformer-based
        NLP models such as FinBERT and DistilBERT. The platform surfaces
        relevant financial events—like interest rate changes, earnings
        surprises, or geopolitical risks and connects them to potential
        investment or savings strategy shifts.
      </P>

      <P>
        The backend architecture leverages an AWS-based ingestion pipeline,
        including Lambda for task automation and CloudWatch for scheduling, with
        user-provided credentials allowing compliant data access from premium
        financial sites. Cleaned and structured data is stored in Snowflake for
        downstream querying and feature construction.
      </P>

      <P>
        A FastAPI microservice routes input through fine-tuned LLMs to classify
        sentiment and event type, then generates suggested strategic actions
        based on historical financial context. Intermediate metadata, user
        preferences, and caching are handled via DynamoDB for real-time
        performance and scalability.
      </P>

      <P>
        I originally wanted to just ideate on something I thought would be
        useful and how I would develop a demo and product, but it ended up
        becoming a full-fledged project that I&apos;ve begun developing. Below
        is a little easter egg of a whiteboard sketch I made to visualize the
        architecture and data flow of the system.
      </P>

      <Center my={6}>
        <Image
          src="/images/works/finscript_init.jpg"
          alt="banner"
          boxSize="400px"
        />
      </Center>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
