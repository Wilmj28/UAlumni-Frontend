import React from 'react';
import { Flex, Box, Grid, Text, ChakraProvider } from "@chakra-ui/react"

function NavBar(){
    return (
      <ChakraProvider>
        <Flex h="40px" bg="#007935" justifyContent='space-between'>
          <Box w="20%" />
          <Box w="20%" >
            <Grid
              templateColumns="50% 50%"
              gap={2}
              justifyContent="space-between"
            >
              <Box  h="100%" minHeight= '40px' display='flex' justifyContent="center" alignItems="center">
                <Text fontSize="lg" fontWeight="bold" textAlign="center" textColor='white'>
                  EGRESADO
                </Text>
              </Box>
              <Box  h="100%" minHeight= '40px' display='flex' justifyContent="center" alignItems="center">
                <Text fontSize="lg" fontWeight="bold" textAlign="center" justifySelf="center" textColor='white'>
                  RECLUTADOR
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
        
      </ChakraProvider>
    );
}
export default NavBar;