import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="sm">
      <br></br>
      This website is built based on{' '}
      <Link href="https://www.craftz.dog/" target="_blank" colorScheme="teal">
        Takuya Matsuyama&apos;s website
      </Link>
      .
    </Box>
  )
}

export default Footer