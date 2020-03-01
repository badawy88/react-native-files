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
        onTextSubmit = { () => console.log('text is submitted') }
        />
    </View>
  );
};
```

HTTP Request
=============

You can send request using either fetch library which is built-in in react native or by install axios library. Axios is easy to use and less code to write.

Install Axios: 

> npm install axios

Create a service folder

```javascript

// api.js

import axios from 'axios';

export default axios.create({
  baseURL:  'https://api.yelp.com/v3/businesses/' ,
  headers: {
    Authorization: 'Bearer xxxxxx_api_key'
  }
});
```

Use api.js 
===========

```javascript
// import first api.js

const searchApi = async () => {
  cnst response = await yelp.get('search' , {
    params: {
      term: text,
      limit: 50,
      location: 'Cairo'
    }
  });
  
  return response.data
};

const [results , setResults ] = useState( [] );

onTextSubmit = { () => searchApi }

```
