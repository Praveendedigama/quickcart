import { StyleSheet, Text, View } from "react-native";

export default function HomeBookmarkScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a HomeBookmarkScreen
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