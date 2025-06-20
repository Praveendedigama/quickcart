
import { StyleSheet, Text, View } from "react-native";

export default function CustomerCareScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a CustomerCareScreen
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