
import { StatusBar } from 'expo-status-bar'
import React, { ReactNode } from 'react'
import { Dimensions, Image, StyleSheet} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import theme, { Box } from './Theme'


const { width,height:wHeight } = Dimensions.get("window")
const aspectRatio = 1044 / 1565
const height = width * aspectRatio - 50;

export const assets = [require("../../assets/6.png"), require("../../assets/8.png"), require("../../assets/6.png")] as const;

interface ContainerProps {
  children: ReactNode,
  footer: ReactNode,
  pattern:0|1|2
}


const Container = ({ children, footer,pattern }: ContainerProps) => {
  const asset = assets[pattern]
  return (
    <KeyboardAwareScrollView>

    <Box height={wHeight} backgroundColor="title">
        


        <Box backgroundColor="white">
          <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
            <Image source={asset} style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
          </Box>
        </Box>

        <Box flex={1} overflow="hidden">
          <Image source={asset} style={{ width, height, ...StyleSheet.absoluteFillObject, top: -height * 0.61 }} />


          <Box flex={1} borderRadius="xl" borderTopLeftRadius="none" backgroundColor="white">
            {children}
          </Box>

        </Box>

        <Box backgroundColor="title" paddingTop="m" >
          {footer}

        </Box>

      </Box>
    </KeyboardAwareScrollView>

  )
}

export default Container
