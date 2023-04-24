import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Flex>
        <Link href={'/smaples/01'}>sample01</Link>
      </Flex>
    </>
  )
}