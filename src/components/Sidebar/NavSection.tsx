import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface NavSectionProps{
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps){
    return(
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
                Geral
            </Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}