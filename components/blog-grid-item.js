import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

// BlogGridItem - specific grid item for my blog posts
export const BlogGridItem = ({ href, title, date }) => (
  <Box w="100%" textAlign="left" my={4} px={4} py={2} border="1px solid" borderColor="gray.200" borderRadius="md">
    <LinkBox as={NextLink} href={href} scroll={false} cursor="pointer">
      <LinkOverlay as="div">
        <Text fontSize={20} fontWeight="bold">{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} color="gray.500">{date}</Text>
    </LinkBox>
  </Box>
)



export const BlogGridItemStyle = () => (
  <Global
    styles={`
      .blog-grid-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `}
  />
)
