// /pages/blogs/10-26-24.js
import { Container, Text, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Box, Image } from '@chakra-ui/react'

const BlogPost = () => {
  return (
    <Layout title="Create-ive">
      <Container maxW="container.md">
        <Heading as="h1" size="xl" mb={4} color="green.600">
          An Urge to
          <Text as="span" color="green.400" display="inline">
            {' '}
            Create
          </Text>
        </Heading>

        <Text fontSize="lg" color="gray.400" mb={6}>
          October 26, 2024
        </Text>
        <Text fontSize="md" mb={4}>
          My love for creating started small — a simple{' '}
          <Text as="b" color="green.400" display="inline">
            painting of a tree
          </Text>{' '}
          in elementary school. It wasn&apos;t groundbreaking, but it made my
          parents proud when they saw it displayed at a local gallery. That
          feeling stuck with me: making something could make others happy.
        </Text>

        <Text fontSize="md" mb={4}>
          Over the years, I built on that idea. From crafting and racing wooden
          cars in woodworking class to designing shelves with my Dad&apos;s
          tools, I developed a drive to make things, not just for school but for
          myself and for others. The feeling of making something on my own
          merits, and the joy it brought for the people I made it for, was
          addictive. Despite all the things I&apos;ve made, I still smile looking
          at things I made for friends, from little drawings to larger projects I
          made as actual gifts.
        </Text>

        <Box mb={4}>
          <Image
            src="/images/create-ive.png" // Replace with your image URL
            alt="A tree painting"
            w="100%" // Stretch image to fill width
            objectFit="cover" // Ensures the image covers the container
          />
        </Box>
        
        <Text fontSize="md" mb={4}>
          Today, I&apos;ve explored a wide range of creative outlets: drawing,
          3D modeling, 3D printing, designing clothing, creating music, video
          editing, coding, and even game development. I&apos;ve become a
          jack-of-all-trades, a Swiss army knife of creation. If you need
          something made, chances are, I can do it.
        </Text>

        {/* <Text fontSize="md" mb={4}>
          I don&apos;t know what got me to draw for the first time, but I do
          remember when I decided I liked it. I was in elementary school, and I
          made a simple painting of a tree for my art class, truly a dime a
          dozen. Some of the students in my class got their paintings displayed
          at a local gallery, and I was one of them. I remember my Mom taking
          way too many pictures of me (as she does in many of my memories), and
          thinking it was so easy to make people happy with art. Heck, all it
          took was a tree and my parents were beaming with pride. I was hooked,
          I wanted to {''}
          <Text as="b" color="green.400" display="inline">
            draw
          </Text>
          .
        </Text>

        <Text fontSize="md" mb={4}>
          Fast forward a few years and I was in middle school. I was taking a
          woodworking class that I was not particularly good at, but I enjoyed
          going through the motions as I cut, sanded, and smoothed wood for our
          projects. We built bridges out of popsicle sticks, birdhouses for the
          school garden, and even wooden cars that we raced at the end of the
          year. It was another time my parents overcelebrated my
          accomplishments, but I remember them smiling - and so, my
          understanding of what I could do to make people happy grew. I could{' '}
          <Text as="b" color="green.400" display="inline">
            craft
          </Text>
          .
        </Text>

        <Text fontSize="md" mb={4}>
          Over the years, these experiences began to accumulate. I went from
          making things for classes to having genuine interest in these
          seemingly useless skills. I pursued drawing, made shelves and cabinets
          in the garage with my Dad&apos;s tools, and began to truly consider a
          career as an engineer. I had developed the ability and the passion to{' '}
          <Text as="b" color="green.400" display="inline">
            create
          </Text>
          .
        </Text>

        <Text fontSize="md" mb={4}>
          I had developed an <Text as="i">arsenal</Text> - albeit, not the
          dangerous kind. I could draw and had learned 3D modeling and design,
          and could even make my designs a reality. I learned video editing,
          made my own music, created live wallpapers, began coding and tried my
          hand at nearly anything I could think of during the pandemic, even
          joining game dev teams. A certifiable jack of all trades, a swiss army
          knife of creativity. I was fueled by a desire to make things, to prove
          to myself that I could make anything I wanted to. I wanted to be able to
          have ownership over something, to be able to say I made it, to have left
          a mark, if not on the world then at least on person I made it for.
        </Text> */}

        <Text fontSize="md" mb={4}>
          I&apos;m no longer the reckless middle schooler who tried using my
          Dad&apos;s tools without supervision, but that same desire to create
          still fuels me today. I believe everyone has the ability to create,
          but not everyone puts the time or effort needed to pick a craft and
          hone it. Many are scared off by the thought of failure, of the time it
          takes to make something worthwhile, often before they even start.
          I&apos;m not saying everyone should be a master of all trades, but I
          never understand people who say they can&apos;t do something because
          they&apos;re not good at it. You never{' '}
          <Text as="b" color="green.500" display="inline">
            tried
          </Text>
          . What if you&apos;re a{' '}
          <Text as="b" color="green.400" display="inline">
            natural
          </Text>
          ? What if you&apos;re the{' '}
          <Text as="b" color="green.300" display="inline">
            best in the world
          </Text>{' '}
          at it? What if you{' '}
          <Text as="b" color="green.200" display="inline">
            love
          </Text>{' '}
          it?{' '}
          <Text as="b" display="inline">
            You&apos;ll never know.
          </Text>
        </Text>

        <Text fontSize="md" mb={4}>
          I&apos;ve met people who I consider{' '}
          <Text as="b" color="blue.200" display="inline">
            imaginative geniuses
          </Text>
          , but they&apos;ve never tried to make anything. I think that&apos;s a{' '}
          <Text as="b" color="red.300" display="inline">
            tragedy
          </Text>
          , this line between imaginative people and{' '}
          <Text as="b" color="purple.300" display="inline">
            creative
          </Text>{' '}
          ones. The world has likely missed out on great works of art, music,
          literature, and more because people never tried. I&apos;ve been told
          I&apos;m talented but I don&apos;t think that&apos;s the case. As the
          saying goes...
        </Text>
        <Box
          as="blockquote"
          fontStyle="italic"
          fontSize="lg"
          color="gray.500"
          borderLeft="4px solid"
          borderColor="green.400"
          pl={4}
          py={2}
          mb={6}
        >
          "The master has failed more times than the beginner has tried."
        </Box>

        <Text fontSize="md" mb={4}>
          ... and I&apos;m hardly a master. So please,{' '}
          <Text as="b" color="green.400" display="inline">
            try
          </Text>
          . Watch a tutorial, ask questions,{' '}
          <Text as="b" color="green.400" display="inline">
            LEARN SOMETHING
          </Text>
          . Make use of the resources we have today. I always joke that Google
          is free <Text as="b">for now</Text>, someday we&apos;ll appreciate
          that fact. The world is at your fingertips, and you can make{' '}
          <Text as="b" color="green.400" display="inline">
            anything you want
          </Text>
          . You just have to sacrifice a little time to learn how. I believe
          everyone has a desire to create, but some ideas will never escape the
          imagination. The difference between those who can create something
          tangible, something meaningful, and those who can&apos;t is not
          necessarily talent or natural ability. It&apos;s the sheer time put
          into a skill or craft. I am not inherently <Text as="b">good</Text> at
          anything I do. I have simply tried more things more times than you
          have and failed at them. So from someone who has likely failed more
          times than you have tried I urge you to{' '}
          <Text as="b" color="green.400" display="inline">
            create
          </Text>
          , and if I can be so bold to make a suggestion, try starting with a{' '}
          <Text as="b" color="green.400" display="inline">
            {' '}
            painting of a tree
          </Text>
          .
        </Text>
      </Container>
    </Layout>
  )
}

export default BlogPost
