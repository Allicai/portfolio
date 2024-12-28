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
          December 23, 2024
        </Text>

        <Flex align="center" justify="center">
        <Image
          src="/images/works/vin_cook.png"
          alt="Writing"
          width="250"
          height="250"
        />
      </Flex>
      </Container>
    </Layout>
  )
}

export default BlogPost
