import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Home, Profile, About, ResetPassword, OrderStatus } from '../../screens';
import { Icon } from '../../components';
import MapRoutes from '../Map';
import Notification from '../../assets/svg/notification.svg';
import Menu from '../../assets/svg/menu.svg';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();


function HomeRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Menu /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => { }}><Notification /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>DhobiUncle Rider</Text></View>),
            })} />
            <Stack.Screen name="OrderStatus" component={OrderStatus} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
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
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Reset')} style={{ marginRight: 15 }}><Icon.Ionicons name="ellipsis-vertical" size={25} color={'white'} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Profile</Text></View>),
            })} />
            <Stack.Screen name="About" component={About} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>About</Text></View>),
            })} />
            <Stack.Screen name="Reset" component={ResetPassword} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
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


