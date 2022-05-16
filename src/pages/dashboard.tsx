import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
// Fox fix 'window is not defined' error in Apex charts
import dynamic from 'next/dynamic';
import { ApexOptions } from "apexcharts";
import { Header } from "../components/Header";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard(){

    const options: ApexOptions = {
        chart: {
            toolbar:{
                show: false
            },
            zoom:{
                enabled: false
            },
            foreColor:theme.colors.gray[500]
        },
        grid:{
            show: false,
        },
        dataLabels:{
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        stroke: {
            colors: [theme.colors.pink[500]]
        },
        xaxis:{
            type: 'datetime',
            axisBorder:{
                color: theme.colors.gray[600],
            },
            axisTicks:{
                color: theme.colors.gray[600]
            },
            categories:[
                '2021-03-01T00:00:00.000z',
                '2021-03-02T00:00:00.000z',
                '2021-03-03T00:00:00.000z',
                '2021-03-04T00:00:00.000z',
                '2021-03-05T00:00:00.000z',
                '2021-03-06T00:00:00.000z',
                '2021-03-07T00:00:00.000z',
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient:{
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3
            },
            colors: [theme.colors.pink[500]]
        },
    }
    const series = [
        {
            name: "series1", data: [10, 67, 99, 102, 44, 77, 15]
        }
    ]
    
    return(
        <Flex
        direction="column" h="100vh"
        >
            <Header/>

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">

                    <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>

                    <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}