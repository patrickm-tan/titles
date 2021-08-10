import React from "react";
import { View, Text } from "react-native";

const Card = (props) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                padding: 25
            }}>
            <View
                style={{
                height: 100,
                padding: 20,
                alignItems: "center",
                backgroundColor: "#5c5a5a",
                borderRadius: 10,
                width: 500,
                height: 150,
                }}
            >
                <View style={{
                    backgroundColor: "#ffdbd9",
                    borderRadius: 10,
                    position: "absolute",
                    width: 150,
                    alignItems: "center",
                    padding: 5,
                    top: -15
                    }}>
                    <Text>{props.category}</Text>
                </View>          
            </View>
        </View>
    );
  };
  
  export default Card;