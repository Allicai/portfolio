import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={1.0} fontSize="sm" color='gray.500'>
      <br></br>
      This website is based on{' '}
      <Link href="https://www.craftz.dog/" target="_blank" color={'gray.300'}>
        Takuya Matsuyama&apos;s website
      </Link>
      .
    </Box>
  )
}

export default Footer