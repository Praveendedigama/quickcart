import HomeBookmarkScreen from "@/components/ui/screen/Home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/Home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/Home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/Home/HomePageScreen";
import HomeProductScreen from "@/components/ui/screen/Home/HomeProductScreen";
import { COLORS } from "@/constants/Colorpallet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
        <Tab.Screen name={'Home'} component={HomePageScreen}/>
        <Tab.Screen name={'Bookmark'} component={HomeBookmarkScreen}/>
        <Tab.Screen name={'Products'} component={HomeProductScreen}/>
     </Tab.Navigator>  
    )
}