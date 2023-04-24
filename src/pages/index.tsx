import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Flex>
        <Link href={'./samples/sample01.tsx'}>sample01</Link>
      </Flex>
    </>
  )
}