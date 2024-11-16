import { Container, Text, SimpleGrid, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Link from 'next/link'

const blogs = [
  { id: '10-26-24', title: "An Urge to Create", topic: 'Reflections' }
  // more to come!
]

const Blogs = () => (
  <Layout title="Side Quests">
    <Container>
      <Text as="h1" fontSize="3xl" textAlign="center" mb={6}>
        Blog Posts
      </Text>
      <SimpleGrid columns={1} gap={0}>
        {' '}
        {/* Reduced gap between items */}
        {blogs.map((blog) => (
          <Section delay={0.1} key={blog.id}>
            <Link href={`/quests/${blog.id}`} passHref>
              <Flex
                as="a"
                direction="row"
                justify="space-between"
                p={2}
                borderWidth="1px"
                borderRadius="lg"
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md" fontWeight="bold">
                  {blog.id}
                </Text>
                <Text fontSize="md">{blog.title}</Text>
                <Text fontSize="md" color="gray.500">
                  Topic: {blog.topic}
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
