import { Container, Text, SimpleGrid, Flex, Image } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Link from 'next/link'

const blogs = [
  { id: '12-04-24', title: 'Snowflake❄️', topic: 'Reflections' }, 
  { id: '10-26-24', title: 'An Urge to Create', topic: 'Reflections' }
]

const Blogs = () => (
  <Layout title="Side Quests">
    <Container>
      <Flex align="center" justify="center">
        <Image
          src="/images/poke_walk.gif"
          alt="Quest GIF"
          width="60px"
          height="60px"
        />
      </Flex>
      <Flex align="center" justify="center" mb={2}>
        <Text as="h1" fontSize="4xl" mr={2} color={'blue.200'}>
          Quest Log
        </Text>
      </Flex>
      <SimpleGrid columns={1} gap={0}>
        {' '}
        {blogs.map(blog => (
          <Section delay={0.1} key={blog.id}>
            <Link href={`/quests/${blog.id}`} passHref>
              <Flex
                as="a"
                direction="row"
                align="center"
                justify="space-between"
                p={2}
                borderWidth="1px"
                borderRadius="lg"
                borderColor='gray.100'
                _hover={{ bg: 'blue.800' }}
              >
                <Text fontSize="md" color="blue.200" fontStyle="italic">
                  {blog.id}
                </Text>
                <Text fontSize="md" fontWeight="bold" color="blue.300">
                  {blog.title}</Text>
                <Text fontSize="md" color="blue.400">
                {blog.topic}
                </Text>
              </Flex>
            </Link>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blogs
export { getServerSideProps } from '../components/chakra'
