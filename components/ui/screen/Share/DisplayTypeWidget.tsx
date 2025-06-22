
import { COLORS } from "@/constants/Colorpallet";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

export default function DisplayTypeWidget(callback:any) { 
    const [gridState, setgridState] = React.useState(true);


    return (
        <View style={styles.container }> 

            <TouchableOpacity 
                onPress={() => {
                    setgridState(true)
                    callback(true)


                }}
                style={{...styles.button, backgroundColor:gridState ? COLORS.blue : COLORS.darkGray}} >
                <Icon size={20} source={'grid'} color={gridState ? COLORS.darkGray : COLORS.blue}  />
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {
                    setgridState(false )
                    callback(false)
                }}
                style={{...styles.button, backgroundColor:gridState ? COLORS.darkGray : COLORS.blue}}>
                <Icon size={20} source={'menu'} color={gridState ? COLORS.blue : COLORS.darkGray}  />
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 40,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
          marginTop: 16,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          
    }


})