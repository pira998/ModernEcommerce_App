import { Feather as Icon } from '@expo/vector-icons'
import React, { forwardRef} from 'react'
import { TextInput as RNTextInput,StyleSheet, TextInputProps as RNTextInputProps } from 'react-native'
import theme, { Box } from '../Theme'
import * as Yup from 'yup';
import RoundedIcon from '../RoundedIcon';

interface TextInputProps extends RNTextInputProps{

  icon: string,
  error?: string,
  touched?:boolean,
  
}
const SIZE = theme.borderRadii.m*2

const TextInput =forwardRef( ({icon,error,touched,...props }:TextInputProps,ref) => {

  const reColor = !touched?"darkGrey":(error?"danger":"primary")
  const color = theme.colors[reColor]
  

 
  return (    
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius='s'
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
    
      <Box padding="s">
      <Icon name={icon} size={16}  {...{color}}/>

      </Box>
      <Box flex={1}>
        <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor={color}
              
              {...{ref}}
              {... props } />
      </Box>
   
      {
        touched && (
          <RoundedIcon name={!error? "check":"x"} color="danger" backgroundColor={!error ? "primary" : "danger"} size={SIZE} />
         )
      }
    </Box>
  )
})

export default TextInput
