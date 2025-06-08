import SplashScreen from '@/components/ui/screen/SplashScreen';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigator from './navigation/stack-navigation/StackNavigator';

export default function App() { 
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen onFinish={() => setTimeout(() => setIsLoading(false), 3000)} />
      ) : (
        <StackNavigator/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
}); 