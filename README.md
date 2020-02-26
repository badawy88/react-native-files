REACT NATIVE COMMANDS AND CODE SAMPLES
======================================

This project has some important files for creating react native project as well as the required commands....


To create a new react project, you can use either expo-cli command or react-native-cli

To install react-native-cli:

> npm install -g react-native-cli

To install expo-cli

> npm install -g expo-cli

To create a project using react-native-cli

> react-native init project_name

To create a project using expo-cli

> npx expo-cli init project_name

> npx create-react-app app_name

> npm start

> npm run build

> npm run ios

To use Drawer navigator, bottom navigator, and stack navigator

> npm install react-navigation

> expo install react-native-gesture-handler

Sample code for app.js
======================

```javascript
  import { createAppContainer} from 'react-navigation';
  import searchScreen from './src/searchScreen';
  import { createStackNavigator } from 'react-navigation-stack';

  const navigator = createStackNavigator({
    Home: searchScreen
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App Page'
    }

  });

  export default createAppContainer(navigator);
```

Sample of normal Screen Home.js
================================

```javascript
  import React from 'react';
  import {Text, View} from 'react-native';

  const Home  = () => {
      return (
          <View>
              <Text>Welcome To Home page</Text>
          </View>
      );
  };


  export default Home;
```
You can use TextInput, View, Text, StyleSheet from react-native library

Project Structure
=================
<!--ts-->
   * .expo
   * .expo-shared
   * assets
   * src
      * component
        * component1
        * component2
        * componentN
      * screen
        * screen1
        * screen2
        * screenN  
   * App.js
   * app.json
   * package.json
<!--te-->

Use Stylesheet
==============

```javascript
import {StyleSheet} from 'react-native';

/**
* Styles to be used as {styles.label}
*/
const styles = StyleSheet.create({
  label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
  }  
});

// To Use this styles in a screen like Style Demo screen. Use the following code
// To make this example work, you should import the following 
/*  
import {View, Text} from 'react'
*/
const RegistrationScreen = () => {
  return (
    <View>
      <Text> Welcome to Using Sytle Demo </Text>
    </View>
  );
};
```
