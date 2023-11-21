'use client';

import { Stack, Flex, useBreakpointValue } from '@chakra-ui/react';
import Card from './Card';
import HighlightedText from './HighlightedText';

export default function Projects() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      id="projects"
      bg="#F9F9F9"
      pt={40}
      w="full"
      justify="center"
      flexDir="column"
      align="center"
    >
      <Flex margin="0 auto" width="70%" textAlign={isMobile ? "left" : 'center'}>
        <Stack spacing={4}>
          <HighlightedText text={'Projects'} />
        </Stack>
      </Flex>

      <Flex w="full" justify="center" flexDir="column" align="center">
        <Card
          image="/mma-homepage.png"
          title="MMA Fight Predictor"
          text={`A sports predictive web app/model that predicts the outcome of upcoming fights in the next UFC event. Through intense data analysis I found massively impacting fight factors that betting competitors and Vegas havent noticed`}
          url="https://mma-fight-predictor.netlify.app/"
          github="https://github.com/danbeaumont95/mma-fight-predictor-frontend"
        />
        <Card
          image="/dans-money-table-3.png"
          title="Money Management"
          text={`A money management app, in which users can link 1 or more bank accounts to instantly track both ingoings and outgoings. Built using Python and React, this was my take on a financial app like Monzo or Tred.`}
          url="https://dans-money.web.app/"
          github="https://github.com/danbeaumont95/money-management-app-frontend"
          buttonColour="#FC0086"
          secondButtonColour="#5224D8"
        />
      </Flex>
    </Flex>
  );
}
