import React from 'react'
import { ScrollView, Text, VStack, Icon, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animate-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Text fontSize="md" w="full">
            Simple Todo app for everyday use. You can add tasks, mark them done
            and delete them if you no longer wish to see them
          </Text>
          <Text fontSize="md" bold w="full">
            Dev Info
          </Text>
          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://dhruvgursahani.vercel.app"
            leftIcon={
              <Icon as={Feather} name="globe" size="sm" opacity={0.5} />
            }
          >
            Go to website
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/dhruv_gursahani"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @dhruv_gursahani
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
