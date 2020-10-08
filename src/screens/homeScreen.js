import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import hints from "../assets/hints/hints.json";
import { HelloWorld,getTitles } from  '../helpers/functions';
import Layout from "../components/Layout/layout"

import Card from "../components/Card/card"
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = props => {
    const titles = getTitles(hints);
    return (
        <Layout>
            <View style={styles.test}>
                <Text>Choose a category!</Text>
            </View>
            <ScrollView style={styles.testtest}>
                {titles.map(title => (
                    <Card title={title}></Card>
                ))}
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    test: {
      flex: 1,
      backgroundColor: '#fff',
    },
    testtest: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: 'red'
    }
  });

export default HomeScreen;