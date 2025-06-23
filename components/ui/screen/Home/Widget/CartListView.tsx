import { COLORS } from "@/constants/Colorpallet";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";


export default function CartListView() {
    const [qty, setQty] = useState(1);
        const changeQty= (value: number) => {
            if (value<=0) {
                return;
            }
            setQty(value);
        }
    return (
        <TouchableOpacity style={styles.container }> 
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmark}>
                    <Icon
                        size={20}
                        source={'heart'}
                        color={COLORS.blue}
                    />
                    
                </TouchableOpacity>



                <Image
                    source={{ uri: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' }}
                    style={styles.image}
                    resizeMode={"contain"}
                />
            </View>
            <View style={{flex: 1, paddingLeft: 8}}>
                <Text style={styles.name}> Lorem ipsum dolor  adipisicing elit. Ullam veniam placeat maiores, odit doloribus voluptatum sunt numquam vel possimus facilis!</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                 <View style={styles.content}>
                                   
                                    <TouchableOpacity 
                                    onPress={() => changeQty(qty - 1)}
                                    style={styles.button}>
                                        <Icon
                                            size={20}
                                            source={'minus'}
                                            color={COLORS.blue}
                                        />
                
                                    </TouchableOpacity>
                
                                    <Text style={styles.qty}>{qty}</Text>
                
                                    <TouchableOpacity 
                
                                        onPress={() => changeQty(qty + 1)}
                                        style={styles.button}>
                                            <Icon
                                                size={20}
                                                source={'plus'}
                                                color={COLORS.blue}
                                            />
                
                                        </TouchableOpacity>    
                                    
                                </View>
                


            </View>
        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    content:{
        flexDirection: 'row',
        
        width: '100%',
        justifyContent: 'flex-end',
        gap: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    bookmark:{
        position: 'absolute',
        top: 8,
        right: 8,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: COLORS.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
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
        height:'100%',
    },
    imageView:{
        width: 150,
        height: 80,
        padding: 8,
        
    },
    container: {
        width: '100%',
        backgroundColor:COLORS.darkGray,
        padding: 8,
        borderRadius: 8,
        marginBottom: 5,
        flexDirection: 'row',
        
        
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: COLORS.Light,
        justifyContent: 'center',
        alignItems: 'center',
    },
})