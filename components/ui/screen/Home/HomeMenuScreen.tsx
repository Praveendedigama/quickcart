import { COLORS } from "@/constants/Colorpallet";
import { StyleSheet, View } from "react-native";
import { Menu } from "react-native-paper"; // Assuming Menu is from react-native-paper

import { NavigationProp } from "@react-navigation/native";

export default function HomeMenuScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <View style={styles.container }> 
            <Menu.Item leadingIcon="redo" onPress={() => {navigation.navigate('My Orders')}} title="My Orders" />
            <Menu.Item leadingIcon="undo" onPress={() => {navigation.navigate('Settings')}} title="Settings" />
            <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('Voucher')}} title="Voucher" />
            <Menu.Item leadingIcon="content-copy" onPress={() => {navigation.navigate('Daily Deals')}} title="Daily Deals"  />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Notification')}} title="Notification" />
              <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Profile')}} title="Profile" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('CustomerCare')}} title="Customer Care" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Logout')}} title="Logout" />
  
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:COLORS.Light,
        
    }


})