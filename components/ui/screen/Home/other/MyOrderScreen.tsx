import { StyleSheet, Text, View } from "react-native";

export default function MyOrderScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a MyOrderScreen
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