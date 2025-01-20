import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <meta property="og:title" content="Vinit Patel" />
      <meta property="og:description" content="Vinit Patel - Homepage" />
      <meta property="og:image" content="https://vinitp0310.vercel.app/vin_room.jpg" />
      <meta property="og:url" content="https://vinitp0310.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vin's Room" />
      <link rel="shortcut icon" href="/iso_icon.ico" type="image/x-icon" />

      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
