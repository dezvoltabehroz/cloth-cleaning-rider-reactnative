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
import { AuthServices } from '../../services';
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import moment from 'moment';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            activeTab: 0,
            loading: true,
            index: 0,
            recentList: [],
            orderHistory: []

        }
    }

    // ============== func_componentDidMount - Function Will get initial data from server ==============
    componentDidMount = () => {
        let userData = {
            id: this.props.user.user.id,
        }
        AuthServices.getRiderOrders(userData)
            .then((response) => {
                if (response.data.success) {
                    let orderArray = [];
                    let pendingArray = [];
                    let array = [...response.data.result.rows];
                    array.forEach(element => {
                        if (element.orderStatus == 'delivered') {
                            orderArray.push(element)
                        } else {
                            pendingArray.push(element)
                        }
                    });


                    this.setState({ loading: false, recentList: pendingArray, orderHistory: orderArray })
                }
            })
            .catch((err) => console.log(err))
    }

    // ============== func_searchFilter - Function Will allow user to Search jobs ==============
    func_searchFilter = (text) => {
        this.setState({ value: text });
    }

    handleAddToCart = () => {
        this.props.navigation.navigate('Cart')
    }


    _renderListItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderStatus', { item: item })} style={{
                    borderRadius: 10,
                    elevation: 2,
                    backgroundColor: 'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    marginBottom: '1%',
                    borderColor: "#EEE",
                    borderWidth: 1,
                }}>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, textTransform: "capitalize" }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Medium', }}>Order No: #{item.id}</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginBottom: '5%', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.urgent ? '#D20505' : '#0DA7DF' }}>{item.urgent ? "Express" : "Regular"}</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                    <View style={{ margin: '2.5%', marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Deliver date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.deliveryTime != null ? moment(`${item.deliveryTime}`).format('ll') : ""}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Pickup date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.day=='today' ? moment(`${item.createdAt}`).format('ll') : moment(item.createdAt).add(1, 'days').format('ll')}</Text>
                        </View>
                        <View style={{ marginBottom: '5%' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Shift</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', textTransform: 'capitalize' }}>{item.time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    _renderOrderListItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetail')} style={{
                    borderRadius: 10,
                    elevation: 2,
                    backgroundColor: 'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    marginBottom: '1%',
                    borderColor: "#EEE",
                    borderWidth: 1,
                }}>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Medium', }}>Order No: {item.orderNumber}</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginBottom: '5%', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.urgent ? '#D20505' : '#0DA7DF' }}>{item.urgent ? 'Express' : 'Regular'}</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                    <View style={{ margin: '2.5%', marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Deliver date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.delivery ? item.delivery : ""}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Pickup date</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.pickUp ? item.pickUp : ""}</Text>
                        </View>
                        <View style={{ marginBottom: '5%' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, }}>Shift</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{item.shift ? item.shift : ""}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
        const { activeTab, loading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.headerImageStyle}>
                    <View style={styles.upperListContainer}>
                        <View style={styles.tabContainer}>
                            <RiderTabs active={activeTab} tabs={['Pending Orders', 'Orders History']} onTabChange={(activeTab) => { this.setState({ activeTab }); }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, top: '4%' }}>
                    {activeTab == 0 ?

                        loading ?
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ActivityIndicator color="#0DA7DF" size="small" />
                            </View>

                            :
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

                        loading ?
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ActivityIndicator color="#0DA7DF" size="small" />
                            </View>

                            :


                            this.state.orderHistory.length == 0 ?
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', }}>{'No completed order found'}</Text>
                                </View>
                                :
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
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.userData || {}
    };
};


export default connect(mapStateToProps)(Home)