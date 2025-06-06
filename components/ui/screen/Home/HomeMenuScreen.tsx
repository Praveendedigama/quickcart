import { StyleSheet, Text, View } from "react-native";

export default function HomeMenuScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a HomeMenuScreen
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