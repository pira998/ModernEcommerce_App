import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import theme from './Theme'

interface ButtonProps {
  variant: "default" | "primary"|"transparent",
  label?: string,
  onPress: () => void,
  children?:React.ReactNode
  
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems:"center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign:"center"
  }
})

const Button = ({variant,label,onPress,children}:ButtonProps) => {
  const backgroundColor = variant==="primary"? theme.colors.primary:(variant==="transparent"? "transparent":"rgba(12,13,52,0.05)")
  const color = variant==="primary"? "white" : "#0C0D34"
  
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{onPress}}
    >
      <View >
        {children? children : (<Text style={[styles.label,{color}]}>
          {label}
        </Text>)}
        
      </View>
   </RectButton>
  )
}

Button.defaultProps = { variant: "default"}
export default Button