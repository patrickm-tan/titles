import * as React from 'react';
import { SafeAreaView, Button, View, Text, FlatList, StatusBar, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Animated , Dimensions, PanResponder} from 'react-native';
import {useEffect, useState, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {PanGestureHandler} from 'react-native-gesture-handler';

import Card from './src/components/card';
import TitleCard from './src/components/title-card';


import {DATA} from './src/utilities/utils'
import * as fromFunctions from './src/utilities/functions';

function HomeScreen({navigation}) {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Card category={item.category} title={item.title} icon={item.icon}/>
    </TouchableOpacity>

  );

  return (
      <SafeAreaView>
        <View style={{ height: 60 }} />

          <View>
            <Text style={styles.header}>
              Categories
            </Text>
            
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

        <View style={{ height: 60 }} />
      </SafeAreaView>
  );
}

let index = 0

export function DetailsScreen() {
  const [data,setData] = useState(DATA[0]);
  const num_hints = data.hints.length;


  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
    })
  ).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <TitleCard hint={data.hints[fromFunctions.randomizer(num_hints)]}></TitleCard>
        </Animated.View>
      </View>
      <View style={{flex:1, backgroundColor: "red", justifyContent:"flex-end"}}>
        <Text>
          Timer
        </Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>    
  );

}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{gestureEnabled: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    marginTop:StatusBar.currentHeight,
  },
  header: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  countdown: {
    fontSize: 76,
  },
  cardContainer:{
    flex: 2,
    padding: 5,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: "black"
  },
  card:{
    flex: 1,
    height:"100%",
    borderRadius: 15,
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})