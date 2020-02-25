import { createStackNavigator } from 'react-navigation';
import ComponentName from './src/..................'

const navigator = createStackNavigator({
    ComponentName: ComponentClass
} , {
    initialRouteName: 'ComponentName',
    defaultNavigationOptions: {
        title: 'Title'
    }
});

export default createAppContainer( navigator );
