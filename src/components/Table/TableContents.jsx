import {  Box, Button, HStack, Input, Spinner, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { Suspense, useState } from 'react'
import { useAPI } from '../../hooks/useAPI'
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import useCleanName from "../../util/cleanName"
import filterData from '../../util/filterData';

const Tablecontents = () => {

  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");

    const {data, setData, isLoading, isError} = useAPI();
    

    const sorting  = (col) => {
      if( order === "asc") {
        const sorted = [...data].sort((a,b) => { 
          let nameA = useCleanName(a[col].toLowerCase());
          let nameB = useCleanName(b[col].toLowerCase());
          if (nameA > nameB) {
            return 1
          } else {
            return -1
          };
          return 0;
          
      });
        setData(sorted);
        console.log(data);
        setOrder("dsc");
      }
      if( order == "dsc") {
        const sorted = [...data].sort((a,b) => { 
            let nameA = useCleanName(a[col].toLowerCase());
            console.log(nameA)
            let nameB = useCleanName(b[col].toLowerCase());
            console.log(nameB)
            if (nameA < nameB) {
              return 1
            } else {
              return -1
            };
            return 0;
            
        }
      );
        setData(sorted);
        setOrder("asc");
      }
    }

  const filterDetails = filterData(filter);

    const tableDetails = filterDetails.map((item ) => (
      <Tr key={item.id}>
        <Td isNumeric>{item.id}</Td>
        <Td>{item.name}</Td>
        <Td >{item.username}</Td>
        <Td>{item.address.city}</Td>
    </Tr>

    ))

    

    

  return (
    <>
    <HStack display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Input
        placeholder='Filter based on city...'
        variant='filled' 
        color={"tomato"}
        size={"lg"}
        position={"relative"}
        width={{ base:"400px",md:"500px",lg:"600px"}} 
        marginTop={"20px"}
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value )
          
        }}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            e.preventDefault();
          }
        }}  
        />
    </HStack>
    { isLoading &&
     <VStack colorpalette="teal" marginTop="40px">
      <Spinner color="colorpalette.600" size="lg"/>
      <Text color="colorpalette.600">Loading...</Text>
    </VStack>
    }
    {
      isError &&
      <Box 
      display={"flex"} 
      alignItems={"center"} 
      justifyContent={"center"} 
      marginTop={"50px"}>
        <Text>Unable to fetch the data...</Text>
      </Box>

    }
    
    {!isLoading && !isError && <TableContainer 
      w={{base:"90%",md:"80%",lg:"70%",xl:"60%"}} 
      justify="center" 
      mx="auto" 
      mt="30px" 
      outline={"double"}
      >
                <Table size={{base:"sm",md:"md",lg:'lg'}}>
                    <Thead backgroundColor={"black"} >
                        <Tr color={"tomato"}>
                            <Th isNumeric color={"white"}>ID</Th>
                            <Th color={"white"}>
                                  Name
                                  <Button 
                                    onClick={() => sorting("name")}
                                    marginLeft="100px">
                                    { (order === "asc") ?
                                      <i><FaSortAlphaDown /></i>
                                      : <i><FaSortAlphaDownAlt/></i>
                                    }
                                  </Button>
                            </Th>
                            <Th color={"white"}>Username</Th>
                            <Th  color={"white"}>City</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableDetails}
                    </Tbody>
                </Table>
      </TableContainer>
    }
    </>
  )
}
export default Tablecontents

