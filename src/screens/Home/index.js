import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, ImageBackground, FlatList, Platform } from 'react-native';
import { Input } from 'react-native-elements';
import { RiderTabs } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Laundry from '../../assets/svg/laundry.svg';
import Basket from '../../assets/svg/basket.svg';
import Iron from '../../assets/svg/iron.svg';
import Machine from '../../assets/svg/washing-machine.svg';
import Fold from '../../assets/svg/folding-clothes.svg';
import Fraq from '../../assets/svg/fraq.svg';
import TShirt from '../../assets/svg/t-shirt.svg';
import Bedsheet from '../../assets/svg/bedsheet.svg';
import Shirt from '../../assets/svg/shirt.svg';
import Pent from '../../assets/svg/pent.svg';
import Skert from '../../assets/svg/skert.svg';
import HandBag from '../../assets/svg/handbag.svg';
import JNamaz from '../../assets/svg/jnamaz.svg';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            activeTab: 0,
            loading: true,
            index: 0,

            recentList: [
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    serviceType: 'Regular'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    serviceType: 'Express'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    serviceType: 'Regular'
                },
            ],
            orderHistory: [
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
                {
                    name: 'John Doe',
                    delivery: '12 Dec,2020',
                    pickUp: '08 Dec,2020',
                    shift: "Noon(12pm-02pm)",
                    orderNumber: '#0000456',
                    orderStatus: 'Delivered'
                },
            ]

        }
    }

    // ============== func_componentDidMount - Function Will get initial data from server ==============
    componentDidMount = () => {
        // let data = await AsyncStorage.getItem('USER_TOKEN');
        // let token = JSON.parse(data)
        // HomeServices.myInvitations(token)
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((err) => { console.log(err) })
    }

    // ============== func_searchFilter - Function Will allow user to Search jobs ==============
    func_searchFilter = (text) => {
        this.setState({ value: text });
    }

    handleAddToCart = () => {
        this.props.navigation.navigate('Cart')
    }

    _renderItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => { this.setState({ index: index }) }} style={{ height: 95, width: 105, }}>
                    <View style={{
                        borderColor: "#EEE",
                        borderWidth: 0.3,
                        borderRadius: 10,
                        elevation: 1,
                        shadowColor: index == this.state.index ? '#EAF7FB' : "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        height: 60,
                        width: 105,
                        backgroundColor: index == this.state.index ? '#EAF7FB' : 'white',
                        justifyContent: 'center',
                        marginTop: '10%',
                        marginBottom: '1%',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            {item.title == 'Dry Clean' ?
                                <Laundry />
                                : item.title == 'Iron Only' ?
                                    <Iron />
                                    : item.title == 'Linen & Bedsheet' ?
                                        <Machine />
                                        : item.title == 'Wash & Iron' ?
                                            <Fold />
                                            :
                                            <Basket />}
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: index == this.state.index ? '#0DA7DF' : '#B5B5B5', fontFamily: 'Roboto-Medium' }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>

            </>
        )
    }

    _renderListItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderStatus', { item: item })} style={{
                    borderRadius: 10,
                    elevation: 1,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,
                    marginBottom: '1%',
                    borderColor: "#EEE",
                    borderWidth: 0.3,
                }}>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Medium', }}>Order No: {item.orderNumber}</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginBottom: '5%', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.serviceType == 'Express' ? '#D20505' : '#0DA7DF' }}>{item.serviceType}</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                    <View style={{ margin: '2.5%', marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Deliver date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.delivery}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Pickup date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.pickUp}</Text>
                        </View>
                        <View style={{ marginBottom: '5%' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Shift</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.shift}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    _renderOrderListItems = (item, index) => {
        return (
            <>
                <View style={{
                    borderRadius: 10,
                    elevation: 1,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,
                    marginBottom: '1%',
                    borderColor: "#EEE",
                    borderWidth: 0.3,
                }}>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Medium', }}>Order No: {item.orderNumber}</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginBottom: '5%', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.serviceType == 'Express' ? '#D20505' : '#0DA7DF' }}>{item.orderStatus}</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                    <View style={{ margin: '2.5%', marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Deliver date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.delivery}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Pickup date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.pickUp}</Text>
                        </View>
                        <View style={{ marginBottom: '5%' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Shift</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.shift}</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    _renderSeparator = () => {
        return (
            <View style={styles.seperatorStyle}></View>
        )
    }
    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    render() {
        const { activeTab } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ImageBackground source={require('../../assets/images/header.png')} style={styles.headerImageStyle}>
                    <View style={styles.upperListContainer}>
                        <View style={styles.tabContainer}>
                            <RiderTabs active={activeTab} tabs={['Recent Orders', 'Pending Orders', 'Orders History']} onTabChange={(activeTab) => { this.setState({ activeTab }); }} />
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, top: '4%' }}>
                    {activeTab == 0 ?
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '5%', }}>
                            <View style={styles.lowerListContainer}>
                                <FlatList
                                    data={this.state.recentList}
                                    showsVerticalScrollIndicator={false}
                                    ItemSeparatorComponent={this._renderListSeparator}
                                    renderItem={({ item, index }) => this._renderListItems(item, index)}
                                    keyExtractor={item => item} />
                            </View>
                        </ScrollView>
                        :
                        null
                    }
                    {activeTab == 1 ?
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '5%', }}>
                            <View style={styles.lowerListContainer}>
                                <FlatList
                                    data={this.state.recentList}
                                    showsVerticalScrollIndicator={false}
                                    ItemSeparatorComponent={this._renderListSeparator}
                                    renderItem={({ item, index }) => this._renderListItems(item, index)}
                                    keyExtractor={item => item} />
                            </View>
                        </ScrollView>
                        :
                        null
                    }
                    {activeTab == 2 ?
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '15%', }}>
                            <View style={styles.lowerListContainer}>
                                <FlatList
                                    data={this.state.orderHistory}
                                    showsVerticalScrollIndicator={false}
                                    ItemSeparatorComponent={this._renderListSeparator}
                                    renderItem={({ item, index }) => this._renderOrderListItems(item, index)}
                                    keyExtractor={item => item} />
                            </View>
                        </ScrollView>
                        :
                        null
                    }
                </View>
            </View>
        )
    }

}