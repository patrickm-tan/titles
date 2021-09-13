import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableHighlightBase, TouchableHighlight, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import {COLORS, ICONS} from '../utilities/colors.js'

function getColor(props) {
    if (props == 'GAMES') {
        return COLORS.GAMES
    }
    else if (props == 'MOVIES') {
        return COLORS.MOVIES
    }
    else {
        return COLORS.OTHER
    }
}

function getIcon(props) {
    return "../../assets/icons/" + props
}

const Card = (props) => {
    const icon = ICONS[props.icon]
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={getColor(props.category)}
                style={styles.card}>
                    <View style={{flex:2, alignItems: 'left', justifyContent: 'center'}}>
                        <Text style={styles.category}>
                            {props.category}
                        </Text>
                        <Text style={styles.topic}>
                            {props.title}
                        </Text>    
                    </View>
                    <View>
                        <Image style={styles.tinyLogo} source={icon}/>
                    </View> 
                <ImageBackground source={require("../../assets/games-bg.png")} resizeMode="repeat" style={styles.image}/>
            </LinearGradient>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
        height: 80,
        flexGrow: 1,
        margin: 10,
    },
    card: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: 1080,
        padding: 15,
        borderRadius: 5,
        flexDirection: "row"
    },
    category: {
        fontSize: 10,
        color: '#000',
    },
    topic: {
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        marginRight: 75,
        fontWeight: 'bold',
        color: '#000',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    image: {
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: .05,
    }
})

  export default Card;