import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex
        align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Lucas Cardoso</Text>
                <Text color="gray.300" fontSize="small">lucascardosopsd@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Lucas Cardoso" src="https://github.com/lcpsd.png"/>
        </Flex>
    )
}