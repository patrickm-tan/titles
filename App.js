import * as React from 'react';
import { SafeAreaView, Button, View, Text, FlatList, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Card from './src/components/card';

import {DATA} from './src/utilities/utils'
import * as fromFunctions from './src/utilities/functions'

function HomeScreen({navigation}) {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Card category={item.category} title={item.title} icon={item.icon}
            
      />
    </TouchableOpacity>

  );

  return (
      <SafeAreaView>
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
      </SafeAreaView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {fromFunctions.startGame()}
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
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  }
})