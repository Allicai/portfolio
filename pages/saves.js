import { Container, Text, SimpleGrid, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Link from 'next/link'

const blogs = [
  { id: '1-13-25', title: 'Snowflake❄️', topic: 'Internship' }, 
  { id: '12-11-24', title: 'You Should Try', topic: 'Reflections' }
]

const Blogs = () => (
  <Layout title="Save Files">
    <Container>

      <Flex align="center" justify="center" mb={2}>
        <Text as="h1" fontSize="4xl" mr={2} color={'blue.500'}>
          Save Files
        </Text>
      </Flex>
      <SimpleGrid columns={1} gap={0}>
        {' '}
        {blogs.map(blog => (
          <Section delay={0.1} key={blog.id}>
            <Link href={`/saves/${blog.id}`} passHref>
              <Flex
                as="a"
                direction="row"
                align="center"
                justify="space-between"
                p={2}
                bg="black"
                borderWidth="1px"
                borderRadius="lg"
                borderColor='gray.100'
                _hover={{
                  bg: 'blue.600',
                  cursor: 'pointer',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s',
                }}
              >
                <Text fontSize="md" color="blue.200" fontStyle="italic">
                  {blog.id}
                </Text>
                <Text fontSize="md" fontWeight="bold" color="blue.300">
                  {blog.title}</Text>
                <Text fontSize="md" color="blue.200">
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
