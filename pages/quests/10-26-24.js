// /pages/blogs/10-26-24.js
import { Container, Text, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Box } from '@chakra-ui/react'

const BlogPost = () => {
  return (
    <Layout title="Urge to Create">
      <Container maxW="container.md">
        <Heading as="h1" size="xl" mb={4} color="grey.300">
          You Should
          <Text as="span" color="blue.300" display="inline">
            {' '}
            Try
          </Text>
        </Heading>

        <Text fontSize="lg" color="gray.400" mb={6}>
          October 26, 2024
        </Text>

        <Text fontSize="md" mb={4}>
          Over the years, I&apos;ve come to realize that creating isn’t just something I do for school or others—it&apos;s something I do for myself. From crafting wooden cars in woodworking class to designing shelves with my dad&apos;s tools, I’ve always been fueled by the joy of making. It wasn&apos;t just the finished product that mattered; it was the thrill of bringing an idea to life and sharing it with others. That feeling has stayed with me, shaping who I am today.
        </Text>

        <Text fontSize="md" mb={4}>
          I&apos;ve explored so many creative outlets: drawing, 3D modeling, designing clothes, making music, video editing, coding, and even game development. Each new venture taught me something valuable. People often tell me I&apos;m talented, but what they don&apos;t see is the time and effort behind the skills I&apos;ve built. The truth is, most people with great ideas never pick up the tools or skills they need to make their visions real—and that frustrates me. Imagination alone isn&apos;t enough. The line between {' '}
          <Text as="b" color="green.300" display="inline">
            imagining
          </Text> and {' '}
          <Text as="b" color="purple.300" display="inline">
            creating
          </Text> is just effort and persistence.
        </Text>

        <Text fontSize="md" mb={4}>
          I&apos;ve met people who have brilliant ideas but never act on them. It&apos;s a{' '}
          <Text as="b" color="red.300" display="inline">
            tragedy
          </Text>
          . So much potential for great music, art, or inventions is lost simply because people never{' '}
          <Text as="b" color="blue.400" display="inline">
            try
          </Text>
          . It&apos;s irrational to claim you aren’t good at something without ever attempting it. Nobody masters a skill overnight. You won&apos;t know if you&apos;re naturally gifted or if it&apos;s something you&apos;ll fall in love with until you give it a chance.
        </Text>

        <Box
          as="blockquote"
          fontStyle="italic"
          fontSize="lg"
          color="gray.500"
          borderLeft="4px solid"
          borderColor="blue.400"
          pl={4}
          py={2}
          mb={6}
        >
          "The master has failed more times than the beginner has tried."
        </Box>

        <Text fontSize="md" mb={4}>
          I&apos;m no master, but I&apos;ve failed more times than I can count—and that&apos;s exactly how I&apos;ve learned. If you want to create something,{' '}
          <Text as="b" color="blue.400" display="inline">
            try
          </Text>
          . Watch a tutorial, ask questions,{' '}
          <Text as="b" color="blue.400" display="inline">
            LEARN SOMETHING
          </Text>
          . I often joke that people don&apos;t appreciate that Google is free; we live in a time where resources are at our fingertips. The difference between people who create and those who don&apos;t isn&apos;t talent—it&apos;s the time and effort they&apos;re willing to invest.
        </Text>

        <Text fontSize="md" mb={4}>
          Everyone has the capacity to create, but ideas too often stay trapped in the imagination. Don&apos;t let fear of failure or lack of immediate skill hold you back. From someone who&apos;s failed more times than most, I urge you to{' '}
          <Text as="b" color="purple.300" display="inline">
            create
          </Text>
          . The world needs your ideas, your music, your art—whatever it is you&apos;ve imagined. We&apos;re missing out on things we can&apos;t imagine because too many people never{' '}
          <Text as="b" color="blue.400" display="inline">
            try
          </Text>
          . 
        </Text>
      </Container>
    </Layout>
  )
}

export default BlogPost
