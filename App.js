import * as React from 'react';
import { SafeAreaView, Button, View, Text, FlatList, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Card from './src/components/card';

import {DATA} from './src/utilities/utils'

function HomeScreen({navigation}) {

  const renderItem = ({ item }) => (
    <Card category={item.title} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}