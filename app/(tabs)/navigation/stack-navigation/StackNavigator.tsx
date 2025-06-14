import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigation from '../tab-navigation/HomeBottomTabNavigation';

const Stack = createStackNavigator();
export default function StackNavigator() {
   return(
    <Stack.Navigator>
        <Stack.Screen name='Process'
                      options={{headerShown: false, headerLeft:()=> null}}//process words removed
                      component={HomeBottomTabNavigation}/>
    </Stack.Navigator>   
   )

}