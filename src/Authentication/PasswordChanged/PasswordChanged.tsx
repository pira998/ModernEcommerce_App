import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Feather as Icon} from '@expo/vector-icons'
import { Box, Button, CloseButton, Container,Text } from '../../components'
import { Routes } from '../../components/Navigation'


const SIZE = 80;
const PasswordChanged = ({ navigation }: StackNavigationProp<Routes, "PasswordChanged">) => {
  return (
    <Container pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
        
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center">Email sent!</Text>
        <Text variant="body" textAlign="center" marginBottom="l">You can reset your password by following instructions in your email</Text>
        <Box alignItems="center" justifyContent="center">
          <Button variant="primary" onPress={() => navigation.navigate("login")} label="Reset password">

          </Button>
        </Box>
      </Box>
     

    </Container>
  )
}

export default PasswordChanged
