import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { COLORS, icons } from "../constants";
import SongsList from '../src/modules/songs/screens/SongsList';
import IndividualSong from '../src/modules/songs/screens/IndividualSong';
import appTheme from '../constants/theme';


const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="SongList"
                component={SongsList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.next}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ?appTheme.COLORS.primary : '#a1a1a1'
                            }}
                        />
                    ),

                }}
            />

            {/* <Tab.Screen
                name = "IndividualSong"
                component={IndividualSong}
                options={{
                    headerTitle: 'Playing Now',
                    headerStyle: {
                        backgroundColor: appTheme.COLORS.primary,
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: '600',
                      },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.songImage}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            /> */}

            {/* <Tab.Screen
                name="Members"
                component={WithoutMembers}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            /> */}

            {/* <Tab.Screen
                name="Ellam"
                component={AddGroup}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.calender}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            /> */}
            
        </Tab.Navigator>
    )
}

export default Tabs