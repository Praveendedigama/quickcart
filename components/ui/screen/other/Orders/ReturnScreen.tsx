import { StyleSheet, Text, View } from "react-native";

export default function ReturnScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a ReturnScreen
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