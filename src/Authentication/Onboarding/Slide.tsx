import React from 'react'
import { View, Dimensions,StyleSheet } from 'react-native'

import {Text} from '../../components'


interface SlideProps {
    label:string;
    right?: boolean;
    picture:number;
}

const {width,height} = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61*height;
const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
      
        height:100,
        justifyContent:"center",
       

    },
 
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        top:SLIDE_HEIGHT-SLIDE_HEIGHT*0.61,
        width: undefined,
        height: undefined,
        borderBottomRightRadius:75,
    }
})

const Slide = ({label,right}:SlideProps) => {
    const transform = [
        {translateY:(SLIDE_HEIGHT-100)/2},
        {translateX:((right ? 1 : -1)*(width/2-50))},  
        {rotate:((right? "-90deg" : "90deg"))}
        ]
    return (
        <View style={styles.container}>
            
            <View style={[styles.titleContainer,{transform}]}>
                  <Text variant="hero">{label}</Text>
            </View>
            
        </View>
    )
}

export default Slide
