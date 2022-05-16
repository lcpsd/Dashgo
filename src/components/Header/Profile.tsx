import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData: boolean;

}

export function Profile({showProfileData = true}: ProfileProps){
    return(
        <Flex
        align="center"
        >
            {
                showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text>Lucas Cardoso</Text>
                    <Text color="gray.300" fontSize="small">lucascardosopsd@gmail.com</Text>
                </Box>
            }

            <Avatar size="md" name="Lucas Cardoso" src="https://github.com/lcpsd.png"/>
        </Flex>
    )
}