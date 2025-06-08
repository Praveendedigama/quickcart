import { StyleSheet, Text, View } from "react-native";

export default function HomePageScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a HomePageScreen 
            </Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }


})