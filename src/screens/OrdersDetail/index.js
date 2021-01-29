import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, } from 'react-native';
import styles from './style';
import ProgressCircle from 'react-native-progress-circle'
import { AuthServices } from '../../services';
import moment from 'moment'
import { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import { ActivityIndicator } from 'react-native';
import { RefreshControl } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: '',
            title: '',
            price: "",
            quantity: '',
            date: '',
            orderNumber: '',
            address: '',
            totalPrice: '',
            discount: '',
            shipping: '',
            status: '',
            orders: [],
            grandTotal: '',
            loading: true,
        }
    }
    componentDidMount = () => {
        this.setState({ loading: true })
        let userData = {
            order_id: this.props.route.params.item.id,
            rider_id: this.props.route.params.item.rider_id
        }
        AuthServices.getOrderDetails(userData)
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.result.deliveryTime)
                    this.setState({
                        address: response.data.result.deliveryAddress,
                        status: response.data.result.orderStatus,
                        totalPrice: response.data.result.totalPrice,
                        grandTotal: response.data.result.grandTotal,
                        orders: response.data.result.orderedproduct,
                        orderNumber: response.data.result.id,
                        date: response.data.result.deliveryTime,
                        loading: false
                    })
                }
            })
            .catch((err) => console.log(err))
    }



    render() {
        const { title, price, quantity, description, orders, status, loading, orderNumber, address, date, shipping, discount, totalPrice } = this.state;
        return (
            <>
                {
                    loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={30} color={'#0DA7DF'} />
                        </View>
                        :
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <ScrollView refreshControl={
                                <RefreshControl
                                    refreshing={this.state.loading}
                                    onRefresh={() => this.componentDidMount()}
                                    tintColor={'#0DA7DF'}
                                    colors={['#0DA7DF']}
                                />
                            } contentContainerStyle={{ paddingBottom: 80 }}>
                                <View style={styles.upperContainer}>
                                </View>
                                <View style={styles.imageContainer}>
                                    <ProgressCircle
                                        percent={status == 'approved' ? 50 : 100}
                                        radius={50}
                                        borderWidth={10}
                                        color={status == 'pending' ? 'orange' : status == 'cancel' ? 'red' : status == 'confirm' ? '#4eb42f' : "green"}
                                        shadowColor="#F0F0F0"
                                        bgColor="#fff"
                                    >
                                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: "#0DA7DF", textTransform: 'capitalize' }}>{status}</Text>
                                    </ProgressCircle>
                                </View>
                                <View style={styles.lowerContainer}>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.headingTitleStyle}>Order Details</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.totalPriceTextStyle, { fontSize: 14, fontFamily: 'Roboto-Medium', textTransform: 'capitalize' }]}>{status}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Your order number:</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>#{orderNumber}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Address</Text>
                                        </View>
                                        <View style={{ width: 160 }}>
                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium', textAlign: 'right' }]}>{address}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Delivery date:</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>{date != null ? moment(date).format('ll') : ''}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    {
                                        orders.map((item, index) => {
                                            return (
                                                <>
                                                    <View style={styles.itemQuantityContainer}>
                                                        <View>
                                                            <Text style={styles.headingTitleStyle}>{item.productorder.name}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={styles.headingTitleStyle}>Rs.{item.unitPrice * item.quantity}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.itemQuantityContainer}>
                                                        <View>
                                                            <Text style={styles.listTextStyle}>Rs. {item.unitPrice} X {item.quantity}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>{item.productorder.productcategory.name}</Text>
                                                        </View>
                                                    </View>
                                                </>
                                            )
                                        })
                                    }
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Total</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listTextStyle}>Rs.{totalPrice}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Shipping</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listTextStyle}>Rs.{this.state.grandTotal - totalPrice}</Text>
                                        </View>
                                    </View>
                                    {/* <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Discount</Text>
                            </View>
                            <View>
                                <Text style={[styles.listTextStyle, { color: '#A50808' }]}>Rs.{discount}</Text>
                            </View>
                        </View> */}
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Total</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Rs.{this.state.grandTotal}</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                }
            </>
        )
    }
}