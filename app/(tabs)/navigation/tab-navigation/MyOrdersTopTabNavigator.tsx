import MyOrderScreen from "@/components/ui/screen/other/Orders/MyOrderScreen";
import RefundScreen from "@/components/ui/screen/other/Orders/RefundScreen";
import ReturnScreen from "@/components/ui/screen/other/Orders/ReturnScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
const TopTab = createMaterialTopTabNavigator();


export default function MyOrdersTopTabNavigator() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="My Orders" component={MyOrderScreen} />
            <TopTab.Screen name="Refunds" component={RefundScreen} />
            <TopTab.Screen name="Returns" component={ReturnScreen} />
        </TopTab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }


})