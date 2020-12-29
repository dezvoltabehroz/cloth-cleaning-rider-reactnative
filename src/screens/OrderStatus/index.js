import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Icon, } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Phone from '../../assets/svg/call.svg';
import DropDownPicker from 'react-native-dropdown-picker';

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
            region: {
                latitude: 32.1877,
                longitude: 74.1945,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            address: 'Park Rd, Islamabad, Islamabad Capital...',
            discountModal: false,
            orderList: [
                {
                    id: 1,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 2,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 3,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 4,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 5,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 6,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 7,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"

                },
                {
                    id: 8,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
            ]
        }
    }

    componentDidMount = () => {
        if (this.props.route.params.region != undefined) {
            const { region, address } = this.props.route.params;
            console.log("region:", region)
            this.setState({ region: region != undefined ? region : this.state.region, address: address != undefined ? address : this.state.address })
        }
    }
    _renderListItems = (item, index) => {
        return (
            <>
                <View style={styles.listContentContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={styles.itemNameTextStyle}>{item.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>Rs. {item.price} X {item.quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Medium', fontSize: 12 }}>Rs. {item.price * item.quantity}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{item.serviceType}</Text>
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
        const { activeTab, discount, delivery, item, discountValue } = this.state;

        return (
            <>
                <View style={{ flex: 1, paddingTop: '5%', backgroundColor: 'white' }}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '10%' }}>
                        <View style={{
                            borderRadius: 10,
                            elevation: 3,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
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
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: item.serviceType == 'Express' ? '#D20505' : '#0DA7DF' }}>{item.serviceType}</Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginVertical: '5%' }}>Deliver date</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%' }}>{item.delivery}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginVertical: '5%' }}>Pickup date</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%' }}>{item.pickUp}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', color: '#7A7A7A', fontSize: 12, marginTop: '5%' }}>Shift</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', marginBottom: '5%' }}>{item.shift}</Text>
                                </View>
                            </View>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '5%', marginBottom: '5%', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, }}>{'Order Status'}</Text>
                                <DropDownPicker
                                    items={[
                                        {
                                            id: 1,
                                            label: 'Pick Order',
                                            value: 'Pick Order'
                                        },
                                        {
                                            id: 2,
                                            label: 'Pick Order',
                                            value: 'Pick Order'
                                        }]}
                                    placeholder="Pick Order"
                                    onClose={() => this.setState({ dropdownOpen: false })}
                                    onOpen={() => this.setState({ dropdownOpen: true })}
                                    defaultValue={this.state.value ? this.state.value : null}
                                    containerStyle={{ height: 40, width: 140, marginBottom: this.state.dropdownOpen ? '25%' : 0 }}
                                    style={{ backgroundColor: '#fafafa' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa', }}
                                    onChangeItem={(item) => this.setState({ value: item.value, dropdownOpen: false }, () => console.log(item.value))}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{}}>
                                    <View>
                                        <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Order Summary</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
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
                        elevation: 3,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        marginBottom: '5%',
                        marginHorizontal: '5%'
                    }}>
                        <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Map', {
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
                                <View style={styles.checkoutItemStyle}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#0DA7DF', alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10 }}>
                                            <Icon.Feather name="percent" size={15} color="white" />
                                        </View>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12, marginLeft: '5%', fontFamily: 'Roboto-Light' }}>{'Get 10 discount'}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon.AntDesign name='checkcircle' color='#0DA7DF' size={15} />
                                    </View>
                                </View>
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
                                        <Text style={styles.checkoutTextStyle}>Rs.{'50'}</Text>
                                    </View>
                                </View>
                                <View style={styles.checkoutItemStyle}>
                                    <View>
                                        <Text style={styles.checkoutTextStyle}>Discount</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.discountTextStyle}>Rs.{'50'}</Text>
                                    </View>
                                </View>
                                <View style={styles.lineStyle}></View>
                            </>
                            <View style={styles.checkoutItemStyle}>
                                <View>
                                    <Text style={styles.totalTextStyle}>Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.totalPriceTextStyle}>Rs. {activeTab == 0 ? this.state.totalPrice : discount ? this.state.totalPrice + delivery - discountValue : this.state.totalPrice + delivery}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </>
        )
    }
}