import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import constants from '@config/constants'
import { ArrowRight3, CloudChange, CloudConnection, CloudNotif, DocumentCloud, FolderCloud, Grid1 } from 'iconsax-react'
import Head from 'next/head'
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
    <Flex>
      <Flex>
        <Text>Desktop-0122</Text>
        <ArrowRight3/>
        <Text>Documents</Text>
        <ArrowRight3/>
        <Text>Ace</Text>
      </Flex>
      <Flex>
        <Grid1 />
      </Flex>
    </Flex>
     </Box>

    </Box>
  </Fragment>
  )
}
