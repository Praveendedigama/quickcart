import { StyleSheet, Text, View } from "react-native";

export default function RefundScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a RefundScreen
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