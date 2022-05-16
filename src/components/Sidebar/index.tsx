import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { SidebarNav } from './SidebarNav';
import {useSidebarContext} from '../../contexts/SidebarDrawerContext'

export function Sidebar(){

    const {isOpen, onClose} = useSidebarContext()

    const isFloatingSidebar = useBreakpointValue({
        base: true,
        lg: false
    }) 

    if(isFloatingSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav/>
        </Box>
    )
}