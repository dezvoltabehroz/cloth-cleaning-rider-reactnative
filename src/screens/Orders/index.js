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
import { connect } from 'react-redux';
class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            activeTab: 0,
            loading: true,
            index: 0,
            orderHistory: []

        }
    }

    componentDidMount = () => {
        console.log(this.props.user)
        let userData = {
            id: this.props.user.user.id,
            // token: this.props.user.access_token
        }
        console.log(userData)
        AuthServices.getRiderOrders(userData)
            .then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    this.setState({ loading: false, orderHistory: response.data.result.rows })
                }
            })
            .catch((err) => console.log(err))
    }


    _renderOrderListItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetail',{item:item})} style={{
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
                    borderColor: "#EEE",
                    borderWidth: 1,
                }}>
                    <View style={{ paddingHorizontal: '5%', paddingTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13,textTransform:'capitalize' }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Medium', }}>Order No: {item.orderNumber}</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginBottom: '5%', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, color: item.urgent == '1' ? '#D20505' : '#0DA7DF' }}>{item.urgent == '1' ?'Express':'Regular'}</Text>
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
    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    render() {
        const { activeTab } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
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
            </View>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.userData || {}
    };
};


export default connect(mapStateToProps)(Orders)