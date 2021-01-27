import React from 'react'
import { View, Text } from 'react-native'
import { Box, Theme } from './Theme'
import {Feather as Icon} from '@expo/vector-icons'

interface RounderIconProps {
  name: string,
  size: number,
  color:keyof Theme['colors'],
  backgroundColor: keyof Theme['colors']
}

const RoundedIcon = ({name,size,color,backgroundColor}:RounderIconProps) => {
  const iconSize = size * 0.8
  return (
    <Box
      style={{borderRadius:size/2}}
      height={size}
      width={size}
      alignItems="center"
      justifyContent="center"
      {...{backgroundColor}}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{color}} >
        <Icon
          size={iconSize}
          {...{ name }} />
      </Text>
     
    </Box>
  )
}

export default RoundedIcon
