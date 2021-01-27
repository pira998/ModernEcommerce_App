import React from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { Box,Text } from '../Theme'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: ()=>void
}

const Checkbox = ({label,onChange,checked}:CheckboxProps) => {

  return (
    <BorderlessButton onPress={()=>onChange()} style={{justifyContent:"center"}}>
      <Box flexDirection="row" alignItems="center">

        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}>
        <Icon name="check" color="white"/>
      </Box>
      <Text variant="button">{label}</Text>
     </Box>
    </BorderlessButton>
    
  )
}

export default Checkbox
