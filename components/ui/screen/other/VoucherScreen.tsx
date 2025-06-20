import { StyleSheet, Text, View } from "react-native";

export default function VoucherScreen() {
    return (
        <View style={styles.container }> 
            <Text>
                This is a VoucherScreen
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