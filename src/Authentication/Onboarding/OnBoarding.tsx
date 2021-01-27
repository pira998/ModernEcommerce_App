import React, { useRef }from 'react'
import { View, Image, StyleSheet,Dimensions} from 'react-native'
import Animated, { divide, Extrapolate, multiply,interpolate } from "react-native-reanimated";
import { useScrollHandler,interpolateColor } from 'react-native-redash/lib/module/v1'


import Slide,{SLIDE_HEIGHT} from './Slide'
import Subslide from './Subslide'
import Dot from './Dot'
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../components/Navigation';



const BORDER_RADIUS = 75
const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white",
    },
    slider :{
        height:SLIDE_HEIGHT,
        borderBottomRightRadius:BORDER_RADIUS,
    },
    footer:{
        flex:1
    },
    footerContent:{
        
        flex:1,
        backgroundColor:"white",
        borderTopLeftRadius:BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        // backgroundColor: "rgba(100,200,300,0.5)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
        
       
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

const slides = [
    {
        label: "Safe And Secure",
        color: '#BFEAF5',
        description: "Your information is always confidential, your funds are protected",
        picture:require("../../../assets/1.png")
    },
    {
        label: "Guaranteed delivery",
        color: '#BEECC4',
        description: "Your money arrives at the time promised. Or your fees back",
        picture:require("../../../assets/2.png")
    },
    {
        label: "Send money worry-free",
        color: '#FFE4D9',
        description: "Trusted by over 3million people worldwide",
        picture:require("../../../assets/3.png")
    }

]
export const assets = slides.map(slide=>slide.picture)

// const image = { uri: "https://cdn.dribbble.com/users/992274/screenshots/6114473/phone_hand_kit8-net.jpg" };
const OnBoarding = ({navigation}:StackNavigationProp<Routes,"OnBoarding">) => {
    const scroll = useRef<Animated.ScrollView>(null)
    const {scrollHandler,x} = useScrollHandler();
    // const onScroll = onScrollEvent({x})
    const backgroundColor = interpolateColor(x,{
        inputRange:slides.map((_,i)=>i*width),
        outputRange:slides.map(slide=>slide.color)
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider,{backgroundColor}]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                        outputRange: [0, 1, 0],
                        extrapolate:Extrapolate.CLAMP,
                    })
                    return(
                        <Animated.View style={[styles.underlay,{opacity}]} key={index}>
                            <Image source={picture} style={styles.picture}/>
                        </Animated.View>
                        )
                })} 
                
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({label,picture},index)=>(
                        <Slide key={index} {...{label,picture}} right={!!(index%2)}/>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject,backgroundColor}}>
                    <Animated.View style={[styles.footerContent]}>
                        <View style={styles.pagination}>
                            {slides.map((_, index) => (<Dot key={index} currentIndex={ divide(x,width)} {...{index,x}}/>))}
                        </View>
                        <Animated.View style={{
                            flex: 1,
                            flexDirection: "row",
                            width:width*slides.length,
                            transform: [{ translateX: multiply(x, -1) }]
                        }}>
                            {slides.map(({ description }, index) => {
                                const last = index === (slides.length - 1)
                                return (
                                    
                                    <Subslide
                                        key={index}
                                        onPress={() => {
                                            if (last) {
                                                navigation.navigate("Welcome")
                                            }else if (scroll.current) {
                                                scroll.current
                                                    .getNode()
                                                    .scrollTo({ x: width * (index + 1), animated: true })
                                            
                                            
                                            }
                                        }}
                                        {...{ description,last }}
                           
                                    />
                                )
                            })}
                                
                        

                        </Animated.View>
                        
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    )
}

export default OnBoarding