import { COLORS } from "@/constants/Colorpallet";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-paper";

const logo = require('../../../../assets/images/logo/logo-wattpad.png'); // Path unchanged

export default function LoginPageScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={styles.innerContainer}
            >
                <View style={styles.logoWrapper}>
                    <Image source={logo} style={styles.logo} resizeMode="contain" />
                </View>

                <View style={styles.inputOuter}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#9AA6B2" 
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputOuter}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#9AA6B2" 

                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                </TouchableOpacity>

                <Text style={styles.seperateText}>Or</Text>

                <View style={styles.socialLoginWrapper}>
                        <TouchableOpacity style={styles.iconOuter}> 
                        <Icon size={20} source={'google'}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconOuter}> 
                        <Icon size={20} source={'facebook'}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconOuter}> 
                        <Icon size={20} source={'twitter'}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconOuter}> 
                        <Icon size={20} source={'github'}/>
                        </TouchableOpacity>

                </View>


                <TouchableOpacity style={styles.iconButton}> 
                           <Text style={styles.loginText}>Register with the email</Text>
                        </TouchableOpacity>

            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    loginText: {
        color: '#0A84FF',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    iconButton: {
        marginTop: 24,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0A84FF',
        backgroundColor: '#F0F8FF', // subtle blue-tinted background
        alignItems: 'center',
        shadowColor: '#0A84FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 3,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.Light,
    },
    innerContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    logoWrapper: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 160,
        height: 160,
    },
    inputOuter: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        backgroundColor: '#F7F9FA',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
    },
    loginButton: {
        backgroundColor: '#0A84FF', // Nice modern blue
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        elevation: 4,
        shadowColor: '#0A84FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    forgotText: {
        color: '#007AFF', // iOS blue-style underline
        textAlign: 'center',
        fontSize: 14,
        textDecorationLine: 'underline',
        marginTop: 8,
    },
    seperateText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        color: COLORS.darkGray,
        fontWeight: '600',
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    iconOuter: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});
