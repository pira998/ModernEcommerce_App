import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View,Image,Dimensions,StyleSheet} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Button } from '../../components'
import { Routes } from '../../components/Navigation'
import theme,{ Box,Text } from '../../components/Theme'
import { SLIDE_HEIGHT } from '../Onboarding/Slide'


const picture = {
  src: require("../../../assets/5.png"),
  height: 5336,
  width:3780
}
const {width} = Dimensions.get("window")

export const assets = [picture.src]
const Welcome = ({navigation}:StackNavigationProp<Routes,"Welcome">) => {
   
  return (
    <Box flex={1} backgroundColor="white">
        <Box flex={1} borderBottomRightRadius="xl" backgroundColor="welcome"  justifyContent= "flex-end" >
        <Image source={picture.src} style={{
            ...StyleSheet.absoluteFillObject,
            // top:SLIDE_HEIGHT-SLIDE_HEIGHT*0.61,
            padding:20,
            width: undefined,
            height: undefined,
          borderBottomRightRadius: 60,
            
         
        }} />
          
        
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="welcome"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        
        <Box flex={1} borderTopLeftRadius="xl" backgroundColor="white" justifyContent="space-evenly" alignItems="center">
  
          <Text variant="title1">Let's Get Started</Text>
          <Text variant="body" textAlign="center">Login to your account below or signup for secure transaction</Text>
          <Button variant="primary" label="Login" onPress={()=>navigation.navigate("Login")}/>
          <Button label="Signup" onPress={ ()=>navigation.navigate("SignUp")}/>
          <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
            <Text variant="body" style={{fontSize:15}}>  Forgot password? </Text>
          </BorderlessButton>

        </Box>
        </Box>
    </Box>
  )
}

export default Welcome
