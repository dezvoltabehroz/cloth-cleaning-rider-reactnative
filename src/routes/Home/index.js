import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Home, Profile, About, ResetPassword, OrderStatus, OrderDelivered, Orders, OrdersDetail } from '../../screens';
import { Icon } from '../../components';
import MapRoutes from '../Map';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import Notification from '../../assets/svg/notification.svg';
import Menus from '../../assets/svg/menu.svg';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();


function HomeRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Menus /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => { }}><Notification /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>DhobiUncle Rider</Text></View>),
            })} />
            <Stack.Screen name="OrderStatus" component={OrderStatus} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => { }}><Notification /></TouchableOpacity>),
                headerTitle: () => (
                    <View>
                        <Text style={styles.headerTitleStyle}>Order Status</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: 'white' }}>Order No: {route.params.item.orderNumber} </Text>
                    </View>),
            })} />
            <Stack.Screen name="Map" component={MapRoutes} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Profile" component={Profile} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (
                    <>
                        <Menu rendererProps={{
                            flexDirection: 'column', marginLeft: -25,
                            marginTop: -5,
                        }}
                            style={{ height: 50, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <MenuTrigger>
                                <Icon.Ionicons name="ellipsis-vertical" size={25} color={'white'} />
                            </MenuTrigger>
                            <MenuOptions optionsContainerStyle={{ width: 100 }}>
                                <MenuOption onSelect={() => navigation.navigate('Reset')}>
                                    <View style={{ marginVertical: 5, alignItems: 'center' }}>
                                        <Text style={{ color: '#7a7a7a', fontFamily: 'Roboto-Regular', fontSize: 10 }}>Change Password</Text>
                                    </View>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Profile</Text></View>),
            })} />
            <Stack.Screen name="About" component={About} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>About</Text></View>),
            })} />
            <Stack.Screen name="Orders" component={Orders} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders History</Text></View>),
            })} />
            <Stack.Screen name="OrdersDetail" component={OrdersDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders</Text></View>),
            })} />
            <Stack.Screen name="OrdersDelivered" component={OrderDelivered} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Successfully Delivered</Text></View>),
            })} />
            <Stack.Screen name="Reset" component={ResetPassword} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Reset Password</Text></View>),
            })} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 18,
        color: "#fff",
        fontFamily: 'Roboto-Regular'
    },
    headerMapTitleStyle: {
        fontSize: 14,
        color: "#fff",
    },
    headerTextStyle: {
        color: "#fff",
        fontFamily: 'Roboto-Regular'
    }
})

export default HomeRoutes;


