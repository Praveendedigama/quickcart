import { COLORS } from "@/constants/Colorpallet";
import { StyleSheet, View } from "react-native";
import { Menu } from "react-native-paper"; // Assuming Menu is from react-native-paper

export default function HomeMenuScreen() {
    return (
        <View style={styles.container }> 
            <Menu.Item leadingIcon="redo" onPress={() => {}} title="My Orders" />
            <Menu.Item leadingIcon="undo" onPress={() => {}} title="Settings" />
            <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Voucher" disabled />
            <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Daily Deals" disabled />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Notification" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Latest Products" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Profile" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Customer Care" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Logout" />
  
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:COLORS.Light,
        
    }


})