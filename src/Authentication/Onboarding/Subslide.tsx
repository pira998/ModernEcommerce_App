import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import {Button} from '../../components'

interface SubslideProps {
  
    description:string,
    last?: boolean,
    onPress:() => void
   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },
    description:{
        fontFamily:"SFProText-Semibold",
        fontSize:16,
        color:"#0c0d34",
        lineHeight:24,
        textAlign:"center",
        marginBottom:40
    }
})

const Subslide = ({description,last,onPress}:SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <Button label={last ? "Let's get started" : "Next"} variant={last ? "primary" : "default"} {...{onPress}}/>
        </View>
    )
}

export default Subslide;