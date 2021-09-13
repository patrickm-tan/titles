import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableHighlightBase, TouchableHighlight, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import {COLORS, ICONS} from '../utilities/colors.js'

import * as fromFunctions from '../utilities/functions';
import { test } from "../utilities/functions.js";

{/* <View style={styles.middle}>
    <Text style={styles.countdown}>
    { countdown }
    
    </Text>
</View>
<View style={styles.bottom}>
    <Text>
    Score
    </Text>
    <Button
        title="Next"
        onPress={() => fromFunctions.next(max)}
    />      
    <Button
    title="Go to Home... again"
    onPress={() => navigation.navigate('Home')}
    />
</View> */}

var max = 0;
var countdown = test(max);

const TitleCard = (props) => {
    return (
            <ImageBackground source={require("../../assets/cards/1.jpg")} resizeMode="cover" style={styles.images}>
                <Text style={styles.title}>
                    { props.hint }
                </Text>
                <Text>
                    Test
                </Text>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    images: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black"

    },
    title: {
        fontSize: 76,
    },
})

export default TitleCard;