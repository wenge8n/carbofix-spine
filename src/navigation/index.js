import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import PDFViewer from '../screens/PDFViewer';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PDFViewer" component={PDFViewer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Navigation;
