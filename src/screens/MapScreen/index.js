import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, } from 'react-native-maps';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 33.6518,
                longitude: 73.1566,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            loading: true
        }
    }

    componentDidMount = () => {
        const { region } = this.props.route.params;
        this.setState({ region: region })
    }

    render() {
        const { region } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1, height: '100%', width: '100%' }}
                    region={region}>
                    <Marker.Animated
                        opacity={0.5}
                        style={{ width: 20, height: 20 }}
                        coordinate={{
                            latitude: region.latitude,
                            longitude: region.longitude,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                        }}
                    ></Marker.Animated>
                </MapView>
                <TouchableOpacity style={{ position: 'absolute', top: '90%', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Search', { item: this.props.route.params.item })}>
                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                        <Text style={styles.checkButtonTextStyle}>{'Search'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}