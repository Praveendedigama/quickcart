import { COLORS } from "@/constants/Colorpallet";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

export default function DisplayTypeWidget({ callback }: { callback: (state: boolean) => void }) {
    const [gridState, setgridState] = React.useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setgridState(true);
                    callback(true); // Call the callback function with `true`
                }}
                style={[styles.button, { backgroundColor: gridState ? COLORS.blue : COLORS.darkGray }]}

            >
                <Icon
                    size={22}
                    source={'grid'}
                    color={gridState ? '#fff' : '#36454F'} // white when active
                    />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setgridState(false);
                    callback(false); // Call the callback function with `false`
                }}
                style={[styles.button, { backgroundColor: gridState ? COLORS.darkGray : COLORS.blue }]}

            >
                    <Icon
                    size={22}
                    source={'menu'}
                    color={!gridState ? '#fff' : '#36454F'} // white when active
                    />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: COLORS.darkGray,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    container: {
      marginTop: 16,
      marginBottom: 16,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
  