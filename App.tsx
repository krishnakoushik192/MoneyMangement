import React from 'react';
import { Text, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center">
          <Text className="text-xl font-bold text-blue-500">
            Welcome to NativeWind!
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
