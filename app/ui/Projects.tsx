'use client';

import Card from "./Card";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
export default function Projects() {
return (
  <div className="bg-[#F9F9F9] pt-40 flex w-full justify-center flex-col items-center">
    <div style={{margin: '0 auto', width: '70%'}} className="flex text-left">

    <Stack spacing={4}>
      <Text
        textTransform={'uppercase'}
        color={'blue.400'}
        fontWeight={600}
        fontSize={'sm'}
        bg={useColorModeValue('blue.50', 'blue.900')}
        p={2}
        alignSelf={'flex-start'}
        rounded={'md'}>
        Projects
      </Text>

    </Stack>
    </div>
    
  <div className=' flex w-full justify-center flex-col items-center'>
    <Card image='/mma-homepage.png' title="MMA Fight Predictor" text={`A sports predictive web app/model that predicts the outcome of upcoming fights in the next UFC event. Through intense data analysis I found massively impacting fight factors that betting competitors and Vegas havent noticed,
`     } url='https://mma-fight-predictor.netlify.app/' github={'https://github.com/danbeaumont95/mma-fight-predictor-frontend'}/>
    <Card image='/dans-money-table-3.png' title="Money Management" text={`A money management app, in which users can link 1 or more bank accounts to instantly track both ingoings and outgoings. Built using Python and React, this was my take on a financial app like Monzo or Tred.
`     } url='https://dans-money.web.app/' github={'https://github.com/danbeaumont95/money-management-app-frontend'}  buttonColour={'#FC0086'} secondButtonColour={'#5224D8'}/>
  </div>
  </div>
)
}
