import { Container, Text, SimpleGrid, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Link from 'next/link'
import Image from 'next/image'

const blogs = [
  { id: '1-13-25', title: 'Resumes and Resilience', topic: 'Advice' },
  { id: '12-11-24', title: 'Try', topic: 'Reflection' }
]

const Blogs = () => (
  <Layout title="Save Files">
    <Container>
      {/* <Flex align="center" justify="center" mb={2}>
        <Text as="h1" fontSize="4xl" mr={2} color={'blue.300'}>
          Save Files
        </Text>
      </Flex> */}
      <Flex align="center" justify="center" mb={7}>
        <Image
          src="/images/Website_banner.png"
          alt="Banner"
          width="2000"
          height="500"
        />
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
                p={3}
                bg="gray.800"
                borderWidth="1px"
                borderRadius="lg"
                borderColor="blue.600"
                _hover={{
                  bg: 'black',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s'
                }}
              >
                <Text fontSize="md" color="blue.200" fontStyle="italic">
                  {blog.id}
                </Text>
                <Text fontSize="md" fontWeight="bold" color="blue.300">
                  {blog.title}
                </Text>
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
