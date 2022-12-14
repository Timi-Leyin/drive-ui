import { Box, Center, Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import constants from '@config/constants'
import { ArrowRight2, ArrowLeft2, RowVertical, FolderCloud, Grid3, ArrowDown3, ArrowDown2 } from 'iconsax-react'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  return (
  <Fragment>
    <Head>
      <title>{constants.name + " | Home"}</title>
      <link rel="shortcut icon" href={"/logo.svg"} type="image/x-icon" />
    </Head>
    <Box p="30px" as="section">
     <Heading><FolderCloud variant='Bold' size="50px" className="primary-color" /> </Heading>

     <Box>
       {/* cloud navigation */}
    <Flex justify="space-between" my="20px" p="15px 30px" bg="gray.600" align="center" rounded="md" gap={3}>
      {/* // nav */}
      <Flex fontWeight="bold">
        <Text><Link href="">Desktop-0122</Link></Text>
        <ArrowRight2/>
        <Text><Link href="">Documents</Link></Text>
        <ArrowRight2/>
        <Text><Link href="">Ace</Link></Text>
      </Flex>
      {/* // display options */}
      <Flex gap={2} fontSize="25px">
        <Icon as={Grid3} variant="Bold" cursor="pointer"/>
        <Icon as={RowVertical} variant="Outline" cursor="pointer"/>
      </Flex>
    </Flex>

    {/* nav && tools */}
    <Flex justify="space-between" align="center" gap={3} my="10px">
      <Icon as={ArrowLeft2} />
      {/* // sorting */}
      <Box>
    <Flex align="center" gap={1}>Sort By <Flex cursor="pointer" align="center" fontWeight="bold" className="primary-color">Date  <ArrowDown2 className="primary-color" /></Flex> </Flex>
      </Box>
      {/* selet item */}
      <Text  cursor="pointer" fontWeight="bold" className="primary-color">Select item</Text>
    </Flex>

     </Box>

    <Box my="15px">
      <Flex cursor="pointer">
        {/* File */}
        <VStack p="20px" tabIndex={1} bg="gray.500" h="150px" rounded="lg">
        <Icon fontSize={"50px"} />
        <Heading as="h5" fontSize="18px">Pitch Deck</Heading>
        <Text fontSize={"14px"}>353 KB</Text>
        </VStack>
        {/* File */}
      </Flex>

    </Box>
    </Box>
  </Fragment>
  )
}
