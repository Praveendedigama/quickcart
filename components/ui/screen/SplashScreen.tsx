import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import appJson from '../../../app.json'; // Ensure this path is correct

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Start the animation
        Animated.timing(progress, {
            toValue: 100, // Target value
            duration: 3000, // Duration in milliseconds (3 seconds)
            useNativeDriver: false, // Use native driver for non-layout animations
        }).start(() => {
            onFinish();
        });
    }, [progress, onFinish]);

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/images/logo/logo-wattpad.png')} 
                resizeMode={"contain"}
            />  
            <Text style={styles.text}>Shop Smart, Shop Fast - Your Store in Your Pocket</Text>
            <View style={styles.progressContainer}>
                <Animated.View 
                    style={[
                        styles.progressbar, 
                        {
                            width: progress.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />  
            </View>
            <View style={styles.bottom}> 
            <Text style={styles.versionText}>Version: {appJson.expo.version}</Text>
            <Text style={styles.versionText}>Author: Praveen Dedigama</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
    },
    progressContainer: {
        width: '86%',
        height: 5,
        backgroundColor: '#ccc',
        overflow: 'hidden',
        borderRadius: 5,
        marginTop: 10,
    },
    progressbar: {
        backgroundColor: 'orange',
        borderRadius: 5,
        height: '100%',
    },
    logo: {
        height: 60,
    },
    versionText: {
        marginTop: 10,
        fontSize: 12,
        color: '#666',
    },
});