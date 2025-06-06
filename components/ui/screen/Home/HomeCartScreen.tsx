import { StyleSheet, Text, View } from "react-native";

export default function HomeCartScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a HomeCartScreen
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