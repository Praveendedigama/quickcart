import { COLORS } from "@/constants/Colorpallet";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductGridViewWidget() {
    return (
        <View style={styles.container }> 
            <View style={styles.imageView}>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' }}
                    style={styles.image}
                    resizeMode={"contain"}
                />
            </View>
            <View>
                <Text style={styles.name}> Lorem ipsum dolor  adipisicing elit. Ullam veniam placeat maiores, odit doloribus voluptatum sunt numquam vel possimus facilis!</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <Text style={styles.qty}>Qty:4</Text>


            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    qty:{
        textAlign: 'right',
    },
    price:{
        color: COLORS.orange,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    name:{
        
    },
    image: {
        width: '100%',
        aspectRatio:16/12,
    },
    imageView:{
        padding: 8,
        
    },
    container: {
        width: '100%',
        backgroundColor:COLORS.darkGray,
        padding: 8,
        borderRadius: 8,
        marginBottom: 5,
        
        
    }


})