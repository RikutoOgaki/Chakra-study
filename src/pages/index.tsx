import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Flex>
        <Link href={'/samples/01'}>samples01</Link>
      </Flex>
    </>
  )
}