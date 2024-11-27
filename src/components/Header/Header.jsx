import { Flex, Text } from '@chakra-ui/react'

import React from 'react'

const Header = () => {

    
  return (
    <Flex gap={6} marginTop="20px"  display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Text color="tomato"  fontSize={"50"}  >
        TABLE DETAILS
        </Text>
    </Flex>
  )
}

export default Header