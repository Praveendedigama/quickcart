import HomeBookmarkScreen from "@/components/ui/screen/Home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/Home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/Home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/Home/HomePageScreen";
import HomeProductScreen from "@/components/ui/screen/Home/HomeProductScreen";
import { COLORS } from "@/constants/Colorpallet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, TouchableOpacity } from "react-native";
const Logo = require('../../../../assets/images/logo/logo-wattpad.png'); // Adjust the path as necessary
const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation() {
    return(
     <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }: any) => ({
            tabBarIcon: ({ color, size, focused }: any) => {
                let iconName;
                if (route.name === 'Menu') {
                    iconName = focused ? 'menu' : 'menu-outline';
                } else if (route.name === 'Cart') {
                     iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Bookmark') {
                    iconName = focused ? 'bookmark' : 'bookmark-outline';
                } else if (route.name === 'Products') {
                    iconName = focused ? 'list' : 'list-outline';
                }
                return (
                    //@ts-ignore
                    <Ionicons name={iconName} size={size} color={color} />
                );
            },
            tabBarActiveTintColor: COLORS.orange,
            tabBarInactiveTintColor: COLORS.darkGray,
        })}
     >
        <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
        <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
        <Tab.Screen name={'Home'} 
                component={HomePageScreen}
                options={{
                    
                    headerLeft: () => (
                        <Image source ={Logo} resizeMode={'contain'}
                        style={{width:100, height:60, marginLeft:5, marginBottom:30}}
                        />
                    ),
                    headerTitle: '',
                    headerRight: () => (
                        <TouchableOpacity
                        style={{
                            marginRight: 10,
                            width:120,
                            backgroundColor: COLORS.orange,
                            borderRadius: 3,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft:5, 
                            marginBottom:30

                        
                        }}
                        >
                            <Text style={{ color: COLORS.Light ,}}>Admin Console</Text>

                        </TouchableOpacity>

                    )
                }}
                
                
                />


        <Tab.Screen name={'Bookmark'} component={HomeBookmarkScreen}/>
        <Tab.Screen name={'Products'} component={HomeProductScreen}/>
     </Tab.Navigator>  
    )
}