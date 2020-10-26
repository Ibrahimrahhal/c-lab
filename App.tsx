import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstLevelStackNavigator from './screens/firstLevelStackNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import * as Font from 'expo-font';
import config from './config';


let customFonts = {
  'custom-regular': require('./assets/Cairo-Regular.ttf'),
  'custom-bold': require('./assets/Cairo-Bold.ttf'),
  
};
export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    return (
    <NavigationContainer>
      <ThemeProvider theme={config.globalTheme as any}>
        <View style={styles.container}>
        {this.state.fontsLoaded &&(<FirstLevelStackNavigator/>)} 
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    direction:'rtl'
  },
});
