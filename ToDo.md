Callback Functions
==================


```javascript

// SearchComponent.js

import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchComponent = ({ text , onTextChange, onCompleteEditing }) => {
  return (
    <View>
      <TextInput
        autoCapitalize = "none"
        autoCorrect = {false}
        placeHolder = "Search"
        value = {text}
        onChangeText = { onTextChange }
        onEndEditing = ( onCompleteEditing )
    </View>
  );
}

// UseSearchComponent.js
import react , { useState } from 'react';

const UseSearchComponent = () => {
  const [ text , setText ] = useState( '' );

  return (
    <View>
      <SearchComponent 
        text={text} 
        onTextChange = { newText => setText(newText) } 
        onCompleteEditing = { () => console.log('term was submitted') }
        />
    </View>
  );
};
```
