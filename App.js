import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';
import appTheme from './constants/theme';
import IndividualSong from './src/modules/songs/screens/IndividualSong';
import SongsList from './src/modules/songs/screens/SongsList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
const Stack = createNativeStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer>
      <StatusBar backgroundColor ={ appTheme.COLORS.primary } />
      <Stack.Navigator 
      initialRouteName={"SongsList"}
      >
        <Stack.Screen name="SongsList" component={SongsList} 
          options={{
            headerShown: false,
            headerTitle: 'Songs'
          }}
        />
        <Stack.Screen name="IndividualSong" component={IndividualSong} 
         options={{
          headerShown: true,
          headerTitle: 'Playing Now',
          headerStyle: {
            backgroundColor: appTheme.COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
        />
      </Stack.Navigator>   
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
