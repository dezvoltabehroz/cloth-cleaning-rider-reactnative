import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Icon, } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Phone from '../../assets/svg/call.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import { AuthServices } from '../../services';
import moment from 'moment';
import { ActivityIndicator } from 'react-native';
export default class OrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            item: this.props.route.params.item,
            totalPrice: 350,
            discount: false,
            delivery: 50,
            code: '',
            discountValue: 50,
            value: {},
            region: {
                latitude: 33.6518,
                longitude: 73.1566,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            address: 'Park Rd, Islamabad, Islamabad Capital...',
            discountModal: false,
            pickOrder: false,
            orderList: [],
            btnLoading: false
        }
    }

    componentDidMount = () => {
        let userData = {
            order_id: this.props.route.params.item.id,
            rider_id: this.props.route.params.item.rider_id
        }
        AuthServices.getOrderDetails(userData)
            .then((response) => {
                this.setState({
                    totalPrice: response.data.result.totalPrice,
                    grandTotal: response.data.result.grandTotal,
                    orderList: response.data.result.orderedproduct,
                })
            })
            .catch((err) => console.log(err))
        if (this.props.route.params.region != undefined) {
            const { region, address } = this.props.route.params;
            this.setState({ region: region, address: address })
        }
    }
    _renderListItems = (item, index) => {
        return (
            <>
                <View style={styles.listContentContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={styles.itemNameTextStyle}>{item.productorder.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>Rs. {item.unitPrice} X {item.quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Medium', fontSize: 12, textAlign: 'right' }}>Rs. {item.unitPrice * item.quantity}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{item.productorder.productcategory.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }


    render() {
        const { activeTab, discount, delivery, item, discountValue, pickOrder, value, btnLoading } = this.state;

        return (
            <>
                <View style={{ flex: 1, paddingTop: '5%', backgroundColor: 'white' }}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '10%' }}>
                        <View style={{
                            borderRadius: 10,
                            elevation: 2,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,
                            marginHorizontal: '5%',
                            backgroundColor: 'white',
                            paddingHorizontal: '5%',
                            marginBottom: '1%',
                            borderColor: "#EEE",
                            borderWidth: 0.3,
                        }}>


                            <View style={{ marginTop: '5%', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Roboto-Medium' }}>{item.name}</Text>
                                <Phone fill={'black'} height={20} width={20} />
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: item.urgent ? '#D20505' : '#0DA7DF' }}>{item.urgent ? 'Express' : 'Regular'}</Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginVertical: '5%' }}>Deliver date</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%' }}>{item.deliveryTime != null ? moment(item.deliveryTime).format('ll') : ''}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginVertical: '5%' }}>Pickup date</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%' }}>{moment(item.createdAt).format('ll')}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginTop: '5%' }}>Shift</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%', textTransform: 'capitalize' }}>{item.time}</Text>
                                </View>
                            </View>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '2.5%', marginBottom: '5%', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, }}>{'Order Status'}</Text>
                                <DropDownPicker
                                    items={[
                                        {
                                            id: 1,
                                            label: 'Pick Order',
                                            value: 'pickedup'
                                        },
                                        {
                                            id: 2,
                                            label: 'Dropped',
                                            value: 'dropped'
                                        },
                                        {
                                            id: 3,
                                            label: 'Collect',
                                            value: 'collect'
                                        },
                                        {
                                            id: 4,
                                            label: 'Delivered',
                                            value: 'delivered'
                                        }]}
                                    placeholder="Pick order"
                                    onClose={() => this.setState({ dropdownOpen: false })}
                                    onOpen={() => this.setState({ dropdownOpen: true })}
                                    defaultValue={this.state.value ? this.state.value.label : null}
                                    containerStyle={{ height: 40, width: 140, marginBottom: this.state.dropdownOpen ? '50%' : 0 }}
                                    style={{ backgroundColor: '#fafafa' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa', }}
                                    onChangeItem={(item) => {
                                        switch (item.value) {
                                            case "pickedup":
                                                this.setState({ value: item.value, dropdownOpen: false, pickOrder: true })
                                                break;
                                            case "dropped":
                                                this.setState({ value: item.value, dropdownOpen: false, pickOrder: true })
                                                break;
                                            case "collect":
                                                this.setState({ value: item.value, dropdownOpen: false, pickOrder: true })
                                                break;
                                            case "delivered":
                                                this.setState({ value: item.value, dropdownOpen: false, pickOrder: true })
                                                break;
                                            default:
                                                this.setState({ value: item.value, dropdownOpen: false })
                                                break;
                                        }
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: '2.5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{}}>
                                    <View>
                                        <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Order Summary</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '2.5%' }}>
                                    <FlatList
                                        data={this.state.orderList}
                                        showsVerticalScrollIndicator={false}
                                        ItemSeparatorComponent={this._renderListSeparator}
                                        renderItem={({ item, index }) => this._renderListItems(item, index)}
                                        keyExtractor={item => item}
                                    />
                                </View>
                            </View>
                        </View>

                    </KeyboardAwareScrollView>
                </View>
                <View style={{ backgroundColor: 'white' }}>

                    <View onPress={() => { }} style={{
                        borderRadius: 10,
                        borderColor: "#EEE",
                        backgroundColor: 'white',
                        borderWidth: 1,
                        elevation: 2,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        marginBottom: '5%',
                        marginHorizontal: '5%'
                    }}>
                        <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Map', {
                                screen: 'Map',
                                params: { address: this.state.address, region: this.state.region, item: this.state.item }
                            })}>
                                <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                    <Text style={styles.checkButtonTextStyle}>{'Track order'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.checkoutInnerContainer}>
                            <>
                                {/* <View style={styles.checkoutItemStyle}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#0DA7DF', alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10 }}>
                                            <Icon.Feather name="percent" size={15} color="white" />
                                        </View>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12, marginLeft: '5%', fontFamily: 'Roboto-Light' }}>{'Get 10 discount'}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon.AntDesign name='checkcircle' color='#0DA7DF' size={15} />
                                    </View>
                                </View> */}
                                <View style={styles.checkoutItemStyle}>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Total</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Rs.{this.state.totalPrice}</Text>
                                    </View>
                                </View>
                                <View style={styles.checkoutItemStyle}>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Shipping</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Rs.{(this.state.grandTotal - this.state.totalPrice)}</Text>
                                    </View>
                                </View>
                                {/* <View style={styles.checkoutItemStyle}>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Discount</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.discountTextStyle}>Rs.{'50'}</Text>
                                    </View>
                                </View> */}
                                <View style={styles.lineStyle}></View>
                            </>
                            <View style={styles.checkoutItemStyle}>
                                <View>
                                    <Text style={styles.totalTextStyle}>Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.totalPriceTextStyle}>Rs. {this.state.grandTotal}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Modal isVisible={pickOrder}>
                    <View style={[styles.cardContainer]}>

                        <View style={{}}>
                            <Text style={{ color: '#193628', fontFamily: 'Roboto-Regular', fontSize: 16 }}>{value}</Text>
                        </View>
                        <View style={{ marginTop: '2.5%', borderWidth: 0.3, borderColor: '#99A0B0' }}>

                        </View>
                        <View style={{ marginTop: '2%', }}>
                            {
                                value == "pickedup" ?
                                    <Text style={{ color: '#7A7A7A', fontFamily: 'Nunito-Regular', }}>Are you sure to confirm pickup the order</Text>
                                    : value == "dropped" ?
                                        <Text style={{ color: '#7A7A7A', fontFamily: 'Nunito-Regular', }}>Are you sure to confirm dropped the order</Text>
                                        : value == "collect" ?
                                            <Text style={{ color: '#7A7A7A', fontFamily: 'Nunito-Regular', }}>Are you sure to confirm collect the order</Text>
                                            : value == "delivered" ?
                                                <Text style={{ color: '#7A7A7A', fontFamily: 'Nunito-Regular', }}>Are you sure to confirm delivered the order</Text>
                                                : null
                            }
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10%' }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', }} onPress={() => this.setState({ pickOrder: false })}>
                                <LinearGradient colors={['#FFF', '#FFF']} style={styles.clearButtonContainer}>
                                    <Text style={styles.clearTextStyle}>{'Cancel'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={{ width: 15 }}></View>
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => {
                                this.setState({ btnLoading: true })
                                if (value == 'Delivered') {
                                    this.setState({ pickOrder: false }, () => this.props.navigation.navigate('OrdersDelivered'))
                                }
                                else {
                                    let userData = {
                                        order_id: item.id,
                                        rider_id: item.rider_id
                                    }
                                    AuthServices.riderOrderUpdate(userData)
                                        .then((response) => {
                                            this.setState({ pickOrder: false })

                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            this.setState({ pickOrder: false })
                                        })
                                }
                            }}>
                                <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.saveButtonContainer}>
                                    {btnLoading ?
                                        <ActivityIndicator color="#FFF" size="small" />
                                        :
                                        <Text style={styles.checkButtonTextStyle}>{'Save'}</Text>}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </>
        )
    }
}