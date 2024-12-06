// /pages/blogs/10-26-24.js
import { Container, Text, Heading, Flex } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <Layout title="Create-ive">
      <Container maxW="container.md">
        <Heading as="h1" size="xl" mb={4} color="blue.300">
          Snowflake❄️
        </Heading>

        <Text fontSize="lg" color="gray.400" mb={6}>
          December 4, 2024
        </Text>

        <Text fontSize="lg" color="red.400" mb={2} align="center">
          Work in Progress...
        </Text>

        <Flex align="center" justify="center">
        <Image
          src="/images/quests/blackbeard.jpeg"
          alt="Writing"
          width="400"
          height="400"
        />
      </Flex>
      </Container>
    </Layout>
  )
}

export default BlogPost
