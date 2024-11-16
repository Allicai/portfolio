import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
      <Image
          src="/images/chibi_iso.png"
          alt="Profile image"
          width="20"
          height="20"
          mr={4}
        />
        <Text
          color={useColorModeValue('gray.800', 'green.200')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={4}
        >
          Vinit Patel
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
