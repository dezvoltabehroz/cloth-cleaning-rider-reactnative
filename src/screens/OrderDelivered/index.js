import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style'
const screenHeight = Dimensions.get('window').height;
import ThankYou from '../../assets/svg/thankyou.svg';
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ marginTop: '0%' }}>
                        <ThankYou />
                    </View>
                    <Text style={{ marginTop: '5%', color: '#374B5C', fontFamily: 'Roboto-Bold' }}>Successfully Delivered</Text>
                    <View style={{ marginTop: '2.5%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Order Number:</Text>
                            <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 12, fontFamily: 'Roboto-Medium' }}>  #00000456</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => this.props.navigation.replace('Home')}>
                        <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                            <Text style={styles.checkButtonTextStyle}>{'Continue'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </>
        )
    }
}