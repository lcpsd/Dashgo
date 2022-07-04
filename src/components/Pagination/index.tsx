import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps{
    totalCountRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void 
}

function generatePagesArray(from: number, to:number){
    return [...new Array(to-from)]
    .map((_, index) => {
        return from + index + 1
    })
    .filter(page => page > 0)
}

const siblingsCount = 1

export function Pagination({totalCountRegisters,
    registersPerPage,
    currentPage,
    onPageChange}:PaginationProps){

    const lastPage = Math.floor(totalCountRegisters / registersPerPage)
    const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

    return(
        <HStack
        direction={["column", "row"]}
        mt="8"
        justify="space-between"
        align="center"
        spacing="6"
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <HStack spacing="2">

                {previousPage.length > 0 && previousPage.map(page => {
                    return <PaginationItem number={page} key={page}/>
                })}

                <PaginationItem number={currentPage} isCurrent/>

                {nextPages.length > 0 && previousPage.map(page => {
                    return <PaginationItem number={page} key={page}/>
                })}
            </HStack>
        </HStack>
    )
}